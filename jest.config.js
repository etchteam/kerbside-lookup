module.exports = {
  testMatch: [
    '**/?(*.)test.js?(x)'
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  setupFiles: ['<rootDir>src/setupJest.js'],
  setupTestFrameworkScriptFile: '<rootDir>src/setupTests.js'
};
