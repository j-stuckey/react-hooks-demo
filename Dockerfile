# Stage 1 - Development
FROM node as base
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install

# Stage 2 - Production
FROM node:12 as production
COPY --from=base /usr/src/app ./
RUN npm run build
