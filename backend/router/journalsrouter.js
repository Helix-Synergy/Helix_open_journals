const express=require("express");
const router=express.Router();
const {GetJournalsForm,JournalsForm}=require("../controller/journalscontroller")
router.post("/journalsform",JournalsForm);
router.get("/getjournalsform",GetJournalsForm)
module.exports=router;