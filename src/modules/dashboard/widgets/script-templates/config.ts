import { ScriptTemplate } from '~/modules/dashboard/types';

export const templates: ScriptTemplate[] = [
	{
		label: 'Docker Container',
		value: 'docker',
	},
	{
		label: 'Postgre SQL',
		value: 'postgre',
	},
	{
		label: 'Nginx',
		value: 'nginx',
	},
	{
		label: 'Kubernetes',
		value: 'k8s',
	},
	{
		label: 'Apache Kafka',
		value: 'kafka',
	},
	{
		label: 'AWS S3',
		value: 's3',
	},
];
