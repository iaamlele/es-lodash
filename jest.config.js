export default {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: 'node',
    transform: {
        '^.+\\.jsx?$': 'babel-jest', // 处理 JavaScript 和 JSX 文件
    }
  };