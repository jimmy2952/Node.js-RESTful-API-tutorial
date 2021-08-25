FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN yarn install
COPY . .
ENTRYPOINT yarn migrate up && yarn start