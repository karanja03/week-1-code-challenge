
 //This a system will get points of a driver according to speed
function speedDetector(speed){ //the initializing the function that will calculate the demerit points
    
    let excessSpeed = Math.abs(speed -70);

 let points = Math.abs(excessSpeed/5);

    if(speed < 70){ //condition
      console.log('Ok') //expected output if condition is met
    }
    else{
       if(points >12){
        console.log('License Suspended')// outputs License Suspended if points are greater than 12
       }
       else{
        console.log(points);
       }
    }
}
 console.log (speedDetector(120));
