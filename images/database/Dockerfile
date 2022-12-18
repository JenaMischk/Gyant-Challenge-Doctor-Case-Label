FROM mongo:latest

#ENV MONGO_INITDB_ROOT_USERNAME root
#ENV MONGO_INITDB_ROOT_PASSWORD pw
ENV MONGO_INITDB_DATABASE dcl

COPY scripts/init.js /docker-entrypoint-initdb.d/