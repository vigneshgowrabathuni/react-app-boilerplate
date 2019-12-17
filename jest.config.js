module.exports = {
    verbose: true,
    testMatch: ['<rootDir>/src/__tests__/**/*.spec.*'],
    transform: {
        "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js']
}
