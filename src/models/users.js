var mongoose=require('mongoose');
var validator=require('validator')

const Users=mongoose.model('users',{
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

module.exports=Users