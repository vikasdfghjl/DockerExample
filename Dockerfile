FROM node:18.15.0

COPY package.json /app/
COPY backend /app/

WORKDIR /app

RUN npm install

CMD ["node", "server.js"]