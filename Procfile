web: mkdir -p /app/dagster_home && dagster scheduler start --start-all
worker: dagster job execute -f repository.py -j power_grid_data_pipeline
