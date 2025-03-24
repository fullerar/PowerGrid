# Use a Python base image
FROM python:3.8-slim

# Install Rust, Cargo, and required tools
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    python3-dev \
    python3-pip \
    python3-setuptools \
    libssl-dev \
    rustc \
    cargo \
    && apt-get clean

# Upgrade pip to the latest version
RUN pip install --upgrade pip

# Install dependencies for your app
COPY requirements.txt /app/
WORKDIR /app
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application files
COPY . /app/

# Start your application
CMD ["python", "repository.py"]
