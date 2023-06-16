const express = require("express");
const {
  summaryController, paragraphController, ChatbotController, timeComplexityController, grammarController, sqlController
} = require("../controllers/openaiController");

const router = express.Router();

//route
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", ChatbotController);
router.post("/timecomplexity", timeComplexityController);
router.post("/grammar", grammarController);
router.post("/sql", sqlController);




module.exports = router;