# base image
FROM node:8.16.0-alpine

WORKDIR /app

COPY . ./
# install and cache app dependencies
COPY package.json /app/package.json

ADD `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install --silent

# RUN npm install react-scripts@3.0.1 -g --silent
CMD ["npm", "start"]

# # start app


# base image
# FROM node:8.16.0-alpine as react-build
# set working directory
# WORKDIR /app

# COPY . ./
# ADD `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH
# ENV name John Dow

# RUN npm install --silent


# CMD ["ls"]
# ENTRYPOINT echo "Hello World"
# CMD [ "World" ]
# CMD echo Hello ${name}
# ENTRYPOINT echo "Hello, $name"
# RUN npm install react-scripts@3.0.1 -g --silent
# RUN echo "Hello World"

# start app
# ENTRYPOINT [ "npm build" ]

# FROM node:8.16.0-alpine as react-build
# # set working directory
# WORKDIR /app

# COPY . ./
# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# RUN npm install --silent
# RUN npm install react-scripts@3.0.1 -g --silent

# # start app

# FROM alpine
# RUN echo "${name} ${prefix}"
# RUN npm install --silent
