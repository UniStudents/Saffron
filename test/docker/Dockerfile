FROM node:latest
WORKDIR /app
COPY ./package.json /app
RUN npm install
COPY / /app
COPY /test/docker/saffron.json /test
RUN npm install typescript --save-dev
CMD npm run test-start