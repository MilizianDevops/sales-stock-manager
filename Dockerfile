FROM beevelop/android-nodejs

MAINTAINER Marco Caballero <marco.caballero.d@gmail.com>

EXPOSE 8100
EXPOSE 35729

ENV CORDOVA_VERSION 7.0.1

COPY . /opt/dockerized-sales-stock-manager

WORKDIR /opt/dockerized-sales-stock-manager

RUN npm i -g --unsafe-perm cordova@${CORDOVA_VERSION}

RUN npm i -g --unsafe-perm ionic@latest

RUN cd /opt/dockerized-sales-stock-manager

RUN npm install

RUN npm install node-sass

RUN npm install cordova-android@latest




