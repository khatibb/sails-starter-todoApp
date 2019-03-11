 async function addTask(req, res) {



     const { task } = req.body
         //*to-do* add error handling intercepts//

     //Create the new task
     var newTask = await ListItem.create({ text: task }).fetch();

     // Add the task to the user list on OWNER column (linking a one to many relation on ID)
     await User.addToCollection(req.session.userId, 'list')
         .members(newTask.id);


     return res.status(200).json({
         success: true,
         message: 'added task successfully',
         newTask: newTask
     })
 }

 module.exports = addTask;