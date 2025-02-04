import { ClientStatus } from '~/store/clients';

import { BaseFilter, LabeledFilter } from '~/utils/types';

export type ClientLabeledFilter = LabeledFilter<ClientStatus>;
export type ClientFilter = BaseFilter<ClientStatus>;
