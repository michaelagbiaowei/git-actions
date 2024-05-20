FROM node:alpine3.19

RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot

WORKDIR /app

COPY package*.json .

RUN npm ci --ignore-scripts

COPY . .

USER nonroot

EXPOSE 7000

CMD ["npm", "start"]

