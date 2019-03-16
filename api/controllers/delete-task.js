async function addTask(req, res) {



    const { taskId } = req.params
        //*to-do* add error handling intercepts//

    let userId = req.session.userId

    let successfull = await ListItem.destroyOne({
        and: [
            { id: taskId }, { owner: userId }
        ]
    })

    if (!successfull) {
        return res.status(200).json({
            success: false,
            message: 'something happened couldnt delete task !',
        })
    }

    return res.status(200).json({
        success: true,
        message: 'Deleted task successfully !',
        deletedTaskId: taskId
    })
}

module.exports = addTask;