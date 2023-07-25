import mongoose, { Schema } from "mongoose"
import { v4 as uuidv4 } from 'uuid';

export class Job {
    id:string
    name: string;
    locationCompany?:string;
    descriptionCompany?:string;
    descriptionJob?:string;
    requirements:[string];
    status:boolean;
    date:Date;
    constructor(name:string,date:Date,requirements:[string],status:boolean,descriptionCompany?:string,descriptionJob?:string
        ,locationCompany?:string) {
        this.id=uuidv4();
        this.name=name;
        this.date=date;
        this.descriptionCompany=descriptionCompany,
        this.descriptionJob=descriptionJob,
        this.locationCompany=locationCompany,
        this.requirements=requirements,
        this.status=status
    }
}

const jobSchema = new mongoose.Schema<Job>({
    id:
    {
        type: String,
        required: true
    },
    name:
    {
        type: String,
        required: true
    },
    locationCompany:
    {
        type: String,
        required:false
    },
    descriptionCompany:
    {
        type:String,
        required:false
    },
    descriptionJob:
    {
        type:String,
        required:false
    },
    requirements:
    {
        type:[String],
        required:false
    },
    status:
    {
        type:Boolean,
        required:true
    },
    date:
    {
        type:Date,
        required:true
    }

})



export default mongoose.model("Jobs", jobSchema)