// Snake Game
// An implementation of the classic Snake Game
// sardar <sabuduke@ucsc.edu>

// 1. Initialize the game
    // Set default game configuration
        // Define game dimensions
        // Set initial game speed
    // Generate an initial snake at the center of the board
        // Define initial snake length
        // Define starting direction
    // Generate the first piece of food randomly on the board
        // Ensure food doesn't spawn inside the snake

// 2. Game loop
    // While the game is not over
        // Display the game board, snake, and food
            // Clear previous frame
            // Draw current state of the snake
            // Draw food
        // Accept user input for snake direction (up, down, left, right)
            // Listen for arrow key presses
        // Move the snake in the current direction
            // Update snake's head and body positions
        // Check collisions
            // If snake hits itself, game over
            // If snake hits the border, game over 
        // Check for food consumption
            // If snake's head overlaps with food:
                // Increase its length
                // Increase the score
                // Generate new food
        // Update game speed as snake's length increases
            // Gradually increase speed based on score or length
        // Delay next iteration based on game speed

// 3. Game over
    // Display game over message 
    // Show player's score (based on snake length or food consumed)
    // Ask if the player wants to play again or quit
        // If play again, restart game
        // If quit, close or go back to the main menu

