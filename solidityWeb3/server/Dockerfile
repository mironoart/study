FROM node:10-stretch

WORKDIR /root/app/server
COPY server/package*.json ./
RUN npm i

COPY server ./

CMD npm start
