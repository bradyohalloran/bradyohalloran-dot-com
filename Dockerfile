FROM nginx

ADD ./nginx.conf /etc/nginx/conf.d/default.conf
ADD /build /var/www/bradyohalloran.com/live
