# Image Sharing App

## Technologies Used

- [Express JS](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Next JS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cloudinary](https://cloudinary.com/)

## Clone the repository

```bash
git clone https://github.com/erwinmareto/image-sharing.git
```

## How To Use

To run this app you need to run both the backend and the frontend folder at the same time (use 2 terminals)

## Backend

### Add a ```.env``` file
For more info on ```DATABASE_URL``` check [the prisma documentation](https://www.prisma.io/docs/orm/reference/connection-urls)
```javascript
DATABASE_URL=  // connection string to the database for prisma
PORT=            // the port to run the app
JWT_SECRET=      // secret key for jwt

// Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_URL=
```
or refer to ```.env.example```

### Change to backend directory

```bash
cd backend
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### To run on docker

```bash
npm run start:docker
```

## Frontend

### Change to frontend directory

```bash
cd frontend
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build the app for production

```bash
npm run build
```

### Run the built app in production mode

```bash
npm start
```
