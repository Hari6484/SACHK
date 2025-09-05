# Use the official Node.js 18 image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
# This step is done separately to leverage Docker's caching,
# so npm install only runs if package files change.
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose the port the app runs on (as defined in your code)
EXPOSE 3000

# Set the command to start the server
CMD ["node", "index.js"]