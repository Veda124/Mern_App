const user = require('../data/user');
const axios = require('axios')
exports.addUser = async (req, res) => {
    try {

        const { fname, lname, dob } = req.body;
        user.push({
            fname, lname, dob
        })
        res.status(201).json({ message: "Used Data Added" })
    } catch (error) {
        res.status(500).json({ message: "Error", error })
    }
}

exports.getUsers = async (req, res) => {
    try {
        const dogResponse = await axios.get('https://dog.ceo/api/breeds/image/random')
        const dogMessage = dogResponse.data.message
        res.status(200).json(user, dogMessage);
    } catch (error) {
        res.status(500).json({ message: "Error", error })

    }
}