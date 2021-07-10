FROM node:16.3.0-alpine3.11

WORKDIR /api

COPY package*.json ./

ENV NODE_ENV=production

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "index"]
