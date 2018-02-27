FROM node:latest

# Set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Add environment variables
ARG REACT_APP_METAGENSCOPE_SERVICE_URL
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
ENV REACT_APP_METAGENSCOPE_SERVICE_URL $REACT_APP_METAGENSCOPE_SERVICE_URL

# Install and cache app dependencies
ADD package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install pushstate-server -g --silent

ADD typings.json /usr/src/app/typings.json
RUN npm install typings -g --silent
RUN typings install

# Add app
ADD . /usr/src/app

# Build react app (limit Node's resource hogging)
RUN npm run build

# Start app
CMD ["pushstate-server", "build"]
