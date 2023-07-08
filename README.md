# Refreshment-Website
It is a project where I have built a website where one can play games read news and novels

#How does the Game-I that is ball game work
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

