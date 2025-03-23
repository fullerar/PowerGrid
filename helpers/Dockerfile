# Start with a base image that has Python
FROM python:3.8-slim

# Set the working directory inside the container
WORKDIR /app

# Install necessary build tools (if required)
RUN apt-get update && apt-get install -y build-essential python3-dev

# Copy the requirements.txt file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Define the command to run the application
CMD ["python", "PowerGrid.py"]
