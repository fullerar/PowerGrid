# Functions for renewable energy monitoring

from .api_fetcher import fetch_grid_data
import matplotlib.pyplot as plt


def fetch_renewable_energy_data(api_url):
    renewable_data = fetch_grid_data(api_url)
    if renewable_data:
        solar = renewable_data["solar"]
        wind = renewable_data["wind"]
        print(f"Solar energy produced: {solar} MW")
        print(f"Wind energy produced: {wind} MW")
        plot_renewable_energy(solar, wind)


def plot_renewable_energy(solar, wind):
    fig, ax = plt.subplots()
    ax.bar(["Solar", "Wind"], [solar, wind])
    ax.set_title("Renewable Energy Production")
    plt.show()
