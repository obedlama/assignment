const obj = {
    computer: 42,
    maths: 42,
    science: 50
}

let totalMarks= 0;
let percentage = 0;



function calculatePercentage()
{
  totalMarks = obj.computer+ obj.maths + obj.science;
  percentage = totalMarks/150 * 100;
  console.log(percentage);
  
}

calculatePercentage();

//calculate the percentage he scored in the exams out of total 150 score