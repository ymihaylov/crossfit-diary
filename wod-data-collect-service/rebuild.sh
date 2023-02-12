#!/bin/bash

docker stop wod-data-collect-service && docker rm wod-data-collect-service
docker image rm "yavor.mihaylov/wod-data-collect-service"

docker build . -t yavor.mihaylov/wod-data-collect-service
docker run -p 3000:8080 -d \
	--name wod-data-collect-service \
	--volume $(pwd):/usr/src/app \
	yavor.mihaylov/wod-data-collect-service

# docker build -f Dockerfile.dev .
# docker exec -it wod-data-collect-service /bin/bash
