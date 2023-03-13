#!/bin/bash

docker stop workouts-data-service && docker rm workouts-data-service
docker image rm "yavor.mihaylov/workouts-data-service"

docker build . -t yavor.mihaylov/workouts-data-service
docker run -p 3000:3000 -p 9229:9229 -d \
	--name workouts-data-service \
	--volume $(pwd):/usr/src/app \
	yavor.mihaylov/workouts-data-service

# docker build -f Dockerfile.dev .
# docker exec -it workouts-data-service /bin/bash

# docker build . -t yavor.mihaylov/workouts-data-transform-service
# docker run -d \
# 	--name  workouts-data-transform-service \
# 	--volume $(pwd):/usr/src/app \
# 	yavor.mihaylov/workouts-data-transform-service

# docker run -p 3100:3100 -d \
# 	--name crossfit-diary-frontend \
# 	--volume $(pwd):/usr/src/app \
# 	yavor.mihaylov/crossfit-diary-frontend
