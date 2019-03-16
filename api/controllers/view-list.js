async function viewList(req, res) {



    //*to-do* add error handling intercepts//

    let user = await User.find({ id: req.session.userId })
        .populate('list')
        .limit(1)

    if (user != null) {
        return res.status(200).json({
            success: true,
            list: user[0].list
        })
    }
    return res.status(400).json({
        success: false,
        message: 'Couldnt fetch list '
    })

}

module.exports = viewList;