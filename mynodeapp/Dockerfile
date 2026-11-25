# Базовий образ з Node.js
FROM node:18

# Робоча директорія у контейнері
WORKDIR /app

# Копіюємо package.json і package-lock.json (якщо є)
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь проєкт у контейнер
COPY . .

# Змінні середовища та порт
ENV PORT=4000
ENV WELCOME_MSG="Hello from Node.js Docker image v2.0 via ENV!"
EXPOSE 4000

# Команда запуску
CMD ["npm", "start"]
