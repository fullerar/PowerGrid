web: mkdir -p /tmp/dagster_home && touch /tmp/dagster_home/dagster.yaml && dagster schedule start --start-all
worker: dagster job execute -f repository.py -j power_grid_data_pipeline