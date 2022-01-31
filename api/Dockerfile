FROM node:16.3.0-alpine3.11

WORKDIR /api

COPY ./api/package*.json ./

ENV NODE_ENV=production

RUN npm install

COPY api .

EXPOSE 3000

CMD ["node", "index"]
