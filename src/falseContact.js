const getRand = max => Math.ceil(Math.random() * max);
const getBool = chance => Math.random() > chance;

export default function FalseContact(nodeList, f1, f2, ratio) {
  this.nodeList = nodeList.length
    ? Array.prototype.slice.call(nodeList)
    : [nodeList];
  this.frameID = 0;
  this.count = 0;
  this.on = () => {
    this.nodeList.forEach(node => {
      node.classList.contains("off") && node.classList.remove("off");
    });
    return this;
  };
  this.off = () => {
    this.nodeList.forEach(node => {
      !node.classList.contains("off") && node.classList.add("off");
    });
    return this;
  };
  this.pause = () => {
    this.nodeList.forEach(node => {
      node.classList.contains("off") && node.classList.remove("off");
    });
    window.cancelAnimationFrame(this.frameID);
  };
  this.start = () => {
    this.count--;

    if (this.count <= 0) {
      this.count = getBool(ratio) ? getRand(f1) : getRand(f2);
      this.nodeList.forEach(node => {
        node.classList.toggle("off");
      });
    }

    this.frameID = window.requestAnimationFrame(this.start);
    return this;
  };
}
