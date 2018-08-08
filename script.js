var myFirstPromise = new Promise(function(resolve, reject) {
    setTimeout(() =>{
      resolve(' First Promise');
    },10000);
});
myFirstPromise
  .then (
    result => {
      alert("Fulfilled" + result)
    },
    error => {
      alert("Rejected" + error)
    },
);
    

