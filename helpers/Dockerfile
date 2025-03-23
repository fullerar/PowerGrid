FROM python:3.8-slim

# Install system build tools, including gfortran
RUN apt-get update && apt-get install -y build-essential python3-dev gfortran python3-distutils

# Set working directory inside container
WORKDIR /app

# Copy the requirements.txt file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . .

# Define command to run the app
CMD ["python", "PowerGrid.py"]
