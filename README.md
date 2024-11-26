# Qwen Coder 示例项目

## 项目简介

本项目展示了如何使用阿里云的 Qwen Coder 模型通过 API 进行交互。Qwen Coder 是一个强大的编程助手，可以回答编程相关的问题并提供代码建议。

注：本demo使用qwen-coder-plus模型生成，体验很差。

## 目的

- **学习**：了解如何使用阿里云的 Qwen Coder API。
- **实践**：通过实际项目体验 Qwen Coder 的功能。
- **应用**：在实际开发中利用 Qwen Coder 提高编程效率。

## 环境配置

1. **安装依赖**：   

```sh
pnpm install
```

2. **配置环境变量**：
   - 复制 `.env.sample` 文件为 `.env`。
   - 在 `.env` 文件中填写你的 API 密钥和 URL。     
   

```sh
cp .env.sample .env  
```

编辑 `.env` 文件：          
  
```sh
API_URL=https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
API_KEY=your-api-key  
```

## 使用方法

1. **运行项目**：   

```sh
pnpm start   
```

2. **提问示例**：
   - 打开 `src/index.ts` 文件，可以看到一个示例问题：  
    ```typescript
    askQuestion('你好，Qwen Coder！你能帮我做什么吗？');  
    ```
   - 运行项目后，控制台将显示请求体和 Qwen Coder 返回的响应。

## 代码结构

- **`src/index.ts`**：主入口文件，包含与 Qwen Coder API 交互的代码。
- **`.env.sample`**：环境变量配置文件模板。
- **`package.json`**：项目配置文件，包含依赖和脚本。
- **`tsconfig.json`**：TypeScript 配置文件。
