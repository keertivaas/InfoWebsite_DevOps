FROM node:latest
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm", "start"]