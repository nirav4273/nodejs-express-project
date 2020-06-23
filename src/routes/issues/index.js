import express from 'express';
import { create, list, upload, getIssueFiles } from '../../controller/issues/index';

const router = express();

router.post("/create", create);

router.post("/:projectCode/list", list);

router.post("/:id/upload", upload);

router.get("/:id/files", getIssueFiles);

module.exports = router;