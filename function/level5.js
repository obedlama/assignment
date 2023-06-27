const arr = [2,5,6,7]
//calculate the sum of the array using either for of or for in
let sum = 0;
for(let i of arr)
  {
    sum = sum + i;
    
  }
console.log(sum);

//high level
const users =['hari', 'shyam', 'hari']
//remove from array if duplicate
const tempUsers=[];
users.map((item,key)=>{
  if(!tempUsers.includes(item))
    {
      tempUsers.push(item);
    }
})
tempUsers;


const newArr = [[4,5], [5,7], [7,2]]
//calculate the sum of all the odd numbers inside this nested array
let sum1 = 0;
newArr.flat().map((item)=>{
  console.log(item);
   if(!item%2==0)
    {
      sum1 = sum + item;
    }
  
}
)
console.log(sum1);

//newQuestion
const myDetails = [
  {id:3, name: 'hari'},
  {id:5, name: 'shyam'},
  {id:6, name: 'gopal'},
]

// return only array of ids: expected output  [3,5,6]
myDetails.map((item)=>{
return item.id;
}
)

const userDetails= [
  {score: 0, name:'hari', marks: [10,3,23]},
  {score: 0, name:'shyam', marks: [50,23,23]},
  {score: 0, name:'shyam',marks: [20,13,43]},
]
//loop over the arr of objects and calculate total score, expected output is:

userDetails.map((item)=>{
  item.score = item.marks[0]+item.marks[1]+item.marks[2];
  console.log(item);
}
)
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},