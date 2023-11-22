# Stage 1: Build stage
FROM node:18 as builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install 

# Copy application source files
COPY public /usr/src/app/public
COPY src /usr/src/app/src
COPY webpack /usr/src/app/webpack
COPY babel.config.js .
COPY .env* ./
COPY tsconfig.json .

# Build the application
RUN npm run build

# Stage 2: Production stage
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm install --production && \
    npm cache clean --force

# Copy built application from the builder stage
COPY --from=builder /usr/src/app/dist /usr/src/app/dist
COPY .env* ./
COPY webpack/define-config.js ./webpack/
COPY manifest.json /manifest.json

# Start the server with launcher.js using docker environment variables. This is the preferred startup method when created via Blocks.
# If launcher.js cannot find an existing start script, it will generate one to start the server based on the supplied args
ENTRYPOINT node --max-http-header-size=800000 dist/server/launcher.js --alias=$alias --projectId=$projectId --accessToken=$accessToken
EXPOSE 3001

