# PD-University Backend

PD-University is a backend system for managing university-related operations, built using **Node.js**, **Express**, **TypeScript**, and **MongoDB**.

## Features

- User authentication with JWT (Login, Signup, Role-based Access)
- Student, Faculty, and Admin Management
- Course and Enrollment Management
- Secure API routes with validation
- Cloudinary integration for file uploads
- Nodemailer for email services

## Tech Stack

- **Backend:** Node.js, Express, TypeScript
- **Database:** MongoDB & Mongoose
- **Authentication:** JWT, Bcrypt
- **Validation:** Joi, Zod
- **File Upload:** Multer, Cloudinary
- **Email Services:** Nodemailer

## Entity-Relationship (ER) Diagram

![UPDATED ER DIAGRAM](./diagram.png)

### 2. Run the Project

#### Development Mode

```bash
npm run start:dev
```

#### Production Mode

```bash
npm run build
npm run start:prod
```

## Linting & Formatting

Run ESLint and Prettier:

```bash
npm run lint
npm run lint:fix
npm run prettier
npm run prettier:fix
```
