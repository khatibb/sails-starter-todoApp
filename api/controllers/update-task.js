async function addTask(req, res) {



    const { taskId } = req.params
        //*to-do* add error handling intercepts//

    let userId = req.session.userId

    let task = await ListItem.findOne({
        and: [
            { id: taskId }, { owner: userId }
        ]
    })

    if (!task) {
        return res.status(400).json({
            success: false,
            message: 'Something happened ,couldnt fetch task !',
        })
    }


    let updatedTask = await ListItem.updateOne({
            and: [
                { id: taskId }, { owner: userId }
            ]
        })
        .set({
            isChecked: !task.isChecked
        })
    if (!updatedTask) {
        return res.status(400).json({
            success: false,
            message: 'something happened,couldnt update task !',
        })
    }

    return res.status(200).json({
        success: true,
        message: 'updated task successfully !',
        updatedTaskId: taskId
    })



}

module.exports = addTask;