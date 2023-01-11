module.exports = {
	extends: [
		"standard-with-typescript"
	],
	rules: {
		indent: ["error", "tab"],
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"no-unused-vars": ["error", { varsIgnorePattern: "^_[^_]?" }],
		quotes: ["error", "double"]
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			extends: "plugin:jsx-a11y/strict",
			parserOptions: {
				project: "./tsconfig.json"
			},
			rules: {
				"@typescript-eslint/indent": ["error", "tab"],
				"@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_[^_]?" }],
				"@typescript-eslint/quotes": ["error", "double"],

				"@typescript-eslint/no-non-null-assertion": "off"
			}
		},
		{
			files: ["**/*.md/*.*"],
			extends: "plugin:markdown/recommended",
			rules: {
				"@typescript-eslint/no-redeclare": "off",
				"@typescript-eslint/no-unused-vars": "off",
				"@typescript-eslint/no-use-before-define": "off",
				"@typescript-eslint/no-var-requires": "off",
				"@typescript-eslint/comma-dangle": "off",
				"@typescript-eslint/consistent-type-imports": "off",
				"import/no-unresolved": "off",
				"no-alert": "off",
				"no-console": "off",
				"no-restricted-imports": "off",
				"no-undef": "off",
				"no-unused-expressions": "off",
				"no-unused-vars": "off"
			}
		},
		{
			files: ["**/README.md/*.*"],
			rules: {
				indent: ["error", 2],
				"no-tabs": "error"
			}
		},
		{
			files: ["*.astro"],
			extends: [
				"plugin:astro/recommended",
				"plugin:astro/jsx-a11y-strict"
			],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"]
			}
		}
	]
}
