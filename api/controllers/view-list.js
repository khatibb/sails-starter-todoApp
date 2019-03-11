async function viewList(req, res) {



    //*to-do* add error handling intercepts//

    let user = await User.find({ id: req.session.userId })
        .populate('list')
        .limit(1)

    return res.status(200).json({
        success: true,
        list: user[0].list
    })
}

module.exports = viewList;