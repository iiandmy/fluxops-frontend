enum CapacityStatus {
	Low = 'low',
	Medium = 'medium',
	High = 'high',
}

export const getResourceCapacityColor = (capacity: number) => {
	if (capacity < 49) return CapacityStatus.Low;
	else if (capacity < 74) return CapacityStatus.Medium;
	else return CapacityStatus.High;
};
