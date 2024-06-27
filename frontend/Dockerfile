# Imagem base para o container
FROM nginx:alpine

# Copia os arquivos para dentro dos diretórios do nginx
COPY ./*.html /usr/share/nginx/html
COPY ./*.css /usr/share/nginx/html/
COPY ./*.js /usr/share/nginx/html
COPY ./assets/ /usr/share/nginx/html/assets/

# Expõe a porta padrão do servidor nginx
EXPOSE 80

# Comando para iniciar o servidor nginx
CMD [ "nginx", "-g", "daemon off;" ]

