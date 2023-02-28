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

# docker build . -t yavor.mihaylov/workouts-data-transform-service
# docker run -d \
# 	--name  workouts-data-transform-service \
# 	--volume $(pwd):/usr/src/app \
# 	yavor.mihaylov/workouts-data-transform-service

# docker run -p 3100:3100 -d \
# 	--name crossfit-diary-frontend \
# 	--volume $(pwd):/usr/src/app \
# 	yavor.mihaylov/crossfit-diary-frontend
