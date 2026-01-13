# fondasi
# node version 18 alpine -> ringan sekali
FROM node:18-alpine 

# pindah ke folder app
WORKDIR /app

# salin package.json dan package-lock.json
COPY package*.json .

# install package
RUN npm install

# salin file all (app.js)
COPY . .

# export port 
EXPOSE 3000

# run app 
CMD ["npm", "start"]