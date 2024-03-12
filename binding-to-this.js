const obj = {
  x: 10,
  getX: () => {
    console.log(this.x);
  }
}

obj.getX();