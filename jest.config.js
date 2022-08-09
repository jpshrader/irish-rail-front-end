const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
	preset: 'jest-preset-angular',
	roots: ['<rootDir>/src/'],
	testMatch: ['**/+(*.)+(test).+(ts)'],
	setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
	collectCoverage: true,
	coverageReporters: ['html'],
	coverageDirectory: 'coverage',
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
		prefix: '<rootDir>/'
	})
};
