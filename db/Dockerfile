FROM postgres:latest

# Set the environment variables for the PostgreSQL container
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB mydb

# Copy the SQL scripts to initialize the database
# COPY ./init-scripts /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432
