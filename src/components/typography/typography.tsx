import { FC } from 'react';

import { Body, BodyProps } from './body';
import { Headlines, HeadlinesProps } from './headlines';

export const Typography: {
	Headlines: FC<HeadlinesProps>;
	Body: FC<BodyProps>;
} = {
	Headlines,
	Body,
};
