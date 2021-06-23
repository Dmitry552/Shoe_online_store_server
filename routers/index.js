const Router = require('express');
const router = new Router;

const userRouter = require('./userRouter');
const basketRouter = require('./basketRouter');
const preferencesRouter = require('./preferencesRouter');
const comparisonRouter = require('./comparisonRouter');
const productRouter = require('./productRouter');
const commentRouter = require('./commentRouter');
const banRouter = require('./banRouter');
const catalogRouter = require('./catalogRouter');
const brandRouter = require('./brandRouter');
const searchRouter = require('./searchRouter');

router.use('/user', userRouter);
router.use('/basket', basketRouter);
router.use('/preferences', preferencesRouter);
router.use('/comparison', comparisonRouter);
router.use('/product', productRouter);
router.use('/comment', commentRouter);
router.use('/ban', banRouter);
router.use('/catalog', catalogRouter);
router.use('/brand', brandRouter);
router.use('/search', searchRouter);


module.exports = router;