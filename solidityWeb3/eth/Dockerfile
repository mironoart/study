FROM node:10-stretch

WORKDIR /root/app/eth
COPY eth/package*.json ./

RUN npm install

COPY eth ./

CMD npm start
