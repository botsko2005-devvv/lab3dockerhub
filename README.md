# Лабораторна робота №3. Робота з Docker image

Студент: Боцко Іван Віталійович, група ІК-41

У роботі створено власні Docker-образи за допомогою Dockerfile.

## Проєкти

| Папка | Опис | Образ | Порт |
|-------|------|-------|------|
| mydockerapp | Статична сторінка на Nginx | my-nginx:1.0 | 8080 |
| myflaskapp | Flask-додаток | myflaskapp:1.0, 2.0 | 5000 |
| mynodeapp | Node.js (Express) додаток | mynodeapp:1.0, 2.0 | 3000 / 4000 |

## Як запустити

```bash
cd mydockerapp
docker build -t my-nginx:1.0 .
docker run -d -p 8080:80 my-nginx:1.0
```

Для інших проєктів так само: перейти в папку, виконати `docker build`, потім `docker run`.

## Що змінено у версії 2.0

- **Flask:** змінено текст у `app.py`, базовий образ `python:3.10-slim` → `python:3.11`.
- **Node.js:** порт і привітання беруться зі змінних середовища (`ENV` у Dockerfile), порт змінено на 4000.

## Docker Hub

Образ завантажено на Docker Hub: `ivanbotsko/my-nginx:1.0`

```bash
docker pull ivanbotsko/my-nginx:1.0
```
