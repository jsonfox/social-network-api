const router = require('express').Router();
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser, addToFriends, removeFromFriends } = require('../../controllers/user-controller');

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:userId')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser);

router.route('/:userId/friends/:friendId')
    .post(addToFriends)
    .delete(removeFromFriends);

module.exports = router;