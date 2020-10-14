const { throws } = require('assert')
const mongoose = require('mongoose')
const validator = require('validator')

const Tasks = mongoose.model('Task',{
    description: {
        type: String,
        validate:{
            validator:(value)=>{
                console.log(value,typeof value)
            }
        }    
    },    
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports=Tasks