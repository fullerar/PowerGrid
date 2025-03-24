web: mkdir -p /app/dagster_home && \
     echo "instance_class: default" > /app/dagster_home/dagster.yaml && \
     echo "storage:" >> /app/dagster_home/dagster.yaml && \
     echo "  event_log_storage:" >> /app/dagster_home/dagster.yaml && \
     echo "    module: dagster.core.storage.event_log" >> /app/dagster_home/dagster.yaml && \
     echo "    config:" >> /app/dagster_home/dagster.yaml && \
     echo "      local:" >> /app/dagster_home/dagster.yaml && \
     echo "        base_dir: /app/dagster_home/event_logs" >> /app/dagster_home/dagster.yaml && \
     echo "  local_artifacts_storage:" >> /app/dagster_home/dagster.yaml && \
     echo "    module: dagster.core.storage.local" >> /app/dagster_home/dagster.yaml && \
     echo "    config:" >> /app/dagster_home/dagster.yaml && \
     echo "      base_dir: /app/dagster_home/artifacts" >> /app/dagster_home/dagster.yaml && \
     echo "  run_storage:" >> /app/dagster_home/dagster.yaml && \
     echo "    module: dagster.core.storage.run" >> /app/dagster_home/dagster.yaml && \
     echo "    config:" >> /app/dagster_home/dagster.yaml && \
     echo "      local:" >> /app/dagster_home/dagster.yaml && \
     echo "        base_dir: /app/dagster_home/runs" >> /app/dagster_home/dagster.yaml && \
     echo "Checking if repository.py exists..." && \
     ls -l /app && \
     dagster scheduler start --start-all
worker: dagster job execute -f repository.py -j power_grid_data_pipeline
