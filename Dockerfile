FROM node:alpine as npm-builder

WORKDIR /usr/local/ekercode-cms

COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN npm run build

# ----------------------------------------------

FROM nginx:alpine

LABEL maintainer="Jianhua Cheng<w.chengjianhua@gmail.com>"

ENV APP_HOME=/usr/local/ekercode-cms
WORKDIR ${APP_HOME}
COPY --from=npm-builder ${APP_HOME}/dist ./
COPY nginx/*.conf /etc/nginx/conf.d/
