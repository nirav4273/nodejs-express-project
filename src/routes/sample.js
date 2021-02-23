import express from 'express'

import sampleController from '../controller/sample'

const router = express.Router()

router.get('/sample', sampleController.findAll)
router.get('/sample/:id', sampleController.getById)

router.post('/sample', sampleController.add)
router.put('/sample', sampleController.update)
router.delete('/sample/:id', sampleController.remove)

export default router
