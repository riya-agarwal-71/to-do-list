module.exports.home = function(req,res){
    return res.render("../views/home.ejs",{
        title:"LINEUP"
    });
}