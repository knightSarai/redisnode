FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./
COPY tsconfig.json ./

RUN npm install
RUN npm install -g typescript
RUN npm install -g ts-node
RUN ls -a

COPY ./ ./
RUN npm run build

CMD ["npm", "start"]

