# Use an official Node.js runtime as the base image
FROM node:21

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run the script when the container launches
CMD ["node", "index.js"]
