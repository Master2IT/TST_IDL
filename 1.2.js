const orders = [1, 2, 3, 4, 5];

const logOrder = async (order) => {
  console.log("Order Id is: " + order + "Time: " + new Date().toTimeString());
  return new Promise((resolve) => setTimeout(resolve, 2000));
};

Promise.all(
  orders.map(async (order) => {
    await logOrder(order);
  })
);
