var mongoose=require('mongoose');
var validator=require('validator')
const { stringify } = require('querystring');
mongoose.connect('mongodb://localhost:27017/task-manager',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Details=mongoose.model('users',{
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        validate: (value)=>{
            if(!(validator.isEmail(value))){
                throw new Error('Email is incorrect')
            }
        }
    },
    password:{
        type:String,
        minLength:6,
        validate(value){
            if(validator.contains(value,'password')){
                throw new Error("Password can not contain password.")
            }
        }
    }
})

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

const details=new Details({
    name:'Lokesh Ipsum',
    age:24,
    email:'lokesh@123.com',
    password:validator.trim('    lokesh@123   ')
})

details.save().then(()=>{
    console.log(details)
})
.catch((error)=>{
    console.log(error)
})