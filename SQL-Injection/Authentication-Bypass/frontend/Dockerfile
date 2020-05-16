FROM node:8.9.4-alpine
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

ENV FRONT_SERVICE frontend
ENV DB_SERVICE db
ENV FRONT_PORT 3030
ENV DB_PORT 3306



CMD ["npm", "run", "admin"]