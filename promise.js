const algoPasa = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Whooops!");
    }
  });
};

algoPasa()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
////////////////////////////////////////////////////const algoPasa = () => {
const algoPasa2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(true);
      }, 5000);
    } else {
      const error = new Error("Whooops!");
      reject(error);
    }
  });
};

algoPasa2()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });

Promise.all([algoPasa(), algoPasa2()])
  .then((response) => {
    console.log("Array of results", response);
  })
  .catch((err) => {
    console.error(err);
  });
