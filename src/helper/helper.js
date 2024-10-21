
const sortAscending = ((prev, next) => prev < next ? -1 : prev > next ? 1 : 0);
const sortDescending = ((prev, next) => prev < next ? 1 : prev > next ? -1 : 0);

export { sortAscending, sortDescending }