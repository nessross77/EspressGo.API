const handleProfile = (req,res,db) => {
    const {id} = req.params;
    db.select('*').from('users').where(id)
    .then(user => {
       if(user){
           res.json(user[0])
       }
       else{
           res.status(400).json('Not found')
       }
    })
    .catch(err => {console.log(err); res.status(400).json('error getting user')})
   }
   module.exports = {
    handleProfile :handleProfile
   }
   
