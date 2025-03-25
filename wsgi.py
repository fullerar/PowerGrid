# wsgi.py
from dagster_webserver import create_app

# create_app() returns the Dagster webserver WSGI application.
app = create_app()
