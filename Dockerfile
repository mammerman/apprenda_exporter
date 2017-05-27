FROM mhart/alpine-node:latest

WORKDIR /src
ADD . .

EXPOSE 3000
CMD ["node", "index.js"]
