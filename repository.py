# app.py
from flask import Flask, render_template_string
import pandas as pd
import requests

app = Flask(__name__)


@app.route('/')
def show_data():
    api_url = "https://api.electricitymap.org/v3/power-breakdown/latest?zone=US-MIDA-PJM"
    headers = {"auth-token": "nztSjedCFYMxcA05Odpl"}

    response = requests.get(api_url, headers=headers)
    data = response.json()
    energy_mix = data['powerConsumptionBreakdown']
    df = pd.DataFrame(list(energy_mix.items()), columns=["Energy Source", "Power Consumption (MW)"])

    # Convert DataFrame to HTML table
    return render_template_string("""
        <h2>Power Grid Data</h2>
        {{ table|safe }}
    """, table=df.to_html(index=False, border=0, classes='dataframe table table-striped'))


if __name__ == '__main__':
    app.run(debug=True)
