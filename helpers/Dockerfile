FROM python:3.8

# Install system dependencies for Tkinter and other build tools
RUN apt-get update && apt-get install -y \
    build-essential \
    python3-dev \
    python3-distutils \
    gfortran \
    libtk8.6 \
    tk \
    libx11-dev \
    libxtst-dev \
    libjpeg8-dev \
    liblcms2-dev \
    libblas-dev \
    liblapack-dev

# Set working directory inside container
WORKDIR /app

# Copy the requirements.txt file
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . .

# Define command to run the app
CMD ["python", "PowerGrid.py"]
