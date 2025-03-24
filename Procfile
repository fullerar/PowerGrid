web: mkdir -p /tmp/dagster_home && touch /tmp/dagster_home/dagster.yaml && dagster-webserver --host=0.0.0.0 --port=$PORT
worker: dagster job execute -f repository.py -j power_grid_data_pipeline
