# WEEK1 CODE CHALLENGE
                     #  SALARY CALCULATING SYSTEM
This is a JavaScript-based salary calculation system that allows you to calculate various aspects of salary, including gross salary, taxable income, total tax, deductions, and net salary.


# Features
1.Calculate gross salary based on the salary amount and payment period.
2.Determine taxable income by subtracting specific expenses, such as mortgage, from the gross salary.
3.Calculate total tax based on the taxable income using progressive tax rates.
4.Calculate various deductions, including NHIF and NSSF deductions.
5.Apply disability exemption to the total relief based on the nature of the person.
6.Calculate the final tax amount after considering the total relief.
7.Calculate the total deductions, including NHIF deductions, NSSF deductions, final tax, and other contributions.
8.Determine the net salary by subtracting the total deductions from the gross salary.
# Usage
To use this salary calculation system, follow these steps:

* Clone the repository to your local machine.
* Open the JavaScript file containing the salary calculation functions in your preferred code editor.
* Provide the necessary inputs to the functions, such as salary, payment period, mortgage, insurance relief, and other parameters.
*Run the JavaScript file to execute the functions.
*Check the console or output to view the calculated values, including gross salary, taxable income, total tax, deductions, and net salary.
# Note: You can customize the input values and adjust the parameters according to your specific salary calculation requirements.

# Functions
The salary calculation system includes the following functions:

# ratesalary(salary, period): 
Calculates the gross salary based on the salary amount and payment period.
# taxablePay(mortgage, gsalary): 
Calculates the taxable income by subtracting specific expenses, such as mortgage, from the gross salary.
# totalTax(taxableIncome): 
Calculates the total tax based on the taxable income using progressive tax rates.
# sumRelief(insuranceRelief): 
Calculates the total relief by adding the personal relief and insurance relief amounts.
# nhifDeductions(deductions, gsalary):
 Calculates the NHIF deductions based on the gross salary.
# nssfDeductions(gsalary): 
Calculates the NSSF deductions based on the gross salary.
 # nhifDeductions2(gsalary):
 Calculates the old NHIF rates based on the gross salary.
# disabilityExemption(ability, totalRelief): 
Applies a disability exemption to the total relief based on the nature of the person.
# finalTax(totalRelief, allTax): 
Calculates the final tax amount after considering the total relief.
# totalUltimateDeductions(finalDeduction, oldRates, ultimateTax, contributions): 
Calculates the total deductions, including NHIF deductions, NSSF deductions, final tax, and other contributions.
# netfinalSalary(allDeductions, gsalary): 
Calculates the net salary by subtracting the total deductions from the gross salary.

# LICENSE
This project is licensed under the MIT License. 



                               # SPEED DETECTOR
This is a JavaScript function that determines the number of demerit points for a given speed. It helps in identifying if a driver's license should be suspended due to excessive speeding.

# Function Description
The speedDetector(speed) function accepts a single parameter:

# speed:
# An integer representing the speed of the vehicle.
The function performs the following steps:

1. Calculates the excess speed by subtracting the threshold speed (70) from the provided speed.
2. Calculates the number of demerit points by dividing the excess speed by 5 (since each 5 km/h over the speed limit corresponds to one demerit point).
3. Evaluates the speed and determines the output message based on the following conditions:
If the speed is less than 70 km/h, it prints "Ok" to indicate that the speed is within the acceptable range.
If the speed exceeds the limit and the number of demerit points is greater than 12, it prints "License Suspended" to indicate that the driver's license should be suspended.
If the speed exceeds the limit but the number of demerit points is within the acceptable range (12 or less), it prints the number of demerit points.
# Usage
To use the speedDetector function, follow these steps:

Call the function speedDetector(speed) and pass the speed of the vehicle as an argument.
Capture the returned value in a variable.
Use the variable to handle the output message based on the result.
Here's an example of how to use the function:


let result = speedDetector(120);

if (result === 'Ok') {
  console.log('The speed is within the acceptable range.');
} else if (result === 'License Suspended') {
  console.log('The driver\'s license should be suspended due to excessive speeding.');
} else {
  console.log('The driver has accumulated ' + result + ' demerit point(s).');
}



# License
This project is licensed under the MIT License. 


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









