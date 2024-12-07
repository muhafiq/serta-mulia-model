FROM node:22-bullseye

RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    curl \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender1 \
    libc6 \
    libstdc++6 \
    libgcc1 \
    libtbb2 \
    libpng-dev \
    libjpeg-dev \
    libopenblas-dev \
    wget && \
    rm -rf /var/lib/apt/lists/*

RUN wget -q https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-cpu-linux-x86_64-2.11.0.tar.gz && \
    tar -C /usr/local -xzf libtensorflow-cpu-linux-x86_64-2.11.0.tar.gz && \
    ldconfig && \
    rm libtensorflow-cpu-linux-x86_64-2.11.0.tar.gz

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
