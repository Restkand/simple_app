# Gunakan image node resmi sebagai base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Instal dependencies
RUN npm install

# Salin semua file dari direktori lokal ke working directory dalam container
COPY . .

# Build aplikasi untuk produksi
RUN npm run build

# Gunakan image nginx resmi untuk melayani konten build
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Ekspose port yang akan digunakan oleh container
EXPOSE 80

# Command untuk menjalankan nginx
CMD ["nginx", "-g", "daemon off;"]
