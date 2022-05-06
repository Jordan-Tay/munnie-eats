# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# KM Notes

To add a post, go to `./src/data.js`. Add an object to the front of `data` with the following structure:
``` Typescript
const data = [
  {
    title: "Eclair",             // Name of food
    homeTag: "French Dessert",   // Tag displayed on the home page
    tags: ["Pastry", "Dessert"], // List of tags
    image: "eclair.jpeg",        // Name of image file, store all 
                                 // image files in ./src/images
    size: "large",               // Size of image on the home page, 
                                 // can be "small", "medium" or "large",
                                 // Optional, default is "small"

    // For the recipe: 

    recipeAvailable: true,       // Set to true if there is a recipe
    prepTime: "15 mins",         // Optional
    totalTime: "1 hour",         // Optional
    portions: "24",              // Optional

    // There are two different ways to represent ingredients, one list:
    ingredients: [
      "Lots of sugar",
      "Some flour",
      "Chocolate"
    ],
    // OR multiple sublists
    ingredients: {
      "For the dough": [
        "Some flour"
      ],
      "For the filling": [
        "Lots of sugar",
        "Chocolate"
      ]
    },

    instructions: [              // List of instructions
      "Mix flour",
      "Magic"
    ],
  },
  ...
]
```

After making changes to `./src/data.js`, run 
```
npm start
```
and go to [http://localhost:3000](http://localhost:3000) to verify that the changes are as intended. Then, run:
```
./km-upload
```
to commit changes. 
