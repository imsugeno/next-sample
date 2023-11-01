const { create } = require('domain')
const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: '.' })

const customJestConfig = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    setupFilesAferEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
}

module.exports = createJestConfig(customJestConfig)