FROM node:22-alpine

WORKDIR /nodejsapp

COPY . .   

RUN npm install

EXPOSE 3000

CMD ["node","index.js"]

# just for checking env vars
# docker run -p 3000:3000 -e SECRET=Rahul rahulapp


