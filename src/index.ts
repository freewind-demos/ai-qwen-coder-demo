import * as dotenv from 'dotenv';
dotenv.config();

import axios, { AxiosError } from 'axios';

// 阿里云 Qwen Coder 大模型的 API 地址和密钥
const API_URL = process.env.API_URL!;
const API_KEY = process.env.API_KEY!;
const MODEL_NAME = 'qwen-coder-plus';  // Specify your model name here

async function askQuestion(question: string) {
  try {
    const requestBody = {
      model: MODEL_NAME,
      messages: [
        {
          role: 'user',
          content: question
        }
      ]
    };

    console.log('Request Body:', requestBody);  // Debugging log

    const response = await axios.post(
      API_URL,
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      }
    );

    console.log('Response from Qwen Coder:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error asking question to Qwen Coder:', error.response ? error.response.data : error.message);
    } else if (error instanceof Error) {
      console.error('Error asking question to Qwen Coder:', error.message);
    } else {
      console.error('Error asking question to Qwen Coder:', error);
    }
  }
}

// 提问一个简单的问题
askQuestion('你好，Qwen Coder！你能帮我做什么吗？'); 