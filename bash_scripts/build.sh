#!/usr/bin/env bash

docker-compose build && \
docker-compose up -d && \
mkdir -p node_modules && \
docker cp -L underground_legions:/app/node_modules ./ && \
docker-compose down