import express from 'express';
import CondidateController from '../Controllers/condidate.controller';
import bodyParser from 'body-parser';
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const CondidateRouter=express.Router();
CondidateRouter.delete("/DeleteCondidate/:id",CondidateController.DeleteCondidate);
CondidateRouter.post("/AddCondidate",urlencodedParser, CondidateController.AddCondidate);
CondidateRouter.get("/GetCandidates", CondidateController.GetAll);
CondidateRouter.get("/GetById/:id", CondidateController.GetById);
CondidateRouter.get("/GetByJobId/:id", CondidateController.GetByJobId);
CondidateRouter.put("/UpdateCondidate/:id",urlencodedParser, CondidateController.UpdateCondidate);
export default CondidateRouter;