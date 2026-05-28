class UniqueArray extends Array {
  constructor(...values) {
    const newValues = [...new Set(values)];
    super(...newValues);
  }

  push(...values) {
    const uniqueValues = [...new Set(values)].filter(
      (value) => !this.includes(value),
    );
    return super.push(...uniqueValues);
  }
}

export default UniqueArray;
