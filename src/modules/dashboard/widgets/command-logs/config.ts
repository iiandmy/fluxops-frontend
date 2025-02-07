import { CommandLog } from '../../types';

export const commandLogs: CommandLog[] = [
	{
		id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
		client: {
			id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
			status: 'active',
			address: { ip: '255.255.255.255', port: '5173' },
			hostname: 'client1.domain.local',
		},
		command: "echo 'Hello, World!'",
	},
	{
		id: 'b2c3d4e5-f6a7-8901-bcde-f23456789012',
		client: {
			id: 'b2c3d4e5-f6a7-8901-bcde-f23456789012',
			status: 'active',
			address: { ip: '172.110.17.59', port: '5174' },
			hostname: 'RIT59-wh',
		},
		command: 'ls -la',
	},
	{
		id: 'c3d4e5f6-a7b8-9012-cdef-g34567890123',
		client: {
			id: 'c3d4e5f6-a7b8-9012-cdef-g34567890123',
			status: 'active',
			address: { ip: '172.110.17.60', port: '5175' },
			hostname: 'RIT60-wh',
		},
		command: 'pwd',
	},
	{
		id: 'd4e5f6a7-b8c9-0123-def0-h45678901234',
		client: {
			id: 'd4e5f6a7-b8c9-0123-def0-h45678901234',
			status: 'active',
			address: { ip: '172.110.17.61', port: '5176' },
			hostname: 'RIT61-wh',
		},
		command: 'mkdir new_folder',
	},
	{
		id: 'e5f6a7b8-c9d0-1234-ef01-i56789012345',
		client: {
			id: 'e5f6a7b8-c9d0-1234-ef01-i56789012345',
			status: 'active',
			address: { ip: '172.110.17.62', port: '5177' },
			hostname: 'RIT62-wh',
		},
		command: 'rm -rf old_folder',
	},
	{
		id: 'f6a7b8c9-d0e1-2345-f012-j67890123456',
		client: {
			id: 'f6a7b8c9-d0e1-2345-f012-j67890123456',
			status: 'active',
			address: {
				ip: '172.110.17.63',
				port: '5178',
			},
			hostname: 'RIT63-wh',
		},
		command: 'touch new_file.txt',
	},
	{
		id: 'g7b8c9d0-e1f2-3456-g123-k78901234567',
		client: {
			id: 'g7b8c9d0-e1f2-3456-g123-k78901234567',
			status: 'active',
			address: {
				ip: '172.110.17.64',
				port: '5179',
			},
			hostname: 'RIT64-wh',
		},
		command: 'cat file.txt',
	},
	{
		id: 'h8c9d0e1-f2g3-4567-h234-l89012345678',
		client: {
			id: 'h8c9d0e1-f2g3-4567-h234-l89012345678',
			status: 'active',
			address: {
				ip: '172.110.17.65',
				port: '5180',
			},
			hostname: 'RIT65-wh',
		},
		command: 'grep search_term file.txt',
	},
	{
		id: 'i9d0e1f2-g3h4-5678-i345-m90123456789',
		client: {
			id: 'i9d0e1f2-g3h4-5678-i345-m90123456789',
			status: 'active',
			address: {
				ip: '172.110.17.66',
				port: '5181',
			},
			hostname: 'RIT66-wh',
		},
		command: 'chmod +x script.sh',
	},
	{
		id: 'j0e1f2g3-h4i5-6789-j456-n01234567890',
		client: {
			id: 'j0e1f2g3-h4i5-6789-j456-n01234567890',
			status: 'active',
			address: { ip: '172.110.17.67', port: '5182' },
			hostname: 'RIT67-wh',
		},
		command: './script.sh',
	},
];
