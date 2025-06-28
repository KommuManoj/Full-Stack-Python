import random

def number_guessing_game():
    """
    Plays a number guessing game where the user tries to guess a random number.
    """
    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 10000.")

    # Generate a random number between 1 and 100
    secret_number = random.randint(1, 10000)
    attempts = 0
    guess = 0

    while guess != secret_number:
        try:
            guess = int(input("Enter your guess: "))
            attempts += 1

            if guess < secret_number:
                print("Too low! Try again.")
            elif guess > secret_number:
                print("Too high! Try again.")
            else:
                print(f"Congratulations! You guessed the number {secret_number} in {attempts} attempts.")
        except ValueError:
            print("Invalid input. Please enter a valid number.")

if __name__ == "__main__":
    number_guessing_game()