web: mkdir -p /tmp/dagster_home && touch /tmp/dagster_home/dagster.yaml && gunicorn wsgi:app --bind 0.0.0.0:$PORT --workers 2

worker: dagster job execute -f repository.py -j power_grid_data_pipeline
