import candidateModule from "../Moduls/candidate.module";
import express, { Request, Response } from "express";
import {Condidate} from '../Moduls/candidate.module'
const CondidateController = {

    GetAll: async (req:Request, res:Response)=>{
        let jobs= await candidateModule.find();
        res.json(jobs);
    },

    GetById: async (req:Request, res:Response) => {
        const {id} =req.params;
        let users = await candidateModule.findById(id);
        res.json(users);
    },

    AddCondidate:  async (req:Request, res:Response) => {
        const { name,rating,phoneNumber,tests,experience,email,field,jobId} = req.body;
        try {
            const newUser = await candidateModule
            .create(new Condidate(name,rating,email,phoneNumber,tests,experience,field,jobId));
            await newUser.save();
            res.json(newUser);
        }
        catch (e:any) {
            res.status(400).json({ message: e.message });
        }
    },

    DeleteCondidate: async (req:Request, res:Response) => {
        const { id } = req.params;
        try {
            const deleted = await candidateModule.findByIdAndDelete(id);
            res.json(deleted);
        } catch (error:any) {
            res.status(400).json(error);
        }
    },

    UpdateCondidate: async (req:Request, res:Response) => {
        try {
            const { id } = req.params;
            const { user } = req.body;
            candidateModule.updateOne(id.toString, user);
        }
        catch (e:any) {
            res.status(404).json({ message: e.message });
        }
    },
    GetByJobId : async (req:Request, res:Response) => {
        const {id} =req.params;
        let users = await candidateModule.find({jobId:id});
        res.json(users);
    },
}

export default CondidateController;