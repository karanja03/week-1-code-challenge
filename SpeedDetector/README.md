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