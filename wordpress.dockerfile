FROM wordpress:latest

# Configuración de PHP
RUN { \
    echo "upload_max_filesize = 1G"; \
    echo "post_max_size = 1G"; \
    echo "memory_limit = 300M"; \
    } > /usr/local/etc/php/conf.d/uploads.ini

# Ajuste de usuario y grupo
ARG UNAME=www-data
ARG UGROUP=www-data
ARG UID=1000
ARG GID=1000
RUN usermod --uid $UID $UNAME && \
    groupmod --gid $GID $UGROUP

# Instalación de WP-CLI
RUN apt-get update && apt-get install -y curl less && \
    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    php wp-cli.phar --info && \
    chmod +x wp-cli.phar && \
    mv wp-cli.phar /usr/local/bin/wp && \
    rm -f wp-cli.phar

# Asegura que WP-CLI esté en PATH
ENV PATH="/usr/local/bin:${PATH}"

# Ajusta permisos para www-data
USER root
RUN chown -R www-data:www-data /var/www/html

# Limpieza
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
USER www-data

