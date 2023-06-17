# MyGPT
MyGPT is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. It provides a range of useful tools powered by OpenAI APIs. The application allows users to register, log in, and access various tools, including Text to Summary, Words to Paragraph, Chatbot, Grammar Checker, SQL Query Generator, and Time Complexity Analyzer.

## Table of Contents
+ Installation
+ Features
+ Technologies
+ Usage
+ API Integration

## Installation
To run the project locally, follow these steps:

+ **Clone the repository:**
   ```
   git clone https://github.com/himanshi-28/MyGPT.git
   ```
+ **Install the dependencies:**

   ```
   cd MyGPT
   npm install
   ```
+ **Set up the environment variables:**
   - Create a .env file in the MyGPT directory.
   - Define the following environment variables in the .env file:
 
     
   ```
   MONGODB_URI=your-mongodb-uri
   JWT_ACCESS_SECRET=your-jwt-secret
   OPENAI_API_KEY=your-openai-api-key
   ```

+ **Start the development server:**
   ```
   npm run dev
   ```

## Features
+ **User Authentication:** Users can register and log in securely using hashed passwords. Authentication is handled using tokens and cookies.
  
+ **Text to Summary:** Convert a given text into a concise summary using OpenAI's language models.
  
+ **Words to Paragraph:** Generate paragraphs of text based on a list of input words. This tool utilizes OpenAI's powerful text generation capabilities.
  
+ **Chatbot:** Interact with an AI-powered chatbot that uses OpenAI's conversational models to provide natural language responses.
  
+ **Grammar Checker:** Check the grammar and style of your text using OpenAI's language models. Get suggestions for improving your writing.
  
+ **SQL Query Generator:** Automatically generate SQL queries based on provided parameters. This feature helps users create queries more efficiently.
  
+ **Time Complexity Analyzer:** Analyze the time complexity of an algorithm using OpenAI's models. Get insights into the efficiency of your code.

## Technologies
The project leverages the following technologies and frameworks:

+ **Frontend:** HTML, CSS, JavaScript, React, Material-UI
+ **Backend:** Node.js, Express.js
+ **Database:** MongoDB
+ **API Integration:** OpenAI

## Usage
+ **User Registration:** Visit the application's homepage and click on the "Sign Up" button. Fill in the required information and submit the form to create a new user account.

+ **User Login:** After registration or on subsequent visits, click on the "Login" button on the homepage. Enter your credentials to log in.

+ **Access Tools:** Once logged in, you will be redirected to the main tools page. From here, you can select any of the available tools to use.

+ **Tool Usage:** Each tool has its own interface and functionality. Follow the on-screen instructions to use the specific tools provided.

## API Integration
This project integrates with the OpenAI APIs to power its various tools. The following APIs are used:
+ **OpenAI Text Summarization API:** Used to generate concise summaries of provided texts.

+ **OpenAI Language Models API:** Utilized for tasks such as words to paragraph generation, chatbot responses, grammar checking, and time complexity analysis.

