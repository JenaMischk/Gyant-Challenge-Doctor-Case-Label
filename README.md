# Gyant-Challenge-Doctor-Case-Label


## Requirements
Docker Desktop or standalone installs of Docker and Docker Compose


## Production Preview

### Run entire Docker Composer stack
```docker compose up```


## Local Development

### Generate Images for Backend (NestJS), Database (MongoDB) and Frontend (React)
```docker compose build```

### Create Containers for Backend (NestJS), Database (MongoDB) and Frontend (React)
```docker compose create```

### Manually start dcl-database container
```docker start dcl-database```

### Start backend local (host) development server
```cd ./images/backend/```  
```npm run start:dev```

### Start frontend local (host) development server
```cd ./images/frontend/```  
```npm start```