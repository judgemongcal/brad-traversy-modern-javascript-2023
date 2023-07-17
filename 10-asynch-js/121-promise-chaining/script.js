const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
  
      if (!error) {
        resolve({ name: 'John', age: 30 });
      } else {
        reject('Error: Something went wrong');
      }
    }, 1000);
  });

  promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((length) => {
    console.log(length);
  })
  .catch((error) => console.log(error));