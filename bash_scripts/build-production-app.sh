#!/usr/bin/env bash

docker-compose up -d && \
docker exec underground_legions mkdir -p dist && \
docker exec underground_legions npm i && \
docker exec underground_legions npm run build-production && \
mkdir -p dist && \
docker cp -L underground_legions:/app/dist ./