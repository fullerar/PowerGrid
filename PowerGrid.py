import tkinter as tk
from tkinter import messagebox

from helpers.api_fetcher import fetch_grid_data, fetch_historical_grid_data
from helpers.presentation import plot_energy_mix

import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg


# Function to update the label with fetched data
def update_data():
    data = fetch_grid_data()

    if data:
        # Extract energy mix and other relevant data from the response
        energy_mix = data['powerConsumptionBreakdown']
        renewable_percentage = data['renewablePercentage']
        fossil_free_percentage = data['fossilFreePercentage']
        zone = data['zone']  # Extract the zone

        # Update the header label with the zone
        header_label.config(text=f"Power Data for Zone: {zone}")

        # Create a formatted string to display
        power_data = f"Fossil-Free Percentage: {fossil_free_percentage}%\n"
        power_data += f"Renewable Percentage: {renewable_percentage}%\n"
        power_data += "\nEnergy Mix (Power Consumption):\n"
        for source, percentage in energy_mix.items():
            power_data += f"{source.capitalize()}: {percentage} MW\n"

        # Update the GUI label with the new data
        data_label.config(text=power_data)

        # Remove the previous chart if it exists
        for widget in plot_frame.winfo_children():
            widget.destroy()

        # Plot the energy mix
        fig = plot_energy_mix(energy_mix)

        # Embed the plot into Tkinter
        canvas = FigureCanvasTkAgg(fig, master=plot_frame)
        canvas.get_tk_widget().pack(pady=20, side="left")  # Add the chart to the plot_frame
        canvas.draw()
    else:
        messagebox.showerror("Error", "Could not fetch power grid data.")


# Setup the GUI window
root = tk.Tk()
root.title("Power Grid Data")

# Create a canvas widget to make the window scrollable
canvas = tk.Canvas(root)
canvas.pack(side="left", fill="both", expand=True)

# Create a vertical scrollbar
scrollbar = tk.Scrollbar(root, orient="vertical", command=canvas.yview)
scrollbar.pack(side="right", fill="y")

# Create a frame inside the canvas that will hold the content
scrollable_frame = tk.Frame(canvas)

# Configure the canvas to scroll with the scrollbar
canvas.configure(yscrollcommand=scrollbar.set)

# Add the scrollable_frame to the canvas window
canvas.create_window((0, 0), window=scrollable_frame, anchor="nw")


# Update the scrollable region whenever the content changes
def on_frame_configure(event):
    canvas.configure(scrollregion=canvas.bbox("all"))


# Bind the configure event to the scrollable_frame
scrollable_frame.bind("<Configure>", on_frame_configure)

# Create a header label to display the zone
header_label = tk.Label(scrollable_frame, text="Power Data for Zone: ", font=("Helvetica", 16), anchor="w")
header_label.pack(pady=20)

# Create a frame for the text and chart to be side by side
side_by_side_frame = tk.Frame(scrollable_frame)
side_by_side_frame.pack(pady=20)

# Create the label to display the data
data_label = tk.Label(side_by_side_frame, text="Fetching data...", font=("Helvetica", 14), justify="left")
data_label.pack(side="left", padx=10)  # Place label on the left side of the frame

# Create a frame to hold the bar chart (on the right side of the text)
plot_frame = tk.Frame(side_by_side_frame)
plot_frame.pack(side="left", padx=10)

# Create a button to refresh the data
refresh_button = tk.Button(scrollable_frame, text="Refresh Data", command=update_data)
refresh_button.pack(pady=10)

# Fetch initial data and display it
update_data()

# Run the GUI
root.mainloop()


