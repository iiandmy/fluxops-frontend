import cn from 'classnames';
import { ComponentProps, forwardRef, useState } from 'react';

import { PlaceholderUrl } from '~/constants';

import css from './image.module.css';

type ObjectFitType = 'none' | 'cover' | 'fill' | 'contain';

interface IImageProps extends ComponentProps<'img'> {
	fallback?: string;
	objectFit?: ObjectFitType;
	rounded?: boolean;
}

export const Image = forwardRef<HTMLImageElement, IImageProps>(
	(
		{
			src,
			fallback,
			className,
			objectFit = 'fill',
			rounded = false,
			...restProps
		},
		ref
	) => {
		const [isLoading, setIsLoading] = useState(true);
		const [hasError, setHasError] = useState(false);

		const onErrorHandler = () => {
			setIsLoading(false);
			setHasError(true);
		};

		const onLoadHandler = () => {
			setIsLoading(false);
		};

		const computeSrc = () => {
			if (isLoading || hasError) {
				return (
					fallback ?? (hasError ? PlaceholderUrl.Error : PlaceholderUrl.Loading)
				);
			}

			return src;
		};

		return (
			<img
				ref={ref as never}
				src={computeSrc()}
				onLoad={onLoadHandler}
				onError={onErrorHandler}
				className={cn(
					css.default,
					css[`object_fit_${objectFit}`],
					{ [css.rounded]: rounded },
					className
				)}
				{...restProps}
			/>
		);
	}
);
