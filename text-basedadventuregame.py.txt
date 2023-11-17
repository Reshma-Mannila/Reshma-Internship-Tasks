import time

def introduction():
    print("Welcome to the Text-based Adventure Game!")
    time.sleep(1)
    print("You find yourself in a mysterious land with choices to make.")
    time.sleep(1)

def make_choice(choices):
    print("Choose your next move:")
    for index, choice in enumerate(choices, 1):
        print(f"{index}. {choice}")

    while True:
        try:
            choice = int(input("Enter the number of your choice: "))
            if 1 <= choice <= len(choices):
                return choice
            else:
                print("Invalid choice. Please try again.")
        except ValueError:
            print("Invalid input. Please enter a number.")

def chapter_one():
    print("Chapter 1: The Beginning")
    time.sleep(1)
    print("You wake up in a dense forest. There are two paths ahead.")
    choice = make_choice(["Take the left path", "Take the right path"])

    if choice == 1:
        print("You chose the left path. Something awaits you...")
        time.sleep(2)
        # Continue the story based on the player's choice
    else:
        print("You chose the right path. What mysteries lie ahead?")
        time.sleep(2)
        # Continue the story based on the player's choice

# You can continue to add more chapters, choices, and story elements

if __name__ == "__main__":
    introduction()
    chapter_one()