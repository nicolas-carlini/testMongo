FROM node:14.3
RUN mkdir /src
WORKDIR /src
ADD /code/package.json /src/package.json
COPY /code/ /src/
EXPOSE 80
RUN npm install
CMD npm run start