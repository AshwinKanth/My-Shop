# Title

    My Store

## Objective

    The purpose of this assignment is to create a fully functional e-commerce frontend using React.js, demonstrating proficiency in front-end development principles, responsive design, and state management. The goals are to build a visually appealing and user-friendly shopping experience, implement core e-commerce functionalities, and showcase the ability to integrate with external APIs. Expected learning outcomes include: mastering React.js fundamentals, applying Tailwind CSS for styling, utilizing React hooks for state management, handling API interactions, and understanding deployment processes.

## Development

    git clone <github repository link>  
    npm install
    npm start

## Tech Stack

    React JS, Tailwind CSS, React hooks for state management

## Completion Instructions

### Functionality

#### Must Have

1.  Home Page Design

    - Create an attractive, responsive home page with:
    - Header with logo, navigation, and cart icon
    - Hero section
    - Featured products section
    - Footer

2.  Product Listing Page

    - Fetch products from a public dummy API (e.g., https://fakestoreapi.com/products)
    - Display products in a responsive grid
    - Each product card should show:
    - Image
    - Title
    - Price
    - "Add to Cart" button

3. Mini Cart Component

- When products are added to cart, show a mini cart dropdown when the cart icon is clicked
- Mini cart should display:
    - List of added products (image, title, quantity, price)
    - Subtotal
    - "View Cart" button
    - "Checkout" button (can be disabled)

4. Full Cart Page

- Accessible when clicking "View Cart" from mini cart
- Show all cart items with:
    - Product details (image, title, price)
    - Quantity adjuster (+, - buttons)
    - Remove item option
    - Order summary (subtotal, shipping, total)
    - Proceed to checkout button


#### Nice to Have

- Implement product search functionality
- Add product filtering/sorting
- Persist cart to localStorage
- Add animations/transitions
- Implement dark mode toggle
- Write unit tests for critical components


### Submission Instructions

#### Must Have

- GitHub repository with your code
- README with:
    - Setup instructions
    - Brief explanation of your approach
    - Any assumptions you made
- Live demo (Vercel, Netlify, etc.) if possible


## Resources

### Design files

    Home, Header, Footer, CartPage, MiniCart, ProductCard, ProductList

### APIs

    Products List

### Third-party packages

    Icons (react-icons)
    Tailwind CSS (styling)
