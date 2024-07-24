# Fliki Shop

This is a full-featured e-commerce application built with React, Radix UI, Jotai, Node.js, TypeScript, Express, and MongoDB. The application supports the following features:

- Fetch products with pagination
- Show product details
- Cart management (persisted in local storage)
- Dark and light modes
- Checkout order

## Tech Stack

- **Frontend**: React, Radix UI, Jotai, TypeScript
- **Backend**: Node.js, Express, MongoDB

## Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14 or above)
- Docker

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### 1. Clone the Repository

### 2. Setup Your Database

Pull and run the MongoDB Docker container:

```bash
docker pull mongo
docker run -p 27017:27017 -d mongo
```

### 3. Configure Environment Variables

Replace the `.env.sample` files in both the `backend` and `frontend` directories with your configurations and rename them to `.env`.

#### Backend `.env`

```
MONGODB_URI=mongodb://localhost:27017/ecommerce
PORT=5000
```

#### Frontend `.env`

```
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Run the Backend

Navigate to the `backend` directory, install dependencies, and start the development server:

```bash
cd backend
npm install
npm run seed
npm run dev
```

### 5. Run the Frontend

Open a new terminal, navigate to the `frontend` directory, install dependencies, and start the development server:

```bash
cd frontend
npm install
npm start
```

## Features

### Fetch Products with Pagination

The application supports fetching products from the backend with pagination to optimize performance and user experience.

### Show Product Details

Users can view detailed information about each product by clicking on the product from the product list.

### Cart Management

Users can add products to their cart, which is persisted in local storage. This allows users to retain their cart items even after refreshing the page.

### Dark and Light Modes

The application supports both dark and light modes. Users can toggle between these modes using a switch in the UI.

### Checkout Order

Users can proceed to checkout their order, where they can review their cart items and place an order.
