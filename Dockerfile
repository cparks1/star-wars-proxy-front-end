# Use Node.js 18.17.0 LTS (long-term support) as the base image
FROM node:18.17.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container's working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container's working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 to access the app
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
