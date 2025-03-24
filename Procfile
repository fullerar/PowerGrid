web: mkdir -p /app/dagster_home && dagster schedule start --start-all
worker: dagster job execute -f repository.py -j power_grid_data_pipeline
