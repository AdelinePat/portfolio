FROM node:22-alpine
WORKDIR /app
RUN npm init -y && npm install sass -y && npm pkg set scripts.sass="sass --watch --poll ./style/scss:./style/css"
CMD ["npm", "run", "sass"]
