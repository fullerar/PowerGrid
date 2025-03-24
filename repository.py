import logging
import requests
import pandas as pd
from tabulate import tabulate
from dagster import op, job, schedule, repository


# Define your operations (ops)
@op
def fetch_grid_data():
    api_url = "https://api.electricitymap.org/v3/power-breakdown/latest?zone=US-MIDA-PJM"
    headers = {
        "auth-token": "nztSjedCFYMxcA05Odpl"
    }
    try:
        response = requests.get(api_url, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        logging.error(f"Error fetching data: {e}")
        return None


@op
def process_data_with_pandas(data):
    if data is None:
        raise ValueError("No data received from the fetch operation.")

    # Example: Process data with Pandas and return as a DataFrame
    try:
        energy_mix = data['powerConsumptionBreakdown']
        df = pd.DataFrame(list(energy_mix.items()), columns=["Energy Source", "Power Consumption (MW)"])
        return df
    except KeyError as e:
        raise ValueError(f"Missing expected key in data: {e}")


@op
def display_data(df):
    # Format the DataFrame as a table and print it
    print("\nPower Grid Data Processed with Pandas:\n")
    print(tabulate(df, headers="keys", tablefmt="grid"))


# Define the job that ties all the ops together
@job
def power_grid_data_pipeline():
    data = fetch_grid_data()
    if data:
        df = process_data_with_pandas(data)
        display_data(df)


@schedule(cron_schedule="* * * * *", job=power_grid_data_pipeline)  # Run every minute
def my_scheduled_job(context):
    return power_grid_data_pipeline()


# Define a repository for Dagster
@repository
def my_repository():
    return [
        power_grid_data_pipeline,   # Add the job to the repository
        my_scheduled_job           # Add the schedule to the repository
    ]
