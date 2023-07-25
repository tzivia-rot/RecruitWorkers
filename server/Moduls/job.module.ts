import mongoose, { Schema } from "mongoose"
interface IJob {
    id:string
    name: string;
    locationCompany?:string;
    descriptionCompany?:string;
    descriptionJob?:string;
    requirements:[string];
    status:boolean;
    date:Date;
}

const jobSchema = new mongoose.Schema<IJob>({
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