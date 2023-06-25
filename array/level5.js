//calculate the sum of the array using either for of or for in
const arr=[2,3,6,7]
let sum1 = 0
for(let i of arr){
 sum1 = sum1 + i
}
console.log(i)

//remove from array if duplicate
const users = ['hari','shyam','hari']
let temArr=[]
users.map((item,id)=> {
  if(!temArr.includes(item)){
    temArr.push(item)
  }
})
temArr
//calculate the sum of all the odd numbers inside this nested array
const newArr = [[4,5], [5,7], [7,2]]
let sum = 0
newArr.flat().map((item)=>{
  if(item%2!=0){
    sum = sum + item
  }
 })
 console.log(sum)

// return only array of ids: expected output  [3,5,6]
const myDetails = [
      {id:3, name: 'hari'},
      {id:5, name: 'shyam'},
      {id:6, name: 'gopal'},
    ]
   myDetails.map((item)=>{
    return item.id
   })
   console.log(item)

