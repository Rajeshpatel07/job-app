FROM node:23-alpine

WORKDIR /home/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

RUN npx prisma generate

CMD ["node","dist/index.js"]


