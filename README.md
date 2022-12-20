# Gyant-Challenge-Doctor-Case-Label


### Requirements
Docker Desktop or standalone installs of Docker + Docker Compose


### Generate Images for Backend (NestJS) and Database (MongoDB)
```docker compose build```

### Create Containers for Backend (NestJS) and Database (MongoDB)
```docker compose create```


## Local Development

### Manually start dcl-database container
```docker start dcl-database```

### Start backend local (host) development server
```cd ./images/backend/```  
```npm run start:dev```

### Start frontend local (host) development server
```cd ./images/frontend/```  
```npm start```


## Production Preview

### Run entire Docker Composer stack
```docker compose up```