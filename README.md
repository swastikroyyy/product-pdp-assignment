# Product Detail Page

A responsive Product Detail Page built using React, TypeScript, Vite and SCSS Modules.

## Setup


Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

## Tech Stack

* React 19
* TypeScript
* Vite
* SCSS Modules
* React Router DOM
* Context API
* LocalStorage

## Features

* Product data fetched from Fake Store API
* Product image gallery with thumbnail selection
* Image zoom on hover (desktop)
* Responsive layout for desktop and mobile
* Colour and size selection
* Low stock and sold out states
* Quantity picker with stock limit
* Add to Cart functionality
* Cart persistence using localStorage
* Variant selection synced with URL query params
* Product details section with tabs
* Mock async Add to Cart API with loading and failure states

## Folder Structure

```txt
src
├── components
├── context
├── data
├── hooks
├── pages
├── services
├── styles
├── types
```

## Notes

The Fake Store API does not provide product variants such as colours, sizes, or stock information. For the purpose of this assignment, variant data was mocked locally and integrated into the product page.

## Future Improvements

* Add proper cart page
* Add unit tests
* Replace mocked variants with backend data
* Improve accessibility support
* Add image optimization and lazy loading

```
```
