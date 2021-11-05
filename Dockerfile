FROM node:latest
WORKDIR "/root/app"
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm", "start"]