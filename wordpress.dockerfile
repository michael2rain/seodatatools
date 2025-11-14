FROM wordpress:6.8.3

# Configuración de PHP
RUN { \
    echo "upload_max_filesize = 1G"; \
    echo "post_max_size = 1G"; \
    echo "memory_limit = 300M"; \
    } > /usr/local/etc/php/conf.d/uploads.ini

# Instalar WP-CLI
RUN apt-get update && apt-get install -y curl less && \
    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    chmod +x wp-cli.phar && mv wp-cli.phar /usr/local/bin/wp && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Mantén el usuario root para que Apache bindee el puerto 80 sin problemas
USER root