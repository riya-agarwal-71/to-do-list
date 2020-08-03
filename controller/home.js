module.exports.home = function(req,res){
    return res.render("../views/ejs/home.ejs",{
        title:"LINEUP"
    });
}