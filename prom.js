//Use fetch to get data from https://jsonplaceholder.typicode.com/ 
fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
  
    return res.json();
  
  }).then((response) => {
    console.log(response);
  }).catch((err) => {
    console.log('Error occurred', err);
  });
  
//Promise
function RandomPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);
    document.getElementById("Num").textContent = randomNumber;

    if (randomNumber < 2) {
      resolve("Operation Success");
    } else {
      reject("Operation Failed");
    }
  });
}

//then catch
document.getElementById("Button").addEventListener("click", () => {
  
  RandomPromise()
    .then(result => {
      document.getElementById("result").textContent = result;
    })
    .catch(error => {
      document.getElementById("result").textContent = error;
    });
});
//async await
async function main() {
try {
  const result = await RandomPromise();
  document.getElementById("result1").textContent = result;
} catch (error) {
  document.getElementById("result1").textContent = error;
}
}
