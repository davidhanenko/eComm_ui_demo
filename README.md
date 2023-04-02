# About
Demo version of an eCommerce application.

### Built with

- [Next.js](https://nextjs.org/docs)
- [Strapi v4](https://strapi.io/v4)
- [NextAuth](https://next-auth.js.org)
- [Apollo & GraphQL](https://www.apollographql.com/docs/react)
- [React Hook Form](https://react-hook-form.com/)
- [Styled Components](https://styled-components.com/)

# Getting Started

To get a local copy up and running follow these steps.

## Prerequisites

- npm
- node
- git

## Installation

1. Clone the repo

     ```git clone https://github.com/davidhanenko/ui_demo.git```

2. Install NPM packages

     ```npm install```


3. Create configuration file .env with following variables
    
     `NEXT_PUBLIC_API_URL=http://localhost:1337` - Stpapi CMS URI. Should be changed to the actual URI after deployment
  
     `NEXT_PUBLIC_API_EMAIL_TO=` your email to be used for testing or in production
  
     `NEXT_PUBLIC_API_MAP_API=` google.maps API key
  
     `NEXTAUTH_URL=http://localhost:7777` - change to your app URI in production
  
     `NEXTAUTH_SECRET=` [see more here](https://next-auth.js.org/configuration/options)
  
     `GOOGLE_CLIENT_ID=` [see more here](https://next-auth.js.org/providers/google)
  
     `GOOGLE_CLIENT_SECRET=` [see more here](https://next-auth.js.org/providers/google)
  
  
      
## Usage

``` npm run dev ```

Go to http://localhost:7777 for the Next.js frontend application.

The app uses Strapi CMS as a backend, there you will be abble to create content needed for the application. It's located in [separate repository](https://github.com/davidhanenko/cms_demo). 
After starting backend will be available at http://localhost:1337/admin.


## Tests

 `npm run test`
  
## Contact

David Hanenko: d.hanenko24@gmail.com

Project Link: [https://ui-demo-liart.vercel.app](https://ui-demo-liart.vercel.app)
