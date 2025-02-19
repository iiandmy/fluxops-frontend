export type BaseFilter<T> = {
	value: T;
};

export type LabeledFilter<T> = {
	label: string;
} & BaseFilter<T>;
