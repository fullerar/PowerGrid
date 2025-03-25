web: gunicorn wsgi:app

worker: dagster job execute -f repository.py -j power_grid_data_pipeline
