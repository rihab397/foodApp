let secret = process.env.secret;
const jwt = require("jsonwebtoken");
require("dotenv").config()
let { User } = require("../models/User");
let bcrypt = require('bcrypt');
const async = require("hbs/lib/async");

var returnHash=async (str)=>{
    var str=""
    bcrypt.genSalt(10,(er,salt)=>{
        bcrypt.hash(str,salt,async (er,hash)=>{
            str=hash
    })
})
return str;
}

const Signin = async (req, res) => {
    function isEmail(mail) {
        return (mail.search("@") && mail.charAt(0) != "@")
    }
    try {
        if (!Object.keys(req.body).length) return res.send({
            message: "ERROR: Body not found"
        })
        if (isEmail(req.body.Email)) {
            let isUserPersent = await User.find({ Email: req.body.Email });
            if (isUserPersent.length) {
                return res.send({
                    message: "ERROR: Email aleardy present"
                })
            }
            else {
                bcrypt.genSalt(10,(er,salt)=>{
                    bcrypt.hash(req.body.Password,salt,async (er,hash)=>{
                        await User.insertMany({ ...req.body,Password:hash});
                    })
                })               
                return res.send({
                    message: "SUCCESS: Account Created"
                })
            }
        }
    }
    catch (er) {
        return res.status(401).json({
            message: "ERROR: User Not Found",
            er: er.toString()
        });
    }
}

const Login =async (req, res) => {
    let date=new Date();
    let { Email, Password } = req.body;
    try {
        //find user by email
       let user=await User.find({ Email: Email })
            let success = bcrypt.compareSync(Password, user[0].Password);
            if (success && user) {
         
                let token = jwt.sign({...req.body}, secret, {
                    expiresIn: "1d",
                    notBefore: "120",
                    algorithm: "HS384",
                })
                await  User.updateOne({ Email: Email }, { Lastlogin:  `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}:${date.getTime()}` })
                let user2=await User.find({ Email: Email },{Password:0})
                res.status(200).json({
                    message: "Success: Login Successfully",
                    token, user2
                });
            }
            //password not match
            else {
                return res.status(401).json({
                    message: "ERROR: Email and Password Not Found",
                });
            }
     
            // user's email not found   })
           
    }
    catch (er) {
        res.status(401).json({
            message: "ERROR: Sorry We Can't Login Something Is Wrong",
            error: er.toString(),
        });
    }
}

const ValidateToken = (req, res, next) => {
    try {
        let tokenValue = req.headers["auth-token"];
        if (tokenValue) {
            jwt.verify(tokenValue, secret, (error, data) => {
                if (error) {
                    return res.status(401).json({ message: "ERROR: Invalid Auth Token." });
                } else {
                    req.tokenData = data;
                    next();
                }
            });
        } else
         {
            return res.status(401).json({ message: "ERROR: 'auth-token' missing from request header." });
        }
    } catch (ex) {
        return res.status(401).json({
            message: "ERROR: Cannot Validate auth-token",
            error: ex.toString(),
        });
    }
};

module.exports = {
    ValidateToken,
    Login,
    Signin
}