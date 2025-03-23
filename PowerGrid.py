from tabulate import tabulate
import logging
import time
import threading
from helpers.api_fetcher import fetch_grid_data, fetch_historical_grid_data


# Function to display power grid data in tabular format
def display_data():
    data = fetch_grid_data()

    if data:
        # Extracting relevant data
        energy_mix = data['powerConsumptionBreakdown']
        renewable_percentage = data['renewablePercentage']
        fossil_free_percentage = data['fossilFreePercentage']
        zone = data['zone']  # Extract the zone

        # Print the header (Power Grid Data for Zone)
        print(f"\nPower Data for Zone: {zone}\n")

        # Create a list of rows for tabulated output
        table_data = [["Fossil-Free Percentage", f"{fossil_free_percentage}%"],
                      ["Renewable Percentage", f"{renewable_percentage}%"], ["Energy Mix (Power Consumption)", ""]]

        # Add energy mix data to the table
        for source, percentage in energy_mix.items():
            table_data.append([source.capitalize(), f"{percentage} MW"])

        # Print the table using tabulate
        print(tabulate(table_data, headers=["Metric", "Value"], tablefmt="grid"))

    else:
        print("Error: Could not fetch power grid data.")


# Function to refresh and display data every 30 seconds
def refresh_data_periodically():
    while True:
        display_data()
        time.sleep(30)  # Wait for 30 seconds before refreshing

# Main logic to run the program
if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)

    # Start the background thread to refresh data
    refresh_thread = threading.Thread(target=refresh_data_periodically, daemon=True)
    refresh_thread.start()

    # Keep the main program running (you can also add a stop condition if necessary)
    while True:
        time.sleep(1)  # Keeps the main thread alive
