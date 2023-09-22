# Scalio-challenge
Web - Full-Stack NestJS + ReactJS Code Challenge

# Scalio Code Challenge Solution

## Overview

This repository contains the solution for the Scalio Code Challenge. The project is divided into two main parts:

- **Frontend**: Built with Next.js, React, and Tailwind CSS. It provides a UI for searching and viewing posts.
- **Backend**: Built with NestJS. It serves as the API for fetching posts.

## Features

- Search for posts by ID
- View post details
- Dark/Light theme toggle

## Prerequisites

- Node.js (v14+)
- Yarn or npm

## Local Development Setup

### Backend

1. **Clone the repository**

    ```bash
    git clone https://github.com/datradito/DanielAgustin-Tradito-web.git
    ```

2. **Navigate to the backend directory**

    ```bash
    cd DanielAgustin-Tradito-web/back
    ```

3. **Install dependencies**

    ```bash
    npm install
    ```

4. **Run the development server**

    ```bash
    npm run start:dev
    ```

### Frontend

1. **Navigate to the frontend directory**

    ```bash
    cd ../front
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the development server**

    ```bash
    npm run dev
    ```

## Running Tests

### Backend

- Run all tests

    ```bash
    npm test
    ```

- Run tests with coverage

    ```bash
    npm run test:cov
    ```

### Frontend

- Run all tests

    ```bash
    npm test
    ```

- Run tests with coverage

    ```bash
    npm run test:coverage
    ```

## Environment Variables

For the frontend to work locally, you can set the API URL in a `.env` file:

    API_POSTS=http://localhost:3001/posts
    
For production, you can set it in a `.env.production` file:

    API_POSTS=https://scalio-backend.vercel.app/posts