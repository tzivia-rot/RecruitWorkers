import jobModule from "../Moduls/job.module";
import express, { Request, Response } from "express";
const JobController = {
    GetAll: async (req:Request, res:Response)=>{
        let jobs= await jobModule.find();
        res.json(jobs);
    },

    GetById: async (req:Request, res:Response) => {
        const {id} =req.params;
        let users = await jobModule.findById(id);
        res.json(users);
    },

    AddJob:  async (req:Request, res:Response) => {
        console.log(req.body);
        const {id, name,locationCompany,descriptionCompany,descriptionJob,requirements,status,date} = req.body;
        try {
            const newUser = await jobModule
            .create({id,name,locationCompany,descriptionCompany,descriptionJob,requirements,status,date });
            await newUser.save();
            res.json(newUser);
        }
        catch (e:any) {
            res.status(400).json({ message: e.message });
        }
    },

    DeleteJob: async (req:Request, res:Response) => {
        const { id } = req.params;
        try {
            const deleted = await jobModule.findByIdAndDelete(id);
            res.json(deleted);
        } catch (error:any) {
            res.status(400).json(error);
        }
    },

    UpdateJob: async (req:Request, res:Response) => {
        console.log("put")
        try {
            const { id } = req.params;
            const { user } = req.body;
            jobModule.updateOne(id.toString, user);
        }
        catch (e:any) {
            res.status(404).json({ message: e.message });
        }
    }
}

export default JobController;