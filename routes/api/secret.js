const express=require('express');
const router=express.Router();
const auth=require('../../server/services/auth');

const secretData=[
    {
        title:"SecretData 1",
        desc:"Plans hot build spaceship"
    },
    {
        title:"SecretData 2",
        desc:"Secret Passwords"
    }
]

router.get('/secret',auth.checkJWT,(req,res)=>{
    res.json(secretData);
})

router.get('/onlysiteowner',auth.checkJWT,auth.checkRole('siteOwner'),(req,res)=>{
    res.json(secretData);
})


module.exports=router;