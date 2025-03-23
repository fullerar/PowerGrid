from tabulate import tabulate

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


# Function to refresh and show the data in the console
def refresh_data():
    display_data()


# Main logic to run the program
if __name__ == "__main__":
    # Display initial data
    display_data()

    # Simulate user action to refresh data (e.g., user presses a button)
    # Here, we just call refresh_data after a short delay
    input("\nPress Enter to refresh data...\n")
    refresh_data()
