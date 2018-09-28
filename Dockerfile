FROM alpine:latest as build

ENV HUGO_VERSION 0.49
ENV HUGO_BINARY hugo_${HUGO_VERSION}_Linux-64bit.tar.gz

RUN set -x && \
  apk add --update wget ca-certificates && \
  wget https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
  tar xzf ${HUGO_BINARY} && \
  mv hugo /usr/bin 

COPY ./ /site
WORKDIR /site
RUN mkdir /website
RUN /usr/bin/hugo -d /website

FROM nginx:latest

COPY --from=build /website /usr/share/nginx/html
