# books-crud-node-js

A Node.js app for CRUD operations for Books

## API Endpoints
{URL} = `https://books-crud-j9c2.onrender.com` OR `http://localhost:3000` => (If you host locally)

NOTE: As it is hosted on Render Free Tier, it may be brought down due to inactivity and may require a hit to warm it up

1. GET - {URL}/books/{BOOK_ID}
2. GET - {URL}/books/?page={PAGE_NUMBER} (10 Records Per Page)
3. POST - {URL}/books
   1. headers: add 'Content-Type' with value as 'application/json'
   2. body: (RAW JSON)
        ```json
          {
              "title": "YOUR BOOK TITLE",
              "author": "YOUR BOOK AUTHOR",
              "summary": "YOUR BOOK SUMMARY"
          }
        ```
4. PUT - {URL}/books/{BOOK_ID}
   1. headers: add 'Content-Type' with value as 'application/json'
   2. body: (RAW JSON)
        ```json
          {
              "title": "UPDATED/OLD BOOK TITLE",
              "author": "UPDATED/OLD BOOK AUTHOR",
              "summary": "UPDATED/OLD BOOK SUMMARY"
          }
        ```
5. DELETE - {URL}/books/{BOOK_ID}

## How to run the app locally?

1. Clone the repo onto your machine
2. Run `npm install`
3. Rename the `.env.sample` file to `.env`
4. Replace `DB_URL` with your MongoDB connect URL
5. Bring up the Server using `node app.js`
6. You can test the API Endpoints using the [Postman Collection Export](https://github.com/lokesh3097/books-crud-node-js/blob/main/books-crud.postman_collection.json) that I have created
