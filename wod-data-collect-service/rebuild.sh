#!/bin/bash

docker stop wod-data-collect-service && docker rm wod-data-collect-service
docker image rm "yavor.mihaylov/wod-data-collect-service"

docker build . -t yavor.mihaylov/wod-data-collect-service
docker run -p 3000:3000 -p 9229:9229 -d \
	--name wod-data-collect-service \
	--volume $(pwd):/usr/src/app \
	yavor.mihaylov/wod-data-collect-service

# docker build -f Dockerfile.dev .
# docker exec -it wod-data-collect-service /bin/bash
