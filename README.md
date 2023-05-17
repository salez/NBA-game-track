# NBA Basketball Score Tracking Application

This is the documentation for the NBA Basketball score tracking application developed as part of the Angular Level 3 Certification mini-project. The application allows users to track and view the results of NBA games for a list of teams over a specific number of days. The project builds upon the application developed during the Level 2 certification process.

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Contributing](#contributing)
6. [License](#license)

## Description

The NBA Basketball score tracking application is designed to display the results of the last 12 days for a list of NBA teams. The application provides the ability to filter teams based on conference and division, remove teams from the tracking list with a confirmation dialog, and change the number of days to retrieve data from the API.

## Installation

To install and run the application locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.
4. Run `ng serve` to start the development server.
5. Open a web browser and visit `http://localhost:4200` to access the application.

## Usage

The NBA Basketball score tracking application provides a user-friendly interface to interact with the following features:

### Step 1: Implement More Filters for Team Selection Dropdown

- The team selection dropdown now includes additional filters for conference and division.
- All filters are optional.
- Two conferences are available: Western and Eastern.
- Each conference has three divisions: Atlantic, Central, and Southeast for the Eastern Conference, and Northwest, Pacific, and Southwest for the Western Conference.
- If no filter is selected, all 30 teams will be available in the teams dropdown.
- If a conference is selected, only the divisions of that conference and the 15 teams in that conference will be available in the other dropdowns.
- If a division is selected, only the five teams of that division will be visible in the teams dropdown.

### Step 2: Create a Dialog Window Component to Confirm Team Removal

- Each tracked team in the list has an X button to remove the team.
- Clicking the X button will display a modal dialog window asking the user to confirm the removal.
- The dialog window provides two action buttons: Yes and No.
- Clicking Yes will remove the team from the list and close the dialog.
- Clicking No will close the dialog without removing the team.
- The modal dialog component is reusable and can be configured with any HTML content and action buttons.

### Step 3: Add a Dropdown to Change the Number of Days of Data

- The application currently displays data for the last 12 days for each team.
- A new dropdown filter is added to select the number of days from different options.
- Selecting a different number of days will refresh the data for all teams accordingly.

## Features

The NBA Basketball score tracking application includes the following features:

- Team selection dropdown with filters for conference and division.
- Modal dialog window to confirm team removal.
- Dropdown to change the number of days of data to retrieve from the API.
