export const randomize = array => {
	var arrLength = array.length,
		temporaryIndex,
		randomIndex;
	while (arrLength) {
		randomIndex = Math.floor(Math.random() * arrLength--);
		temporaryIndex = array[arrLength];
		array[arrLength] = array[randomIndex];
		array[randomIndex] = temporaryIndex;
	}
	return array;
};
