/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/tests/**/*.(test).[jt]s?(x)'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@/?components(.*)$': '<rootDir>/src/components$1',
    '^@/?store(.*)$': '<rootDir>/src/store$1',
  },
};
