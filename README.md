# Portfolio Website

This is a portfolio website built using Next.js (TypeScript), Strapi, Vercel, Fly.io, and Cloudinary.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Live Build](#live-build)
- [Setup](#setup)
- [Media Assets](#media-assets)
- [Usage](#usage)

## Overview

This repository contains the source code for a portfolio website. It combines a Next.js frontend, powered by TypeScript, and a Strapi backend for content management. The frontend is deployed on Vercel, and the backend is hosted on Fly.io. Media assets, are stored on Cloudinary.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Strapi](https://strapi.io/)
- [Vercel](https://vercel.com/)
- [Fly.io](https://fly.io/)
- [Cloudinary](https://cloudinary.com/)

## Live build

Check out the live build of this portfolio website at [URL](https://uteeaami-pf.vercel.app/).


## Setup

1. **Clone the Repository**

     ```shell
     git clone https://github.com/Uteeaami/uteeaami-pf.git
     git clone https://github.com/Uteeaami/pf-strapi
     ```

2. **Install Dependencies**

   - In the "frontend" directory:

     ```shell
     cd frontend
     npm install
     ```

   - In the "backend" directory:

     ```shell
     cd backend
     npm install
     ```

3. **Configure Environment Variables**

   Create `.env` or `.env.local` files in the respective directories and set up environment variables as needed.

4. **Run Locally**

   Start the development server for both the frontend and backend:

   - In the "frontend" directory:

     ```shell
     npm run dev
     ```

   - In the "backend" directory:

     ```shell
     npm run develop
     ```

   Access the website locally at `http://localhost:3000`.

## Media assets

Please note that media files (images, videos, etc.) used in the portfolio content won't be present in the "backend"/CMS when you clone this repository.

## Usage

Customize the frontend and backend code to meet your portfolio requirements. Add or edit content using the Strapi CMS. Deploy the website to your preferred hosting platform.
