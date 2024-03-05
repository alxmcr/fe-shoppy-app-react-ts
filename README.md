
# Shoppy App

This app learns your buying habits and helps you remember what you’re likely to need to buy on your next trip to the store.

## Features

- Create shopping lists
- Join one existing shopping list
- App navigation bar
- Add new products to our shopping list
- Display a view with all products in the list
- Filter products by product name
- Delete a product from the shopping list

  
## Lessons Learned

I learned and practice more about CSS, React.js, and React Hooks.

## Run Locally

Clone the project

```bash
  git clone https://github.com/alxmcr/fe-shoppy-app
```

Go to the project directory

```bash
  cd fe-shoppy-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev

  # http://localhost:7007 
  # VITE_APP_PORT: 7007  --- vite.config.ts
```
  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- `VITE_APP_PORT`
- `VITE_FBBASE_API_KEY`
- `VITE_FBBASE_AUTH_DOMAIN`
- `VITE_FBBASE_PROJECT_ID`
- `VITE_FBBASE_STORAGE_BUCKET`
- `VITE_FBBASE_MESSAGING_SENDER_ID`
- `VITE_FBBASE_APP_ID`

You should put as value the `VITE_FBBASE_SOMETHING` that you got from [Firebase console](https://console.firebase.google.com/).

  
## Tech Stack

HTML, CSS, Typescript, React.js, React Testing Library, Jest

## Testing

### Running Tests

To run tests, run the following command

```bash
npm run test
```

<img width="1091" alt="image" src="https://github.com/alxmcr/fe-shoppy-app/assets/8689897/496b8565-c91f-4b4d-9d6c-3e346d76c9ab">


- Cypress tests

```bash
cypress:open
```

<img width="1512" alt="image" src="https://github.com/alxmcr/fe-shoppy-app/assets/8689897/27599d32-11c5-4289-a9a5-77abefd631e5">


## Screenshots

- Home page

![This the home page view](https://res.cloudinary.com/images-alex-projects/image/upload/v1709656838/Portfolio/assets-shoppy-app/home-page_qymap3.png "Home page screenshot").

- Add product page

![This the add product page view](https://res.cloudinary.com/images-alex-projects/image/upload/v1709656837/Portfolio/assets-shoppy-app/add-product-page_sbb2oy.png "add product page screenshot").

- List products

![This the list products page view](https://res.cloudinary.com/images-alex-projects/image/upload/v1709656838/Portfolio/assets-shoppy-app/product-list-page_yosllx.png "list products page screenshot").

- Filter list products

![This the filter product modal](https://res.cloudinary.com/images-alex-projects/image/upload/v1709656837/Portfolio/assets-shoppy-app/filter-products_cxmpde.png "filter products modal screenshot").

![This the filtered list products page view](https://res.cloudinary.com/images-alex-projects/image/upload/v1709656837/Portfolio/assets-shoppy-app/filter-product-results_vnhae0.png "filtered list products page screenshot").
  
## Demo

[https://my-shoppy-app.netlify.app/](https://my-shoppy-app.netlify.app/)

## Authors

- [Alejandro M. Coca Rojas (@alxmcr)](https://www.github.com/alxmcr)

## Feedback

If you have any feedback, please reach out to us at amcocarojas@gmail.com.

  
