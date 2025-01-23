const userModel = require('../models/userModel');


module.exports.registerUser = async (req, res, next) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        if (!firstname || !lastname || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const user = await userService.createUser({ firstname, lastname, email, password });
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error('Error in registerUser:', error.message);
        res.status(500).json({ error: error.message });
    }
};

//     return user;
// }