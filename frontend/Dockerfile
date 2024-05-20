FROM node:alpine3.19 AS BUILD

RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot

WORKDIR /com

COPY package*.json .

RUN npm ci --ignore-scripts

COPY . .

RUN npm run build

#===========================

FROM nginx:alpine3.19 AS RUN

WORKDIR /usr/share/nginx/html

COPY --from=BUILD /com/dist .

USER nonroot

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]