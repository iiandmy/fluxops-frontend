import { Client, ClientStatus } from '~/store/clients';

import { BaseFilter, LabeledFilter } from '~/utils/types';

export type ClientLabeledFilter = LabeledFilter<ClientStatus>;
export type ClientFilter = BaseFilter<ClientStatus>;

export type ScriptTemplate = {
	label: string;
	value: string;
};

export type CommandLog = {
	id: string;
	client: Client;
	command: string;
};
