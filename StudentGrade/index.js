//functions to get grades for students from the marks input
function getGrade(marks){
    

if(marks >= 0 && marks <= 100){//conditions according to the range of marks..each condition should give a grade
    if(marks >79){
     console.log("A");
    }
    else if(marks >=60 && marks <=79){
        console.log("B");
    }
    else if(marks > 49 && marks <=59){
        console.log("C");
    }
    else if (marks >= 40 && marks <=49){
        console.log("D");
    }
    else{
        console.log("E");
    }
}
else {
    console.error('ERROR!!! PLEASE INPUT THE CORRECT MARKS')//outputs an error if the marks are not between 0 and 100
}
}
getGrade(11);//input the grade that will be run through the function
