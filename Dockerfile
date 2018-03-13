FROM abiosoft/caddy:php

COPY Caddyfile /etc/
COPY dist/ /srv/
