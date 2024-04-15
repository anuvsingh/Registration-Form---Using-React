# Creating Student Registration Form

## Illustration 

This is a simple student registration form built using React.js. It allows users to input their name, email, phone number, enrollment number, and select their gender.

### `npm start`

Runs the app in the development mode.
It is run in the available browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

## Description

This React application implements a student registration form with the following features:

- Fields for name, email, phone number, and roll number.
- Validation for each field:
  - **Name:** Maximum 50 characters, no special characters allowed, and cannot be blank.
  - **Email:** Maximum 50 characters, validated using a regular expression for email format, and cannot be blank.
  - **Phone number:** Exactly 10 digits, only numerical characters allowed, and cannot be blank.
  - **Roll number:** Must be unique (not implemented), and cannot be blank.
- Error messages are displayed for invalid inputs.
- Upon successful submission, the entered data is displayed below the form.
- Basic CSS styling for layout and form elements.

## Automation Used

- React
- JavaScript (ES6+)
- HTML
- CSS

To learn React, check out the [React documentation](https://reactjs.org/).

## Author

This project was created by Anubhav Singh.

## Folder Structure

- src: Contains the source code files.
- App.js: Main component containing the student registration form logic.
- App.css: Stylesheet for the application.
- index.js: Entry point for rendering the application.
- public: Contains public assets and HTML file.

## Features
- Input validation for name, email, phone number, and enrollment number.
- Gender selection through radio buttons.
- Display of submitted data in a table format.
- Error messages for invalid inputs.
