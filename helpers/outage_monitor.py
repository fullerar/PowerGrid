# Functions to monitor outages

from .api_fetcher import fetch_grid_data
# from notification import send_notification  # If you have a notification function in another file


def check_outages(outage_api_url, params=None):
    outage_data = fetch_grid_data(outage_api_url, params)
    if outage_data:
        if outage_data["outage_detected"]:
            print("Outages detected.")
            # send_notification("Power outage detected!")
        else:
            print("No outages detected.")
    else:
        print("Error fetching outage data.")
