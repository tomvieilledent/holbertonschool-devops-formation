FROM node:20-alpine

WORKDIR /app

# Copier les package avant. Si pas de modification alors pas besoin de re npm install donc gain de temps
COPY package*.json .

RUN npm install

# COPY le reste du code 
COPY . .

# Mauvais port exposé (8080 à la place de 3000)
EXPOSE 3000

CMD ["node", "index.js"]
