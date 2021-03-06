const handleSignin = (req,res,db,bcrypt) => {
    
    const { email, password } = req.body;
    db.select('email','hash').from('login').where('email', '=', email)
    .then(data =>
        {
            const isValid = bcrypt.compareSync( password , data[0].hash);
            if(isValid)
            {
                return db.select('*').from('users').where('email', '=', email)
                .then(user =>
                    {
                        return res.json(user[0])
                    })
                    .catch(err => {console.log(err); res.status(400).json('unable to get user')})
            }else{
                res.status(400).json('wrong credentials')
            }
        })
        .catch( err => {console.log(err); res.status(400).json('wrong credentials')}) 
}

module.exports={
    handleSignin:handleSignin
};