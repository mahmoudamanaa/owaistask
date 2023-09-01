# Owias Blog Website

This project is a blog website built using Next.js 13, TypeScript, and React. It consists of three main pages: the homepage, individual post page, and add post page. The website utilizes various libraries and technologies to enhance its functionality and user experience.

## Technologies Used

- Next.js 13: A framework for building server-rendered React applications.
- TypeScript: A statically-typed superset of JavaScript that provides improved tooling and type safety.
- React: A JavaScript library for building user interfaces.

## Pages

### Homepage

The homepage of the Owias blog website displays featured posts. These posts are fetched using the built-in fetch API provided by Next.js 13. By fetching data on the server using server-side rendering, the website improves its SEO and provides faster initial page load times.

### Individual Post Page

When a user clicks on a post from the homepage, they are redirected to the individual post page. This page fetches the post data, user data, and post photo for the selected post. To handle data fetching and caching, the React Query library is used. Additionally, the page incorporates the Chakra UI library to display a loading state using the Skeleton component while the data is being fetched.

### Add Post Page

The add post page, accessible via the "/create-post" route, allows users to submit new blog posts. It features a form with fields for the post title, author, and body. Upon submission, the data is posted using Axios, which integrates with React Query for efficient data management. Chakra UI is utilized to display a toast component when the post is successfully added.

## Libraries Used

1. Chakra UI: A UI component library that simplifies styling and provides pre-built components. It is used in the add post page to display the toast component and the Skeleton component for loading state display.
2. React Query: A library for managing and caching asynchronous data in React applications. It is used to fetch data on the individual post page and handle data posting on the add post page.
3. Axios: A popular HTTP client library used for making API requests. It is integrated with React Query to handle data posting in the add post page.
4. Formik: A form library that simplifies form management and validation. It is utilized to manage the form state and submission in the add post page.
5. Tailwind CSS: A utility-first CSS framework that provides a set of pre-defined classes to style the application. It offers a faster and easier way to apply CSS properties.
6. Yup: A JavaScript schema validation library that allows for client-side form validation. It is used to validate form inputs in the add post page.

## Design Decisions

1. Homepage: Featured posts are fetched using the built-in fetch API in Next.js 13, enabling server-side rendering. This approach improves SEO and provides faster initial page loading for better user experience.
2. Individual Post Page: Dynamic routing is used with the "/posts/[id]" route to display individual posts. React Query is utilized to fetch data on the client side, ensuring efficient data management and reducing server load.
3. Add Post Page: The add post page is accessible via the "/create-post" route. Users can submit new posts using the form. The API integration with Axios and React Query ensures smooth data submission and management.
4. API: The project utilizes the JSONPlaceholder API (https://jsonplaceholder.typicode.com/) to fetch posts, users, albums, photos, and comments. The available routes include /posts, /users, /albums, /photos, and /comments.

## Project Setup

To set up and run the Owias blog website, follow these steps:

1. Clone the project repository from GitHub.
2. Install the required dependencies by running `npm install` or `yarn install`.
3. Start the development server with `npm run dev` or `yarn dev`.
4. Access the website locally in your browser at `http://localhost:3000`.
