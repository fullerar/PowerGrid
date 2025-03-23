# Functions to fetch data from APIs

import requests


# Function to fetch latest power grid data
def fetch_grid_data():
    url = "https://api.electricitymap.org/v3/power-breakdown/latest?zone=US-MIDA-PJM"
    headers = {
        "auth-token": "nztSjedCFYMxcA05Odpl"  # Use your actual API token here
    }

    try:
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            data = response.json()

            # Print the raw JSON data to the console
            # print("Latest Raw API Response:", data)

            return data
        else:
            print(f"Error: {response.status_code}")
            return None
    except Exception as e:
        print(f"Error fetching data: {e}")
        return None


# Function to fetch historical power grid data from last 24 hours
def fetch_historical_grid_data():
    url = "https://api.electricitymap.org/v3/power-breakdown/latest?zone=US-MIDA-PJM"
    headers = {
        "auth-token": f"nztSjedCFYMxcA05Odpl"  # Use your actual API token here
    }

    try:
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            data = response.json()

            # Print the raw JSON data to the console
            print("Historical Raw API Response:", data)

            return data
        else:
            print(f"Error: {response.status_code}")
            return None
    except Exception as e:
        print(f"Error fetching data: {e}")
        return None
