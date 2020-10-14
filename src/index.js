require('./db/mongoose');
const { error } = require('console');
var express= require('express')
var User=require('./models/users')
var Task=require('./models/tasks');
const { errorMonitor } = require('stream');

var app= express()

app.use(express.json())

app.post('/user',(req,res)=>{
    const user= new User(req.body)
    user.save().then(()=>{
        console.log(req.body)
        res.send(req.body)
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})


app.get('/users/:id',(req,res)=>{
    const _id =req.params.id
    User.findById({_id}).then((user)=>{
        res.send(user)
    })
    .catch((e)=>{
        res.send(e)
    })
})

app.get('/tasks/:id',(req,res)=>{
    var _id = req.params.id
    Task.findById({_id}).then((t)=>{
        res.send(t)
    })
    .catch((e)=>{
        res.send(e)
    })
})

app.post('/task',(req,res)=>{
    const task = new Task(req.body)
    task.save().then(()=>{
        console.log(typeof req.body.description)
        res.send(req.body)
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})
// const Users=mongoose.model('users',{
//     name:{
//         type:String,
//         required:true
//     },
//     age:{
//         type:Number
//     },
//     email:{
//         type:String,
//         validate: (value)=>{
//             if(!(validator.isEmail(value))){
//                 throw new Error('Email is incorrect')
//             }
//         }
//     },
//     password:{
//         type:String,
//         minLength:6,
//         validate(value){
//             if(validator.contains(value,'password')){
//                 throw new Error("Password can not contain password.")
//             }
//         }
//     }
// })

// const Details = mongoose.model('users',{
//     name:{
//         type:String,
//         required: true
//     },
//     age:{
//         type: Number,
//         validate(value){
//             if(value<18){
//                 throw new Error('Age must be above or equal to 18')
//             }
//         }
//     }
// })

// const details= new Details({
//     name:'Hari',
//     age: 15
// })

// const user=new User({
//     name:'Aka sh Mishra',
//     age:22,
//     email:'akash@11233.com',
//     password:validator.trim('    lokesh@123   ')
// })

// details.save().then(()=>{
//     console.log(details)
// })
// .catch((error)=>{
//     console.log(error)
// })
app.listen(3000,()=>{
    console.log("I;m running at 3000 Port")
});