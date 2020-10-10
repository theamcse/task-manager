const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient;

const connectionUrl='mongodb://localhost:27017'
const databaseName='task-manager'

MongoClient.connect(connectionUrl,{useNewUrlParser:true, useUnifiedTopology: true},(error,client)=>{
    if(error){
        console.log('Database connectivity error')
    }
    else{
        const db=client.db(databaseName)
        // const insertMany=db.collection('users').insertOne({
        //     name:'Akash',
        //     age:'21'
        // })
        // .then((result)=>{
        //     console.log(result.ops)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })

        // const findOneAndDelete=db.collection('users').findOneAndDelete({
        //     name:'Abhishek'
        // })
        // .then((result)=>{
        //     console.log("Success")
        // })
        // .catch((error)=>{
        //     console.log("Failed")
        // })

        // var find=db.collection('users').find({
        //     age:'21'
        // }).toArray((error,result)=>{
        //     console.log(result)
        // })

        var update=db.collection('users').updateOne({
            _id:new mongodb.ObjectID('5f684624df692745b41ef310')
        },
        { $set: {
                name:'Ayush Kamal'
            }
        })
        .then((result)=>{
            console.log(result)
        })
        .catch((error)=>{
            console.log("Error")
        })
    }
})