import { v4 as uuidv4 } from 'uuid';
let users = []

export const getUser = (req,res)=>{
    console.log(users);
    res.send(users);
    // res.send('Hello from users');   
}

export const createUser = (req, res) => {    
    //  console.log('POST ROUTE REACHED');
     const user = req.body;
     const userId = uuidv4();
     const userWithId = {...user,id:userId}
     users.push(userWithId)
     res.send(`User with the name ${user.firstName} added to the database!`);
}

export const getUsersId = (req,res)=>{
    const {id} = req.params
    const userWithId = users.find((user)=>user.id ===id)
    res.send(userWithId)   
}

export const deleteUser = (req,res)=>{
    const {id} = req.params
    users = users.filter((user)=>user.id != id) //filter function returns a new array with the elements that satisfy the condition
    res.send(`User with the id:${id} deleted from the database!`)
}

export const updateUser = (req,res)=>{
    //we the get the id, so that we can find the user with that id and update it
    const {id} = req.params
    const{firstName,LastName,age} = req.body
    const user = users.find((user)=>user.id === id)

    if(firstName) user.firstName = firstName
    if(LastName) user.LastName = LastName
    if(age) user.age = age

    res.send(`User with the id:${id} has been updeted!`)
}