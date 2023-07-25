import mongoose, { Schema } from "mongoose"
import { v4 as uuidv4 } from 'uuid';

enum testType {
    Cognitive="Cognitive",
    Personality="Personality",
    reliability="reliability"
}
export class Candidate {
        id:string
        name:String;
        rating?: Number;
        email:String;
        phoneNumber: string;
        tests?:Map<testType,Number>;
        experience:Number;
        field:String;
        jobId:String;
    constructor(name:string,rating:Number,email:string
        ,phoneNumber:string,tests:Map<testType,Number>,experience:Number,field:string,jobId:string) {
        this.id=uuidv4();
        this.name=name;
        this.rating=rating;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.tests=tests;
        this.experience=experience;
        this.field=field;
        this.jobId=jobId;
    }
 
}
const candidateSchema = new mongoose.Schema<Candidate>({
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
    rating:
    {
        type: Number,
        required: false
    },
    email:
    {
        type: String,
        required: false
    },
    phoneNumber:
    {
        type: String,
        required: false
    },
    tests:
    {
        type: Map<testType,Number>,
        required: false
    },
    experience:
    {
        type:Number,
        required :false
    },
    field:
    {
        type:String,
        required:false
    },
    jobId:
    {
        type:String,
        require:false
    }

})
export default mongoose.model("Candidates", candidateSchema)