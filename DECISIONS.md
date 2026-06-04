# Architectural Decisions

One decision I spent some time thinking about was how to manage global state.

For this assignment, I chose Context API instead of Redux Toolkit. The only shared state in the application is the cart, so Context API felt like the simplest and most appropriate solution. Redux Toolkit would make sense if the application had more complex requirements such as authentication, wishlist management, checkout flows, or multiple interconnected pages. For the current scope, I wanted to avoid introducing additional boilerplate and dependencies.

Another decision was choosing Tabs instead of an Accordion for the product details section. I considered both approaches before implementing it. I went with tabs because they provide quicker navigation between Description, Specifications, and Reviews, especially on desktop screens where users often compare information without wanting to scroll through long sections. Tabs also felt closer to the user experience commonly seen on ecommerce product pages.

The Fake Store API was used as the primary data source for product information. However, it does not provide product variants, stock information, or sale pricing. To support the requirements, I created a small local variant layer and connected it to the product data. This allowed me to implement variant selection, stock validation, quantity limits, low-stock messaging, and sold-out states while still using the API for the core product information.

For a few UI elements and icons, I used existing icon resources instead of creating custom assets. My focus was on implementing the required functionality, responsive layout, and state management rather than spending time designing custom icon sets.

If I had more time, I would refine a few areas further. I would replace browser alerts with a better notification experience, improve accessibility and keyboard navigation, move the mocked variant data to a backend service, and spend more time on image optimisation and Lighthouse performance improvements. I would also improve the cart experience by adding a dedicated cart page and more complete user flows.
