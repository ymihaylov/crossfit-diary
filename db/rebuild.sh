#!/bin/bash

docker stop pg-database-service && docker rm pg-database-service
docker image rm "yavor.mihaylov/pg-database-service"

docker build . -t yavor.mihaylov/pg-database-service
docker run -p 5432:5432 -d \
	--name pg-database-service \
	--volume $(pwd):/usr/src/app \
	yavor.mihaylov/pg-database-service


# CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
# CREATE TABLE my_table (
#   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
#   text_field TEXT NOT NULL
# );

# text
# wod_date
# created_at
# updated_at
