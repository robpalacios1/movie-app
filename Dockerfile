# Establece la imagen base de Alpine con Node.js
FROM node:alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el código fuente de la aplicación al contenedor
COPY . .

# Expone el puerto 3000 (si tu aplicación utiliza otro puerto, cámbialo aquí)
EXPOSE 3000

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["npm", "start"]