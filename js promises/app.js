////////////          p 1            ///////

let p1 = new Promise(function (resolve, reject) {
  if (value()) {
    setTimeout(() => {
      let pmsg = "Succefull Solved P-1 after 2 seconds";
      resolve(pmsg);
    }, 2000);
  } else {
    const err = new Error("here is error catch in p-1");
    return reject(err.message);
  }
});

/////////////here is use of .then() and .catch() method of promise object in p-1 /////////

p1.then((pval1) => {
  console.log(pval1);
  return "after solved p1 .thne() = 1";
})
  .then((pval2) => {
    console.log(pval2);
    return "after solved p1 .then() = 2";
  })
  .then((pval3) => {
    console.log(pval3);
    return;
  })
  .catch((error) => {
    return console.log(error);
  });
////////////          p 2            ///////
let p2 = new Promise(function (resolve, reject) {
  if (value()) {
    setTimeout(() => {
      let p2msg = "Succefull Solved P-2 after 3 seconds";
      resolve(p2msg);
    }, 3000);
  } else {
    const err = new Error("here is error catch in P-2");
    reject(err.message);
  }
  return;
});

p2.then((result1) => {
  console.log(result1);
  return "after solved p2 .thne() = 1";
})
  .then((result2) => {
    console.log(result2);
    return "after solved p2 .then() = 2";
  })
  .then((result3) => {
    console.log(result3);
    return () => {
      for (let i = 1 ; i <= 10 ; i++){
        console.log(`love you ${i}` + " times"); 
      }
    }
  }).then((result4) => {
    result4();
    return;
  })
  .catch((error) => {
    return console.log(error);
  });


function value() {
  return true;
}
// console.log(p);
// console.log(p2);
