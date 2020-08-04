const db = require('../config/mongoose');
const Task = require('../models/task');

function reformatDate(dateStr){
  dArr = dateStr.split("-");
  return dArr[2]+ "-" +dArr[1]+ "-" +dArr[0];
}
module.exports.home = function(req,res){
    Task.find({},function(error,tasks){
        if(error){
            console.log("Error in fetching tasks from db");
            return;
        }
        return res.render("../views/ejs/home.ejs",{
            task: tasks
        })
    })
}
module.exports.additem = function(req,res){
    Task.create({
        description:req.body.todo,
        date:reformatDate(req.body.date),
        category:req.body.category
    },function(error,newTask){
        if(error){
            console.log("error in creating a task");
            return;
        }
        return res.redirect('back');
    })
}
module.exports.deleteitem = function(req,res){
    let id = req.query.id;
    Task.findByIdAndDelete(id,function(error){
        if(error){
            console.log("error in deleting the task");
            return;
        }
        return res.redirect('back');
    });
}