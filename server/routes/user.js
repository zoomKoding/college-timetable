const { Router } = require('express');
const router = Router();
const userController = require('../controllers/user');

router.get('/', userController.getUser);
router.post('/feedback', userController.createFeedback);
router.get('/bookmark', userController.getBookmarks);
router.post('/bookmark/:lectureId', userController.bookmarkLecture);
router.delete('/bookmark/:lectureId', userController.unbookmarkLecture);
router.post('/spike/:lectureId', userController.addSpikeLecture);
router.delete('/spike/:lectureId', userController.deleteSpikeLecture);

module.exports = router;
