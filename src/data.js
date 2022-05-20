const columns = [1, 1, 1, 1, 2, 1, 1, 1];
const rows    = [3, 3, 3, 4, 4, 3, 3, 3];

const data = [
  {
    title: "Gyudon",
    homeTag: "Beef bowl",
    tags: ["Japanese", "Beef"],
    image: "gyudon.jpeg",
  },
  {
    title: "Teppan Beef",
    homeTag: "Grill",
    tags: ["Japanese", "Beef"],
    image: "teppan beef.jpeg",
  },
  {
    title: "Chocolate Eclair",
    homeTag: "Donut variant",
    tags: ["Pastry", "Chocolate"],
    image: "eclair.jpeg",
    recipeAvailable: true,
    prepTime: '15 mins',
    totalTime: '1 hour',
    portions: '24',
    ingredients: {
      'For the pastry': [
        '140g plain flour',
        'pinch of sugar',
        '125ml milk',
        '100g butter',
        '4 eggs',
      ],
      'For the custard filling': [
        '300ml milk',
        '50g caster sugar',
        '2 egg yolks',
        '1 tsp vanilla extract',
        '4 tsp plain flour',
        '4 tsp cornflour',
        '375ml double cream',
      ],
      'For the icing': [
        '100g plain chocolate',
        '25g butter',
        '1 tbsp icing sugar',
      ],
    },
    instructions: [
      'Start by making the custard filling. Heat the milk until almost boiling in a saucepan. Meanwhile, mix together the sugar, egg yolks and vanilla in a bowl, then stir in the flours, a couple of tsp at a time, to a smooth paste.',
      'Gradually whisk in the hot milk, pour everything back into the saucepan and cook over a high heat, stirring constantly, for about 5 mins until thick - it will go alarmingly lumpy but don\'t worry, just keep stirring it vigorously with a wooden spoon until smooth',
      'Lay a sheet of cling film directly on the custard surface, then cool and chill until you\'re ready to fill the buns.',
      'To make the choux buns, heat the oven to 220C/200C fan/gas 7. Sift the flour with the sugar and a pinch of salt into a small bowl. Put the milk and butter into a medium saucepan with 125ml water and gently heat so the butter melts but the liquid doesn\'t bubble.',
      'Once the butter has completely melted, increase the heat until the liquid comes to a fast rolling boil. Immediately turn off the heat, tip in the sifted flour and beat vigorously with a wooden spoon until you a have a smooth dough that comes away from the sides of the pan. Spread over a large dinner plate to cool to hand temperature.',
      'Allow to cool for a few minutes, then gradually add the eggs, mixing well between each addition until the mixture reluctantly drops off the spoon. Don\'t add all the egg unless you need to.',
      'Cut two large sheets of baking parchment. On each one draw two sets of \'track\' lines with a 10cm gap - these will be your guidelines so your eclairs will all be roughly the same size. Use the paper to line two large baking sheets - penside down.',
      'Spoon your choux mixture into a piping bag with a 1cm star or round wide nozzle, or into a disposable piping bag with a similar-size hole snipped off for piping. Pipe two rows of well-spaced, squashed \'S\' shapes on each sheet between the guidelines. Bake, one tray at a time, on a high-ish shelf for 25 mins, reducing temperature to 200C/180C fan/gas 6 as soon as they go in the oven.',
      'After 25 mins, poke a hole in the end of each bun, or using a small serrated knife, split down the middle and return to the oven, upside-down, to dry out for 5 mins until crisp and golden. Set aside to cool.',
      'While the buns are cooling, finish your filling. Whisk the cream until thick, then use your electric whisk to beat the cooled, set custard until just smooth again. Fold in the cream. Spoon your filling into a piping bag - use a small nozzle if you\'re filling the buns through the holes you\'ve pierced, or a large nozzle if you’ve split the buns in half. Carefully pipe the custard into each cooled bun - they should feel heavy once full.',
      'To make the icing, melt 100g plain chocolate and 25g butter together in a heatproof bowl over a pan of barely simmering water. Once melted, remove from the heat and stir in 75ml double cream and 1 tbsp sifted icing sugar. Once cooled a little, spread over the tops of the buns and leave to cool.',
    ]
  },
  {
    title: "Niku Udon",
    homeTag: "Worse than ramen",
    homeDescription: "If you're looking to have some delicious noodles with marinated meat in a flavourful broth, go for the ramen instead.",
    tags: ["Japanese", "Udon", "Beef", "Soup"],
    image: "niku udon.webp"
  },
  {
    title: "Tamagoyaki",
    tags: ["Japanese", "Eggs"],
    homeTag: "Japanese Omelette",
    image: "tamagoyaki.jpeg",
    prepTime: "5 mins",
    totalTime: "15 mins",
    portions: "1",
    recipeAvailable: true,
    ingredients: [
      "Eggs",
      "Salt",
      "Soy milk"
    ],
    instructions: [
      'All ingredients in a bowl: Put eggs, soy milk, and salt in a medium bowl.',
      'Make egg mixture: Mix well by cutting chunks of egg white.',
      'Strain through a sieve: Strain the mixture through a sieve 2 to 3 times to make the mixture smooth.',
      'Tamagoyaki pan: Heat a tamagoyaki pan over medium heat, add oil and wipe off excess oil with a paper towel.',
      'First layer: Egg mixture is added in 3 times. Pour ⅓ of the egg mixture in an entire pan. If you see bubbles, poke with a chopstick to break them.',
      'First roll: When the surface is still soft and the bottom is cooked well, roll it 3 to 4 times from the front to the end of the pan and move to the front. It\'s ok if the first roll is a little messy, as you can recover later.',
      'Second layer: Add some oil if necessary, pour half of the egg mixture, lift the tamagoyaki and pour the mixture under the bottom. When the surface is almost cooked, roll it 3 to 4 times from the front and move to the front.',
      'Third layer: Repeat step 7.'
    ]
  },
  {
    title: "Chicken Katsu Curry",
    homeTag: "GOAT",
    homeDescription: "One of my personal favourites, a godly combination beyond your imagination, fried chicken and curry.",
    tags: ["Japanese", "Chicken"],
    image: "katsu curry.jpeg",
    recipeAvailable: true,
    prepTime: "5 mins",
    totalTime: "35 mins",
    portions: "6",
    ingredients: {
      'For the chicken': [
        '650 g chicken breasts (£4.00)',
        '70 g to 140g (6oz) panko breadcrumbs (if double dipping) (£1.25)',
        '2 egg  (£1.39/12)=(£0.24)'
      ],
      'For the sauce': [
        '1 tbsp ginger, peeled & grated (£0.55)',
        '2 onions, diced (£0.65/3)=(£0.22)',
        '1 carrot, thinly sliced (£0.09)',
        '3 cloves of garlic, minced (£0.69/3)=(£0.23)',
        '600 ml chicken stock',
        '1 tbsp honey/brown sugar',
        '1.5 tbsp curry powder',
        '½ tsp turmeric',
        '1 tbsp coconut oil',
        '2 tbsp rapeseed oil',
        '1.5 tbsp soy sauce',
        '2 tbsp flour',
      ],
      'Other ingredients': [
        'Other 300g white/brown rice (£1.50/5X3)=(£0.90)',
        'Spring onions to garnish (£0.50)',
        'Chilli flakes',
      ]
    },
    instructions: [
      'Start by adding the onion & carrots into a deep non-stick frying pan along with the coconut oil. Gently fry on a medium/ low heat for around 5 minutes. Season with salt.',
      'After this time, add the minced garlic, curry powder, ginger, turmeric, honey, soy sauce and flour with a splash of the chicken stock. Gently fry for another minute before gradually adding all of the chicken stock. Reduce to a simmer and set the timer for 20 minutes.',
      'Meanwhile, prepare the chicken by slicing the 3 breasts along the width to create 6 thin chicken pieces. Start the crispy chicken conveyor belt by rolling it in flour, then the beaten egg and finally in the breadcrumbs. If you want the crispiest chicken, dip into the egg and breadcrumbs one more time (may require more breadcrumbs).',
      'Drizzle half of the rapeseed oil onto a large baking try and add the battered chicken. Then drizzle the remaining rapeseed oil over the top to coat. Pop in the oven, timer set to 12 minutes to rotate and cook for a further 12 minutes on the other side.',
      'In the meantime, cook the rice according to packet instructions',
      'After 20 minutes, the katsu sauce should have thickened slightly so it\'s ready to blend. Slice the chicken diagonally for that wagamama look and serve up with a portion of rice, a ladle of the sauce and the optional sliced spring onion & chilli flakes.',
    ]
  },
  {
    title: "Tonkotsu Ramen",
    homeTag: "GOAT",
    tags: ["Japanese", "Ramen", "Pork"],
    image: "tonkotsu.jpeg",
  },
]

const kebabCase = string => string
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, '-')
      .toLowerCase();

let recipeIndex = 0;
let augmentedData = [...new Map(data.map(item => { 
  const id = kebabCase(item.title);
  return [id, {
    ...item, 
    id,
    image: item.image ? require(`./images/${item.image}`) : undefined, 
    recipeIndex: item.recipeAvailable ? recipeIndex++ : -1 
  }]
})).values()];

export const all = augmentedData;
export const recipes = augmentedData.filter(({ recipeAvailable }) => recipeAvailable);
export const tags = [...new Set(all.map(({ tags }) => tags).flat(1))].sort();
export const recipeTags = [...new Set(recipes.map(({ tags }) => tags).flat(1))].sort();
export const sizes = Array.from(Array(Math.max(rows.length, columns.length)), (_, i) => [rows[i] || 3, columns[i]] || 1).slice(0, all.length);
