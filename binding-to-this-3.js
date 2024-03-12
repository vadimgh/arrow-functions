class C {
  a = 1;
  autoBoundMethod = () => {
    console.log(this.a);
  }
}

const c = new C();
c.autoBoundMethod();
const { autoBoundMethod } = c;
autoBoundMethod();