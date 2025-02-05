import { useState } from 'react';

import { BaseFilter } from '~/utils/types';

export const useFilter = <T>(defaultValue?: BaseFilter<T>) => {
	const [activeFilter, setActiveFilter] = useState<BaseFilter<T> | undefined>(
		defaultValue
	);

	const updateActiveFilter = (newFilter: BaseFilter<T>) => {
		if (newFilter?.value === activeFilter?.value) {
			setActiveFilter(undefined);
			return;
		}

		setActiveFilter(newFilter);
	};

	return { activeFilter, updateActiveFilter };
};
