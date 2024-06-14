FROM node:20.12.2 as build
WORKDIR /workspace
COPY package.json package-lock.json ./
RUN npm install 
COPY . ./
RUN npm run build
EXPOSE 3000
