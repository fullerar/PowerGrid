import matplotlib.pyplot as plt


# Function to plot the energy mix (bar chart)
def plot_energy_mix(energy_mix):
    # Create the bar chart
    sources = list(energy_mix.keys())
    values = list(energy_mix.values())

    fig, ax = plt.subplots(figsize=(10, 6))  # Increase figure size to prevent label cut-off
    ax.bar(sources, values)
    ax.set_title("Power Consumption Breakdown")
    ax.set_xlabel("Energy Sources")
    ax.set_ylabel("Power (MW)")

    # Rotate the X-axis labels and adjust the layout
    plt.xticks(rotation=45, ha='right')  # Rotate labels and make them more readable
    plt.tight_layout()  # Ensure there's enough space for labels

    return fig
