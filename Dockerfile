# stage 1 
FROM node:16-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# stage 2
FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production

COPY --from=builder usr/src/app/dist ./dist

COPY .env .


EXPOSE 3000
CMD [ "node", "dist/index.js" ]