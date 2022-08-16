FROM node:latest
EXPOSE 3000

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Install some depenendencies
COPY package.json .
RUN yarn install
RUN yarn global add react-scripts@3.4.1
COPY . ./

# Uses port which is used by the actual application
EXPOSE 3000

# Default command
CMD ["yarn", "run", "start"]