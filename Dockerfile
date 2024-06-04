# Gunakan image node sebagai base
FROM node:14-alpine

# Buat direktori kerja dan salin package.json serta package-lock.json
WORKDIR /app
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Salin semua file ke dalam direktori kerja
COPY . .

# Expose port 3000
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["npm", "start"]
