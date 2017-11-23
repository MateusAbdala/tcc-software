import express from 'express'
import mongoose from 'mongoose'
import tccProject from '../models/tccProject'

export function createProject(req, res){
	if(validateRequest(req, res)){
		var newtccProject = new tccProject({
				name: req.body.name,
				description: req.body.description,
				createdBy: req.body.createdBy
      });

      newtccProject.save((err) => {
        if(err){
           throw err;
        } else {
          res.json({ success: true, message: 'tcc Project created successfully.' });
        }
      });
	}
}

export function viewProject(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.projectId)){
		tccProject.find({_id: req.params.projectId}, (err,Projects) => {
			if(err) throw err;
			res.json(Projects)
		});
	} else {
		return res.json({ success: false, message: 'Viewing failed. The id provided is an invalid ObjectId.' });
	}
}

export function updateProject(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.projectId)){
		tccProject.update({_id: req.params.projectId}, req.body, (err, result) => {
			if(err) throw err
			res.json(result)
		});
	} else {
		return res.json({ success: false, message: 'Updating failed. The id provided is an invalid ObjectId.' });
	}
}

export function deleteProject(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.projectId)){
		tccProject.remove({_id: req.params.projectId}, (err, result) => {
			if(err) throw err
			res.json(result)
		});
	} else {
		return res.json({ success: false, message: 'Deleting failed. The id provided is an invalid ObjectId.' });
	}
}

export function listProjects(req, res){
	tccProject.find((err, Projects) => {
		if(err) throw err
		res.json(Projects)
	});
}

function validateRequest(req, res){

  if(req.body.name == null || req.body.name == ''){
    res.json({ success: false, message: 'Fail. name must be provided.' });
    return false;
  }

  if(req.body.createdBy == null || req.body.createdBy == ''){
    res.json({ success: false, message: 'Fail. User ID must be provided.' });
    return false;
  }

  return true;
}