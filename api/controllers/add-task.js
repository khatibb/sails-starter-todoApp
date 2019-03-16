 async function addTask(req, res) {



     const { task } = req.body
         //*to-do* add error handling intercepts//

     //Create the new task
     let newTask = await ListItem.create({ text: task }).fetch();

     if (newTask === null) {
         return res.status(400).json({
             success: false,
             message: 'something happend ! cant create task',
         })
     }

     // Add the task to the user list on OWNER column (linking a one to many relation on ID)
     await User.addToCollection(req.session.userId, 'list')
         .members(newTask.id)
         .then((_) => {
             return res.status(200).json({
                 success: true,
                 message: 'added task successfully',
                 newTask: newTask
             })
         })
         .catch((err) => {

             return res.status(400).json({
                 success: false,
                 message: 'something happened ! could not add task',
                 //TO-DO: Log Error
             })

         })
 }
 module.exports = addTask;