export default {
	extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
	rules: {
		'selector-class-pattern': [
			'^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
			{
				message: 'Expected custom property name to be underscore_case',
			},
		],
		'custom-property-pattern': [
			'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message: 'Expected custom property name to be kebab-case',
			},
		],
	},
};