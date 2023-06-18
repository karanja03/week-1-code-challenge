# GRADING SYSTEM
This is a JavaScript function that determines the grade based on the marks provided. It categorizes the marks into different grade ranges, such as A, B, C, D, or E, depending on the score.

# FUNCTION DESCRIPTION
The getGrade(marks) function accepts a single parameter:

# marks: A numerical value representing the marks obtained by a student.
The function performs the following steps:

# Checks if the provided marks are within the valid range of 0 to 100.
If the marks are valid, it evaluates the marks and assigns a grade based on the following conditions:
If the marks are greater than 79, it assigns grade "A".
If the marks are between 60 and 79 (inclusive), it assigns grade "B".
If the marks are between 50 and 59 (inclusive), it assigns grade "C".
If the marks are between 40 and 49 (inclusive), it assigns grade "D".
If the marks are below 40, it assigns grade "E".
If the marks provided are not within the valid range, it logs an error message indicating incorrect marks input.
# USAGE
To use the getGrade function, follow these steps:

1. Call the function getGrade(marks) and pass the marks obtained as an argument.
The function will evaluate the marks and log the corresponding grade or an error message to the console.
For Example;
getGrade(80); // Outputs "A"
getGrade(65); // Outputs "B"
getGrade(55); // Outputs "C"
getGrade(47); // Outputs "D"
getGrade(32); // Outputs "E"
getGrade(110); // Outputs an error message: "ERROR!!! PLEASE INPUT THE CORRECT MARKS"


# LICENSE
This project is licensed under the MIT License. 



