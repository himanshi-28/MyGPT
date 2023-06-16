const dotenv=require('dotenv');
dotenv.config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.summaryController = async (req, res) => {
    try {
      const { text } = req.body;
      const { data } = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Summarize \n${text}` ,
        max_tokens: 64,
        temperature: 0.7,
        
      });
    if (data) {
        if (data.choices[0].text) {
          return res.status(200).json(data.choices[0].text);
        }
      }
    }catch (err) {
        console.log(err);
        return res.status(404).json({
          message: err.message,
        });
      }
    };
  
    exports.paragraphController = async (req, res) => {
      try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `write a detail paragraph about \n${text}`,
          max_tokens: 500,
          temperature: 0.5,
        });
        if (data) {
          if (data.choices[0].text) {
            return res.status(200).json(data.choices[0].text);
          }
        }
      } catch (err) {
        console.log(err);
        return res.status(404).json({
          message: err.message,
        });
      }
    };

    exports.ChatbotController = async (req, res) => {
      try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `Answer question similar to how Elon Musk would.
          Me: 'What's your name?'
          Elon: 'My name is Elon' 

          Me: ${text}`,
          max_tokens: 300,
          temperature: 0.7,
        });
        if (data) {
          if (data.choices[0].text) {
            return res.status(200).json(data.choices[0].text);
          }
        }
      } catch (err) {
        console.log(err);
        return res.status(404).json({
          message: err.message,
        });
      }
    };

    exports.timeComplexityController = async (req, res) => {
      try {
        const { code } = req.body;
        const { data } = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `Given the following code:\n${code}\nDetermine the time complexity of this function.`,
          max_tokens: 64,
          temperature: 0.7,
        });
    
        if (data && data.choices[0].text) {
          return res.status(200).json(data.choices[0].text);
        }
      } catch (error) {
        console.log(error);
        return res.status(404).json({
          message: error.message,
        });
      }
    };
    

    exports.grammarController = async (req, res) => {
      try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `Correct this to standard English:\n\n${text}`,
          max_tokens: 60,
          temperature: 0,
        });
        if (data) {
          if (data.choices[0].text) {
            return res.status(200).json(data.choices[0].text.trim());
          }
        }
      } catch (err) {
        console.log(err);
        return res.status(404).json({
          message: err.message,
        });
      }
    };


    exports.sqlController = async (req, res) => {
      try {
        const { query } = req.body;
        const { data } = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `Create a SQL request: ${query}`,
          max_tokens: 60,
          temperature: 0.3,
        });
        if (data) {
          if (data.choices[0].text) {
            return res.status(200).json(data.choices[0].text);
          }
        }
      } catch (err) {
        console.log(err);
        return res.status(404).json({
          message: err.message,
        });
      }
    };