# Zoo Feeding Management System

## Project Overview

The Zoo Feeding Management System is designed to help zookeepers plan and manage feeding schedules for animals. The application allows zookeepers to:
- Plan when to feed which animal.
- Select the type of food (fruit) for each animal.
- View upcoming feedings grouped by day.
- Calculate the required food for each animal for the next month.

The application also includes features to track animal details, including their name, weight, height, and age.

## Features

- **Animal Feeding Scheduler:** Plan feedings by selecting an animal, a fruit, and a date.
- **Upcoming Feedings Overview:** Displays upcoming feedings grouped by date.
- **Detailed Animal View:** View all details about an animal, including name, age, weight, and height.
- **Food Requirement Calculation:** Calculate the required food for animals based on their height, weight, age, gender, and favorite fruit.
  
# Installation Instructions

## Running the Project on StackBlitz

To run the project on StackBlitz, follow these steps:

1. **Open the Project in StackBlitz:**

    - Go to [StackBlitz](https://stackblitz.com/) and create a new project (or clone the project if available).

2. **Install Dependencies:**

    - Dependencies should automatically install when you open the project in StackBlitz. If you run into issues, open the terminal in StackBlitz and run:

    ```bash
    pnpm install
    ```

3. **Start the Development Server:**

    - Once the dependencies are installed, StackBlitz will automatically start the development server, and you can view the application in the preview panel.

4. **Open in a New Tab:**

    - You can also open the application in a separate tab using the **Open in New Tab** feature in StackBlitz for a more immersive experience.

## Running Tests

To run tests in StackBlitz, use the terminal:

```bash
pnpm run test
```
## Github

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/syedddanishalinaqvi/sidestream-assignment.git
    cd sidestream-assignment
    ```

2. **Install dependencies using pnpm:**

    ```bash
    pnpm install
    ```

3. **Start the development server:**

    ```bash
    pnpm run dev
    ```

4. Open your browser and go to `http://localhost:3000` to see the application running.

## Running Tests

To run tests for the project, execute the following command:

```bash
pnpm run test