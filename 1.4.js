const obj = {
  message: "This is a test",
};

const obj1 = {
  get() {
    return "404";
  },
};

const proxy = new Proxy(obj, obj1);

console.log(proxy.message);
