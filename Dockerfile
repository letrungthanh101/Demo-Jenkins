FROM node:16.20.0
WORKDIR /app
ADD ./app
RUN npm install
EXPOSE 3000
CMD npm start