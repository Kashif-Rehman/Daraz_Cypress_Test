FROM cypress/base

# Set up environment variables
ENV DOTENV_CONFIG_PATH /e2e/.env

# Set the working directory to the Cypress project directory
WORKDIR /e2e

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install Cypress dependencies
RUN npm install

# Copy the rest of your Cypress project files into the container
COPY . .

# Start Cypress tests
CMD ["npm", "run", "cypress:open"]
