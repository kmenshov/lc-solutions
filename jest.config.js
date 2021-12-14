module.exports = {
  setupFiles: ['<rootDir>/shared/jest.setup.js'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
};
