var task = [
    {
        description:"task 1",
        date:"10-10-2020"
    },
    {
        description:"task 2",
        date:"03-08-2020"
    },
    {
        description:"task 3",
        date : "04-08-2020"
    },
]
function reformatDate(dateStr)
{
  dArr = dateStr.split("-");
  return dArr[2]+ "-" +dArr[1]+ "-" +dArr[0];
}
task.sort(function(a,b){
    return new Date(reformatDate(a.date))-new Date(reformatDate(b.date));
})
module.exports.home = function(req,res){
    return res.render("../views/ejs/home.ejs",{
        task:task
    });
}
module.exports.additem = function(req,res){
    task.push({
        description:req.body.todo,
        date:reformatDate(req.body.date)
    })
    return res.redirect('back');
}