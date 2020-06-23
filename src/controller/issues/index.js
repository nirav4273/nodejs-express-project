import { response, debug } from '../../utils/index';
import {
    issues as Issue,
    project as Project,
    issue_activity as IssueActivity,
    issue_files as IssueFile
} from '../../models';
import { uploadFile, getFilePath } from '../../utils/utils/upload';

export const create = async(req, res) =>{ 
    try {
        const { userId } = req.meta;
        const { projectCode } = req.body;
         
        const project = await Project.findOne({
            where: {
                code:  projectCode
            },
            attributes: ['id'],
            raw: true
        });

        if(project) {
            const insert = await Issue.create({
                ...req.body,
                userId,
                projectId: project.id
            });
    
            response(res, true, 200, "ISSUE_CREATED", insert);
        } else {
            response(res, false, 400, "PROJECT_NOT_FOUND" );
        }
    } catch (e) {
        debug.error(e);
        response(res, false, 404, e.message );
    }
}

export const upload = async(req, res) => {
    try {
        uploadFile(req, res, async (err, result) => {
            if(err) {
                console.log(err);
                console.log("ERROR WHILE UPLOAD FILE");
                response(res, false, 400, "FILE_UPLOAD_FAILED", err);
            } else {
                const files = req.files;
                const { userId } = req.meta;
                const { id } = req.params;
                const project = await Issue.findOne({
                    where: {
                        id
                    },
                    raw: true,
                    attributes: ['id', 'projectCode', 'projectId']
                });
                
                const arrayObj = [];
                for(let i in files) {
                    const obj = {
                        issueId: id,
                        projectId: project.projectId,
                        projectCode: project.projectCode,
                        name: getFilePath(files[i].filename),
                        userId
                    }
                    arrayObj.push(obj);
                };
                
                await IssueFile.bulkCreate(arrayObj);
                
                response(res, true, 200, "FILE_UPLOAD_SUCCESS");
            }
        })
    } catch (e) {
        debug.error(e);
        response(res, false, 404, e.message);
    }
}

export const list = async(req, res) => {
    try {
        const { page = 1, limit = 10 } = req.body;
        const { projectCode } = req.params;
        console.log(req.params);    

        const count = await Issue.count({
            where: {
                projectCode
            }
        });
        const list = await Issue.findAll({
            where:{
                projectCode,
                isDeleted: 0
            },
            order: [['id','desc']],
            limit,
            offset: ((page-1)*limit),
            attributes: ['id', 'title', 'description', 'issueType', 'taskType', 'devices','createdAt', 'updatedAt']
        });
        response(res, true, 200, "ISSUE_LISTING", list);

    } catch (e) {
        debug.error(e);
        response(res, false, 404, e.message);
    }
}

export const deleteIssue = async(req, res) => {
    try {
        const { id } = req.params;
        await Issue.update({
            isDeleted: 1
        }, {
            where: {
                id
            }
        });

        response(req, true, 200, "ISSUE_DELETED");
    } catch (e) {
        debug.error(e);
        response(res, false, 404, e.message);
    }
}

export const updateStatus = async(req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        await Issue.update({
            status
        }, {
            where: {
                id
            }
        });

        response(res, true, 200, "ISSUE_STATUS_UPDATE");

    } catch(e) {
        debug.error(e);
        response(res, false, 404, e.message);
    }
}

export const getIssueFiles = async(req, res) => {
    try {
        const { id } = req.params;

        const list = await IssueFile.findAll({
            where: {
                issueId: id,
                isDeleted: 0
            },
            attributes: ['id', 'name']
        });
        response(res, true, 200, "FILES_FETCHED_FOR_ISSUES", list);
    } catch(e) {
        debug.error(e);
        response(res, false, 404, e.message);
    }
}