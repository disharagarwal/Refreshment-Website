# Refreshment-Website

Project Name is a dynamic website built using React. It offers a variety of engaging features to refresh your mind, including games, news links, and a collection of novels to read. This README file provides an overview of the project and its key components.

## Features

- Games: The website includes two interactive games to entertain users. The first game is a card-flipping game where the objective is to match pairs of cards. The second game involves controlling a ball to hit blocks and earn points.

- News Links: Stay updated with the latest news by accessing the provided news links. These links direct users to reputable news websites where they can explore various topics of interest.

- Novels Collection: Dive into a curated collection of captivating novels available for reading. Immerse yourself in different fictional worlds and let your imagination soar.

## Technologies Used

The project was developed using the following technologies:

- React: The website is built using React, a popular JavaScript library for building user interfaces. React allows for the creation of dynamic and interactive components, providing a smooth and responsive user experience.

- Figma: The initial design of the web pages was created using Figma, a collaborative design tool. Figma facilitated the visual planning and layout of the website, ensuring an appealing and user-friendly interface.

- MongoDB: The user login functionality was implemented using MongoDB, a powerful NoSQL database. MongoDB securely stores user information, enabling authentication and access control within the website.

## How does the ball game work
1. The code initializes the game canvas and sets its size to match the browser window.

2. The `Player` class represents the player's character as a ball. It has properties such as `radius`, `x`, `y`, and `color`. The `draw()` method is responsible for rendering the player's ball on the canvas.

3. The `Projectile` class represents the projectiles (shots) that the player fires. It has properties like `x`, `y`, `radius`, `color`, and `velocity`. The `draw()` method renders the projectile on the canvas, and the `update()` method updates its position based on the velocity.

4. The `Enemy` class represents the enemies as tiles. It has properties similar to the `Projectile` class and also includes the `draw()` and `update()` methods to render and update the enemy's position.

5. The `x` and `y` variables store the initial position of the player's ball in the center of the canvas.

6. The `player` variable holds an instance of the `Player` class, representing the player's ball.

7. Arrays are created to store projectiles (`projectiles`) and enemies (`enemies`).

8. The `init()` function is responsible for resetting the game state when it needs to be restarted. It reinitializes the player, clears the arrays of projectiles and enemies, and resets the score.

9. The `shootEnemies()` function generates enemies at regular intervals. The enemies have random positions, sizes, colors, and velocities. They are pushed into the `enemies` array.

10. The `animate()` function is the main animation loop of the game. It clears the canvas, renders the player's ball, updates and renders the projectiles and enemies, checks for collisions, and handles the end of the game.

11. Event listeners are set up for the `click` event on the window and the "start game" button. When the window is clicked, a new projectile is created and added to the `projectiles` array. Clicking the "start game" button initializes the game, starts the animation loop, and triggers the generation of enemies.

## Flip the card Game explaination.

1. `flipCard`: This function is called when a card is clicked. It flips the card by adding the `flip` class to it. It also checks if it's the first or second card flipped and performs the necessary actions accordingly.

2. `checkForMatch`: This function is called after the second card is flipped. It checks if the two flipped cards have the same content (e.g., matching images or data). If they match, the cards are disabled (click event listeners removed) and added to the `cardsWon` array. It also updates the score displayed on the screen. If all cards are matched, it displays a message indicating that the player has won the game.

3. `disableCards`: This function is called when a pair of matching cards is found. It removes the click event listeners from the matched cards, adds them to the `cardsWon` array, and updates the score. It then calls `resetBoard` to prepare for the next set of flipped cards.

4. `unFlipCards`: This function is called when a pair of cards does not match. It temporarily disables flipping of cards by setting `lockBoard` to `true`. It flips the two cards back over (by removing the `flip` class) after a short delay of 750 milliseconds. After flipping the cards back, it sets `lockBoard` to `false`, allowing the player to flip other cards again.

5. `resetBoard`: This function resets the game board by resetting the `hasFlippedCard` and `lockBoard` variables to `false`, and resetting the `firstCard` and `secondCard` variables to `null`. This prepares the board for the next pair of flipped cards.

6. `shuffle` (IIFE - Immediately Invoked Function Expression): This function shuffles the order of the cards on the screen by assigning a random `order` value to each card. It is immediately invoked when the script runs to shuffle the cards at the start of the game.

7. Event Listeners: The code adds a click event listener to each card element (`cards.forEach(card => card.addEventListener('click', flipCard));`). This allows the player to flip the cards by clicking on them.

These functions work together to create the card-flipping memory game. Players can flip two cards at a time and try to find matching pairs by remembering the positions of the flipped cards. The game keeps track of the score and displays it on the screen. The game continues until all pairs of cards are matched.

