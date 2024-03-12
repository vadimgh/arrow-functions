'use strict'

const obj = {
  a: 10
}

Object.defineProperty(obj, 'b', {
  get: () => {
    console.log(this.a, typeof this, this);
    return this.a + 10;
  }
});

obj.b;