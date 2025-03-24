# Use a Python base image
FROM python:3.8-slim

# Install curl, build-essential, and other required tools
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    python3-dev \
    python3-pip \
    python3-setuptools \
    libssl-dev \
    && apt-get clean

# Install Rust using rustup
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

# Set up Cargo environment
RUN echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.bashrc

# Install dependencies for your app
COPY requirements.txt /app/
WORKDIR /app
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application files
COPY . /app/

# Start your application
CMD ["python", "repository.py"]
