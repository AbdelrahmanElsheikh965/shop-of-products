# Simple E-Commerce App

This is a simple e-commerce app that let's you (without any auth needed) create and delete some products 
whether it's a (dvd - book - furniture) and that's it :)
Live : https://api.minimartstore.great-site.net/

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Software:** [e.g., Node.js 18.x, PHP 7.x, MySQL 5.7]

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/AbdelrahmanElsheikh965/shop-of-products.git
   cd your-repository
   ```

2. **Install Dependencies**

   After cd into /Frontend: For [Node.js](https://nodejs.org/):

   ```bash
   npm install
   ```

   After cd into /Backend: For [PHP](https://www.php.net/):

   ```bash
   composer install
   ```

   You can use any client For [MySQL](https://dev.mysql.com/downloads/installer/):

   Download and follow the steps

3. **Configuration**

   - Create a `config.env` file based on `.env.example` and update it with your local settings in the /Backend dir.

## Usage

To use this project, follow these instructions:

1. **Start the Application**

   For running the Frontend 

   ```bash
   npm start
   ```

   For running the Backend 

   ```bash
   php -S 127.0.0.1:8000
   ```

2. **Access the Application**

   Open your browser and go to `http://localhost:3000` (or your configured URL).
