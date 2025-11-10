FROM node:22-slim

WORKDIR /home/node/app

# Copiar archivos de dependencias e instalar
COPY ./app/package*.json ./
RUN npm install
