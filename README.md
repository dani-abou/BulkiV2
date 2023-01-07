# Bulki

Bulki is a B2B marketplace platform, built as a NextJs application. I decided to use NextJs for two reasons: I wanted to learn about an up-and-coming technology, and because I want this website to be sustainable and up-to-date in the long-term. Firebase is used for storage, authentication, and databases. Since I am building this alone, with a minimal backend, Firebase was an easy option due to its simple frontend integrations, and vast array of functionality.

This is certainly a work in progress, that I am still working on today.

## Frontend technologies

I am building this whole project with React. However, I do not have time to reinvent the wheel, and or that reason I have been utilizing Material UI for some pretty and reusable components. Additionally, I am using styled-components, to easily include dynamic styling into my components.

## Running

From the root of the project simply run:

```
//install all dependencies
npm i
//start local server
npm run dev
```

## Hosting and Branching

This project is hosted directly from main. Whatever is on main is exactly what you will see on [Bulki](www.bulki.us).
I am using Vercel to host because it is built to work with NextJs, and it's cheap (unless we get a lot traffic).
Before pushing to main, always make sure you run the following `npm run build`.

I've also set it up such that staging is built as a preparation branch before anything pushes to live. As expected, one can build individual features on an independent branch, then PR their branch into staging. Staging can then be tested any changes prior to making the changes live.
You can see the current state of staging [here](http://bulki.us.test-google-a.com/)

## Storage

Currently, our Firebase storage is only being used to store listing images. In the future we may find it useful to add user profile pictures, and other useful files. As for the listing images, they are organized in such a manner: `listings/[LISTING_ID]/[IMAGE_NAME]`

## Data structures

### users

This is simple, it holds data about all the users, including the ids of all the listings they've posted, and orders they've made. These are all indexed by the user's id.

### listings

Anytime a user creates a listing, this database holds it. Notably, each listing has its own unique id, name, descrition, sellerId, and an ordered array of image urls (referencing those images in the storage).

### orders

TBD (I have not fully built out the ordering flow yet, which will determine how this should look)

## File structure

### pages

NextJs is designed such that every file in `./pages` is directly assosciated with a page you'd see in the url. The exception to those are files that start with an underscore, and those are some overriding of NextJs rendering structure. Additionally `api` is an exception. I simply use this directory for my page structuring, but for the contents of the page, please refer to `src/page_components`

### api

The `api` directory is the only folder in `./pages` that does not actually contain a user's page. This folder is used to imitate a backend. In large part, I intend on hiding all configs and secrets such that they are viewed used from this directory, and the frontend simply pings here. The file paths within api mark their api url. These should only be called from the `src/api` directory. The names of these files should be all lower case, to easily differentiate from the frontend calling files.

### gallery

The gallery is a mock frontend I use to write and test out new components. Additionally, it serves as a good reference of use cases for many of my custom components.
As of 01/07/2023 the gallery is not functional, but I have fixing it noted as a lower priority. TODO

### src/api

The frontend functions for calling the api backend functions. These files should all be in camel case, and have a parallel path to that of the backend api files. Per example: `./api/database/makeorder` should only ever be called by the frontend through `./src/api/database/makeOrder`.

### src/common

This folder is intended to hold basic frontend resources. This includes styles, the MUI theme, translations, context, and useful data.

### src/components

The `components` holds all of my customized components. These should be generic smaller components, and not whole entire pages. These should be built with a simple jsx file, an index file to manage the exports, and then a styling file.

### src/page_components

These `page_components` are the makup of each of the pages defined in `./pages`. I compartmentalized all the page building here inot source, rather than holding them all within the root.

## Large scale TODOs

In no order:

- Make the order flow
  -This will include more backend functionality and data management
- Maintining order status
- Maintaining listing inventory
- Integrate Stripe as our payment gateway
- Make 'What we do' page
- Finish account info pages
