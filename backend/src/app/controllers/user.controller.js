import User from "../models/users.js";

/**
 * @index
 * @route GET /api/users
 * @description: Get all users
 */
export const index = async (req, res, next) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

/**
 * @create
 * @route POST /api/users
 * @description: Create a new user
 */
export const create = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

/**
 * @show
 * @route GET /api/users/:id
 * @description: Get a user by ID
 */
export const show = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

/**
 * @update
 * @route PUT /api/users/:id
 * @description: Update a user by ID
 */
export const update = async (req, res, next) => {
    //
};

/**
 * @destroy
 * @route DELETE /api/users/:id
 * @description: Delete a user by ID
 */
export const destroy = async (req, res, next) => {
    //
};
