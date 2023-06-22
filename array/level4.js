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
