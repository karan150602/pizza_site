const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise resolved!!");
    }, ms);
  });
};

delay(2000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("there has been an error", error);
  });
