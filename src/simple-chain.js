const chainMaker = {
  chainArray: [],
  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    this.chainArray.push(`( ${value} )`);
  return this;
  },

  removeLink(position) {
    if (this.chainArray.length < position || (typeof position !== "number")
      || !Number.isInteger(position) || ((position-1) < 0)) {
      this.chainArray = [];
      throw new Error("Error");
    }
    this.chainArray.splice(position-1, 1);
    return this;
    },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    let result = this.chainArray.join("~~");
    this.chainArray = [];
    return result;
  }
};

module.exports = chainMaker;