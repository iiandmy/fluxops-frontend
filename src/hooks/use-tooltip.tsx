import { Tooltip } from 'react-tooltip';

export const useTooltip = (registrarId: string, content: string) => {
	const tooltipId = `tooltip_${registrarId}`;

	return {
		config: {
			'data-tooltip-id': tooltipId,
			'data-tooltip-content': content,
			'data-tooltip-delay-show': 500,
		},
		component: <Tooltip id={tooltipId} />,
	};
};
