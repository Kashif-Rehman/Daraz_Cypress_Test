# Daraz.pk E2E Test Suite

This test suite demonstrates end-to-end testing of the Daraz.pk website using Cypress.

## Prerequisites

Before running these tests, make sure you have the following:

- Node.js and NPM installed on your system.
- Cypress installed as a development dependency in your project.
- Credentials for the Daraz.pk website (user and password) set as environment variables. Use `.env.sample` to create `.env`

## Running the Tests

To run the tests, use the following command:

```bash
npm run cypress:open
```

## Running the Tests with Docker

### Prerequisites

Before running the tests, ensure that you have [Docker](https://www.docker.com/) installed on your system.

- Use `.env.sample` to create `.env`

### Build the Docker Image

```bash
docker build -t cypress-tests .
```

### Run Cypress Tests

```bash
docker run -it --rm cypress-tests
```
