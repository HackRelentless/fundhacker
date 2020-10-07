FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install nodemon -g

COPY . .

CMD ["nodemon", "index.js"]
