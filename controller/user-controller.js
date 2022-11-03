const User = require("../model/User");

const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        return next(err);
    }
    if (!users) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

    return res.status(200).json({ users });
};

const addUser = async (req, res, next) => {
    const { name, quantity, book_genre, created_at, updated_at } = req.body;
    if (!name &&
        !quantity && quantity.length > 0 &&
        !book_genre &&
        !created_at &&
        !updated_at) {
        return res.status(422).json({ message: "Invalid Data" });
    }

    let user;
    try {
        user = new User({
            name,
            quantity,
            book_genre,
            created_at,
            updated_at,
        });
        user = await user.save();
    } catch (err) {
        return next(err);
    }
    if (!user) {
        return res.status(500).json({ message: "Unable to save user" });
    }
    return res.status(201).json({ user });
};

const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, quantity, book_genre, created_at, updated_at } = req.body;
    if (!name &&
        !quantity && quantity.length > 0 &&
        !book_genre &&
        !created_at &&
        !updated_at) {
        return res.status(422).json({ message: "Invalid Data" });
    }

    let user;

    try {
        user = await User.findByIdAndUpdate(id, { name, quantity, book_genre, created_at, updated_at });
    } catch (err) {
        return next(err);
    }
    if (!user) {
        return res.status(500).json({ message: "Unable to save user" });
    }
    return res.status(200).json({ message: "Updated Successfully" });
};

const deleteUser = async() => {
    const id = req.params.id;
    let user;

    try {
      user = await User.findByIdAndRemove(id);  
    } catch (err) {
      return next(err);    
    }
    if(!user){
        return res.status(500).json({ message: " unable to delete" });
    }
    return res.status(200).json({message:"Sucessfully Deleted"});
};

exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;