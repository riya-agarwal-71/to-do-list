// importing the database
const db = require('../config/mongoose');
const Task = require('../models/task');

// formating date from yyyy-mm-dd format to dd-mm-yyyy format
function reformatDate(dateStr){
  dArr = dateStr.split("-");
  return dArr[2]+ "-" +dArr[1]+ "-" +dArr[0];
}

// exporting home (/) controller
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

// exporting add items controller
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
    });
}

// exporting delete items controller
module.exports.deleteitem = function(req,res){
    let id = req.query.id;
    Task.findById(id,function(error,ele){
        if(error){
            console.log("error in deleting the task");
            return;
        }
        if(!ele.deleted){
            Task.create({
                description:ele.description,
                date:ele.date,
                category:ele.category,
                deleted:true
            },function(error,newTask){
                if(error){
                    console.log("error in creating a task");
                    return;
                }
                ele.remove();
                return res.redirect('back');
            });
        }else{
            ele.remove();
            return res.redirect('back');
        }
    });
}

module.exports.deletetasks = function(req,res){
    Task.find({deleted:true},function(error,task){
        if(error){
            console.log("error in finding");
            return;
        }
        for(t of task){
            t.remove();
        }
        return res.redirect('back');
    })
}