const insertEl = (arr: Task[], item: Task, index: number, length: number): Task[] => {
  return [...arr.slice(0, index), item, ...arr.slice(index, length)];
};

export default insertEl;
