const express = require("express");
const router = express.Router();
const imageRouter = require("./imageRoutes.js");
const userRouter = require('./userRoutes.js');
const authRouter = require('./authRoutes.js');
const commentRouter = require('./commentRoutes.js')
const { authenticate } = require("../middlewares/auth.js");

router.use("/auth", authRouter)
router.use("/images", imageRouter);
// router.use(authenticate)
router.use("/users", userRouter);
router.use('/comments', commentRouter)

module.exports = router;
