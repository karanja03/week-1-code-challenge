



function ratesalary(salary,period){ //input the value of the gross salary
   const monthly=1;
   const annually = 12;
    if(period === monthly){
       return salary*1
    }
    else{
      
        return salary*12;
    }
    
}

let gsalary=ratesalary(500000,1);
console.log(`Gross Salary: ${gsalary}`);//gets Gross Salary



function taxablePay(mortgage, gsalary){ //the function for calculating a taxable income
   
    let taxableIncome =(gsalary - (mortgage))
    return taxableIncome
   }

let taxableIncome=taxablePay(10000,gsalary)//inputing mortgage
 console.log(`Taxable Income: ${taxableIncome}`); //gets taxableIncome


function totalTax(){//Function to calculate the total tax payable
    if(taxableIncome <= 24000){//Condition checking where teh taxaple pay lies to get tax
        allTax=taxableIncome * 0.1
        return allTax
    }
    else if(taxableIncome >24000 && taxableIncome <= 32333){
        allTax=taxableIncome * 0.25;
        return allTax
    }
    else{
      taxableIncome >32333;
        allTax=taxableIncome * 0.3
        return allTax;
   }
}
console.log(`Total Tax: ${totalTax()}`);// gets total tax

function sumRelief(insuranceRelief){//getting the total relief 
   
   const personalRelief=2400;//constant personal relief
   let totalRelief = personalRelief+insuranceRelief
   return totalRelief;
}
totalRelief=sumRelief(8000);//enter insuarance relief since personal relief is constant
console.log (`Total Relief : ${totalRelief}`);// gets total Relief

function nhifDeductions(deductions, gsalary){//getting nhif deductions
   
      if(gsalary <= 5999){//conditions for checking how much nhif deductions to be done according to the condition
          deductions = 150;
         return deductions;
      }
      else if( gsalary >= 6000 && gsalary <= 7999){
          deductions = 300;
         return deductions;

      }
      else if( gsalary >= 8000 && gsalary <= 11999){
          deductions = 400;
         return deductions;

      }
      else if( gsalary >= 12000 && gsalary <= 14999){
          deductions = 500;
         return deductions;
   }  
       else if( gsalary >= 15000 && gsalary <= 19999){
         deductions = 600;
         return deductions
    } 
      else if( gsalary >= 20000 && gsalary <= 24999){
           deductions = 750;
          return deductions

   }
      else if( gsalary >= 25000 && gsalary <= 29999){
          deductions = 850;
          return deductions
      
    }  
       else if( gsalary >= 30000 && gsalary <= 34999){
         deductions = 900;
         return deductions;

      }   
      else if( gsalary >= 35000 && gsalary <= 39999){
          deductions = 950;
         return deductions;

   }
      else if( gsalary >= 40000 && gsalary <= 44999){
          deductions = 1000;
            return deductions;
     
   }
      else if( gsalary >= 45000 && gsalary <= 49999){
          deductions = 1100;
          return deductions;
        
   }
       else if( gsalary >= 50000 && gsalary <= 59999){
          deductions = 1200;
          return deductions;


   }   else if( gsalary >= 60000 && gsalary <= 69999){
           deductions = 1300;
           return deductions;
      
   }   else if( gsalary >= 70000 && gsalary <= 79999){
          deductions = 1400;
          return deductions;
   }
      else if( gsalary >= 80000 && gsalary <= 89999){
           deductions = 1500;
          return deductions;
   }   
      else if( gsalary >= 90000 && gsalary <= 99999){
           deductions = 1600;
           return deductions;

   }
      else{
         return deductions = 1700;
   }
 }
 
let finalDeduction=nhifDeductions(0,gsalary)
console.log(`NHIF Deductions ${finalDeduction}`)//gets nhif deductions
 
function nssfDeductions(newRates,gsalary){//getting nssf Deductions
   
   if(gsalary <= 6000){//conditions to know the type of NSSF Deductions to be done
      let tier1 = gsalary *0.06;
      let tier2 = 0
      return tier1,tier2
      
   }
   else if(gsalary >= 6000 && gsalary<= 18000) {
      let tier1 = 6000 * 0.06;
      let tier2 = (gsalary-6000) * 0.06;
      return tier1,tier2
      
   }
   else {
   let tier1 = 6000 * 0.06;
   let tier2 = (18000 -6000) * 0.06;
   return tier1,tier2
   }
}

newRates =nssfDeductions(gsalary)

console.log(`NSSF NRates: ${newRates}`)//getting the newrates nssf deductions

function nhifDeductions2(oldRates, gsalary,){
 let getOldRates=gsalary * 0.05
 if(getOldRates <= 400){
 return getOldRates
 }
 else 
 getOldRates = 400;
return getOldRates;
}
oldRates=nhifDeductions2(gsalary);
console.log(`NSSF ORates: ${oldRates}`)// getting the old NSSF Rates

function disabilityExemption(ability,totalRelief ){//function to know whether the employee is disabled or not
   
   if(ability === "disabled"){
      return totalRelief =totalRelief +20000;// if disabled,the person recieves an extra relief of 20000
   
   }
   else{

      return totalRelief;
   }

}
let ability="abled";
totalRelief =disabilityExemption(ability, totalRelief);
console.log(`NatureofPerson: ${ability}`)
console.log(`TotalReliefOfNature:${totalRelief}`)


function finalTax(totalRelief,allTax){//getting the total tax after subtracting all relief
   ultimateTax=allTax- totalRelief;
   return ultimateTax;
}
totalTax();
finalTax(totalRelief,allTax);
console.log(`Final Tax:${ultimateTax}`)// final tax

function totalUltimateDeductions(finalDeduction, oldRates, ultimateTax, contributions) {//functions for adding up all deductions
   let allDeductions = finalDeduction + oldRates + ultimateTax + contributions;
   return allDeductions;
}

const allDeductions = totalUltimateDeductions(finalDeduction, oldRates, ultimateTax, 30000);
console.log(`Total Deductions: ${allDeductions}`);//outputing all deductions

 function netfinalSalary(allDeductions,gsalary){//getting the final net salary after subtracting all deductions
 let netSalary = gsalary - allDeductions;
 return netSalary;
 }
 let netSalary=netfinalSalary(allDeductions, gsalary);
 console.log(`Final NetSalary: ${netSalary}`)//getting the net salary


//  values to be input:
//    1)Contributions;
//    2)Gross Salary:
//    3)Nature of Person:
//    4)Insurance amount;
//    5)Mortgage;