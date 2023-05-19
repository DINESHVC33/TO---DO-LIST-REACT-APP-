const Taskmodel = require ("../models/TaskModels");

module.exports.getTasks= async (req , res )=> {
   const tasks = await Taskmodel.find();
   res.send(tasks);
  
};
module.exports.saveTask=  (req , res )=> {

    const {task} = req.body ;
    Taskmodel.create ({task})
    .then((data)=>{
        console.log("saved successfully...");
        res.status (201).send(data);
    }).catch((err)=>{
        console.log(err);
        res.send({error : err, msg : "something went worng"});
    });
 };

module.exports.updateTasks=  (req , res )=> {

    const {id} = req.params
    const {task} = req.body ;
   Taskmodel.findByIdAndUpdate(id,{task})
   .then(() => res.send("Updated successfully"))
    .catch((err)=>{
        console.log(err);
        res.send({error : err, msg : "something went worng"});
    });
 };

 module.exports.deleteTasks=  (req , res )=> {

    const {id} = req.params
    
   Taskmodel.findByIdAndDelete(id)
   .then(() => res.send("Deleted successfully"))
    .catch((err)=>{
        console.log(err);
        res.send({error : err, msg : "something went worng"});
    });
 };