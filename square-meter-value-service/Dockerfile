FROM node:14-alpine

EXPOSE 3000

RUN mkdir /app
WORKDIR /app
ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile

ADD . /app

CMD ["npm", "run", "start"]