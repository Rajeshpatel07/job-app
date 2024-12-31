FROM node:23-alpine

WORKDIR /home/app

RUN npm install -g expo-cli

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 19000 19001 19002

CMD ["expo", "start", "--tunnel"]

