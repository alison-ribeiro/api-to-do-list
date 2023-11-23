import { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const createTask = async(req: Request, res: Response) => {
    const {task} = req.body;
    
    const newTask = await Todo.create({task, done:false});
    if(newTask){
        return res.status(201).json({
            message: 'Task created successfully',
            data: newTask
        });
    }
    return res.json({message: 'Error creating task'});

}
export const listTask = async(req: Request, res: Response) => {
    
    const task = await Todo.findAll();
    res.json({ task });
}
export const getTask = async(req: Request, res: Response) => {
    const {id} = req.params;
    const task = await Todo.findOne({where: {id}});
    if(task) {
       return res.json({ task });
    }

    return res.json({message: 'Error get task'});
}


export const updateTask = async(req: Request, res: Response) => {
    const {id} = req.params;
    const { task, done } = req.body;
    
    let updateData:{[key: string ]:string | boolean} = {};
    
    if(task !== undefined && task !== ''){
        updateData['task'] = task;
    }
    if(done !== undefined && done !== ''){
        if(done === 'true' || done === '1'){
            updateData['done'] = true;
        } else if(done === 'false' || done === '0'){
            updateData['done'] = false;
        }
    }
    
    const updated = await Todo.update(updateData, { where: { id } });
    if(updated[0] > 0)
        return res.json({
            message: 'Task updated successfully',
            data: updated
        });
    
    res.json({message: 'Error updating task'}); 
}

export const deleteTask = async(req: Request, res: Response) => {
    const {id} = req.params;
    const task = await Todo.destroy({ where: { id } });
    if(task > 0)
        res.json({ task });   
    
    res.json({message: 'Error deleting task'});
}