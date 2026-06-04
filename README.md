# Product Detail Page

A responsive Product Detail Page built using React, TypeScript, Vite and SCSS Modules.

## Live Demo

https://product-pdp-assignment.vercel.app

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Tech Stack

* React
* TypeScript
* Vite
* SCSS Modules
* React Router DOM
* Context API
* LocalStorage

## Features

* Product data fetched from Fake Store API
* Product image gallery with thumbnail selection
* Desktop image zoom
* Mobile responsive layout
* Color and size selection
* Low stock and sold out states
* Quantity picker with stock validation
* Cart persistence using localStorage
* URL synced variant selection
* Product details tabs
* Mock async Add to Cart flow

## Lighthouse

Lighthouse report screenshot is available in the `docs` folder.

## Notes

The Fake Store API does not provide variant, stock, or pricing data. To support the assignment requirements, a local variant layer was added and integrated with the product information.

## Future Improvements

* Dedicated cart page
* Better notification system instead of browser alerts
* Backend-driven variant management
* Additional image optimisation
* Accessibility enhancements
