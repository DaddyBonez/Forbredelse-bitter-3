module.exports.home = (req,res)=>{
    res.render('home')
}
module.exports.login_get = (req,res)=>{
    res.render('login')
}
module.exports.signup_get = (req,res)=>{
    res.render('signup')
}
module.exports.post_get = (req,res)=>{
    res.render('post')
}