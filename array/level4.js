//Q1 find if hari is in allUsers array or not/
//expected output is : 
//true
const name= 'hari'
const allUsers = ['hari','shyam','thakur']
function compare()
{
 for(i=0; i<allUsers.length; i++)
 {
    if(allUsers[i]==name)
    
    {
        console.log('name is found')
    }

 }
}
compare()

//Q2 find number of duplicates
//expected output is : 2
//true

const array = ['hari','shyam','hari','thakur']
let count = 0
for (let i = 0; i < array.length; i++) {
  for (let j = i +1; j < array.length; j++) {
    if (array[i] === array[j] ) {
      count = count + 2
    }
  }
}
console.log(count)