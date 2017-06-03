FROM     ubuntu:16.04
MAINTAINER marco [dot] caballero [dot] d [at] gmail [dot] com

ENV DEBIAN_FRONTEND=noninteractive \
    ANDROID_HOME=/opt/android-sdk-linux \
    NODE_VERSION=6.10.2

# Install basics
RUN apt-get update &&  \
    apt-get install -y git wget curl unzip ruby && \

    curl --retry 3 -SLO "http://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz" && \
    tar -xzf "node-v$NODE_VERSION-linux-x64.tar.gz" -C /usr/local --strip-components=1 && \
    rm "node-v$NODE_VERSION-linux-x64.tar.gz" && \
    npm install -g npm@latest && \
    npm install -g ionic cordova && \
    npm cache clear --force && \

    gem install sass && \

    git config --global user.email "marco.caballero.d@gmail.com" && \
    git config --global user.name "MarcoCaballero" && \

    ionic start myApp sidemenu && \



#ANDROID
#JAVA

    apt-get update && apt-get install -y software-properties-common debconf-utils && \
    add-apt-repository -y ppa:webupd8team/java && \
    echo "oracle-java8-installer shared/accepted-oracle-license-v1-1 select true" | debconf-set-selections && \
    apt-get update && apt-get install -y oracle-java8-installer && \
    apt-get clean && \
    rm -fr /var/lib/apt/lists/* /tmp/* /var/tmp/*
    ENV JAVA8_HOME /usr/lib/jvm/java-8-oracle

# Install Deps
RUN dpkg --add-architecture i386 && apt-get update && apt-get install -y --force-yes expect git wget libc6-i386 lib32stdc++6 lib32gcc1 lib32ncurses5 lib32z1 python curl libqt5widgets5 && apt-get clean && rm -fr /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install unzip to extract zip file
RUN apt-get update && \
  apt-get install unzip

# Install Android SDK
RUN cd /opt && mkdir android-sdk-linux
RUN cd /opt/android-sdk-linux &&  wget --output-document=tools.zip https://dl.google.com/android/repository/tools_r25.2.3-linux.zip && \
  unzip tools.zip && \
  rm -f tools.zip && \
  cd /opt && chown -R root.root android-sdk-linux && \
  ls

# Copy install tools
COPY android-sdk-linux/tools /opt/tools
ENV PATH ${PATH}:/opt/tools
RUN ["chmod", "+x", "/opt/tools/android-accept-licenses.sh"]
RUN ["chmod", "+x", "/opt/tools/android-wait-for-emulator.sh"]

# Update SDK tools
RUN /opt/tools/android-accept-licenses.sh "/opt/android-sdk-linux/tools/bin/sdkmanager --verbose build-tools;25.0.2"

RUN /opt/tools/android-accept-licenses.sh "/opt/android-sdk-linux/tools/bin/sdkmanager --verbose platform-tools"

RUN /opt/tools/android-accept-licenses.sh "/opt/android-sdk-linux/tools/bin/sdkmanager --verbose platforms;android-25"

RUN /opt/tools/android-accept-licenses.sh "/opt/android-sdk-linux/tools/bin/sdkmanager --verbose tools"

RUN /opt/tools/android-accept-licenses.sh "/opt/android-sdk-linux/tools/bin/sdkmanager --verbose patcher;v4"

RUN /opt/tools/android-accept-licenses.sh "/opt/android-sdk-linux/tools/bin/sdkmanager --verbose extras;android;m2repository"

RUN /opt/tools/android-accept-licenses.sh "/opt/android-sdk-linux/tools/bin/sdkmanager --verbose extras;google;m2repository"

RUN /opt/tools/android-accept-licenses.sh "/opt/android-sdk-linux/tools/bin/sdkmanager --verbose extras;m2repository;com;android;support;constraint;constraint-layout-solver;1.0.2"

RUN /opt/tools/android-accept-licenses.sh "/opt/android-sdk-linux/tools/bin/sdkmanager --verbose system-images;android-25;google_apis;x86_64"

RUN /opt/tools/android-accept-licenses.sh "/opt/android-sdk-linux/tools/bin/sdkmanager --verbose update"

# Setup environment
ENV ANDROID_HOME /opt/android-sdk-linux
ENV PATH ${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools

RUN which adb
RUN which android

# Cleaning
RUN apt-get clean

WORKDIR myApp
EXPOSE 8100 35729
CMD ["ionic", "serve"]
