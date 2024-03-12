'use strict'

const obj = {
  i: 10,
  c: () => console.log(this.i, this),
  b: () => {
    console.log(this.i, this)
  }
}

obj.c();
obj.b();