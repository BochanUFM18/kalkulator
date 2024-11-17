# Menggunakan image Node.js sebagai base image
FROM node:16

# Set working directory di dalam container
WORKDIR /app

# Menyalin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Menginstal dependencies
RUN npm install

# Menyalin seluruh file proyek ke dalam container
COPY . .

# Ekspos port yang digunakan oleh aplikasi
EXPOSE 5000

# Perintah untuk menjalankan aplikasi
CMD ["node", "app.js"]
