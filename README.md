# Objective

Create a website from the design of [**Frontend Mentor**](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)

## Frontend Mentor

### Website

Website providing details about space destinations, crew members, and technologies.

### Challenges

- **Main Challenge**: Your challenge is to build out this multi-page space tourism website and get it looking as close to the design as possible.
- **Additional Challenges**:
    - View the optimal layout for each of the website's pages depending on their device's screen size
    - See hover states for all interactive elements on the page
    - View each page and be able to toggle between the tabs to see new information

### Provided by Frontend Mentor

- Figma Design of website for Desktop, Mobile, and Tablet
- `data.json` file to populate website
- `assets` folder with images for website
- `*.html` files of what the layout of the website.

## Technologies

### Run
`yarn start`

or

`npm start`

### Languages
- JavaScript
- HTML
- CSS

### Library/Frameworks
- React
- React-Bootstrap

## Features
- Toggles information display
- Navigation between pages

## Challenges
- dynamically adding images from json file into img tags src.
    - Example: `"./assets/destination/image-moon.png"`
    - created a separate array just for the images
    - slice the images path name to only include the image file name
        - ['/image-moon.png', ... ]
    - `src={require(PATH + IMAGE Name)}` PATH = the path to the image