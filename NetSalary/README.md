# SALARY CALCULATING SYSTEM
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