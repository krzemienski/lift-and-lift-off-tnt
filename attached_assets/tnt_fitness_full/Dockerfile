FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN node -e "console.log('[TNT] npm install @ '+new Date().toISOString())" && npm i
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN printf 'server {\n listen 80; server_name _; root /usr/share/nginx/html; location / { try_files $uri /index.html; }\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
