const express = require("express");
const router = express.Router();
const UserModel = require("../models/User")

//create user
router.post("/user",async(req,res)=>{
    console.log('new request');
    const {username,phone,email} = req.body;
    if(!username || !email || !phone){
        res.status(422).json("Please send complete user data!");
        console.log('not valid input')
    }    
    try{

        const existingUser = await UserModel.findOne({userName:username});

        if (existingUser){
            res.status(422).json("User already exist! please use another username");
            //if user existedd
        }else{
            const user = new UserModel({
                "userName":username,
                "phone":phone,
                "email":email,
            });
            await user.save();
            res.status(200).json(user);
            console.log('New User added: name ${username}');
        }

       

    }catch(err){
        res.status(422).json({err});
        console.log(`Error : ${err}`)
    }
});


//update user

router.patch("/user/:id",async(req,res)=>{
    id = req.params.id;
    console.log(id);
    UserModel.findByIdAndUpdate(id, 
        {
           $set : {
                userName: req.body.username,
                email: req.body.email,
                phone: req.body.phone
            }
        },
        (err, user) => {
             res.json("User updated successfully");
           }
        );

});
 
//get users
router.get("/",async(req,res)=>{
     UserModel.find({},(err,users)=>{
        res.send(users);
    })
  
});

router.delete("/user/:id",async(req,res)=>{
    
    let id = req.params.id;
     
    UserModel.findByIdAndRemove(id,(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send('user deleted');
        }
    })
})
 

module.exports = router;