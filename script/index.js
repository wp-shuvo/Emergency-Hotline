// call button
console.log(document);
const callCost = 20;

let totalCoin = parseInt(document.getElementById("total-coin").innerText);

// National Emergency Number
document.getElementById("call-btn-emargency").addEventListener("click", function () {
  if (totalCoin < callCost) {
    alert("Not enough coins! You need at least 20 coins to make a call.");
    return;
  }

  totalCoin = totalCoin - callCost;
  document.getElementById("total-coin").innerText = totalCoin;

  alert("Calling National Emergency Number 999...");
  // add history

  const callHistory = document.getElementById("call-history");

  const addHistory = document.createElement("div");
  //Present time 
  let now = new Date();
  let currentTime = now.toLocaleTimeString();

  addHistory.innerHTML = `
          <div class="bg-gray-200 p-4 rounded-xl flex justify-between items-center mb-4">
            <div>
              <h4 class="font-semibold text-lg ">National Emergency Number
                </h4>
              <p class="text-lg">999</p>
            </div>            
            <div class="font-bold">
              ${currentTime}
            </div>
          </div>
`

  callHistory.append(addHistory);

});

// Police Helpline Number

document.getElementById("call-btn-Police").addEventListener("click", function () {
  if (totalCoin < callCost) {
    alert("Not enough coins! You need at least 20 coins to make a call.");
    return;
  }

  totalCoin = totalCoin - callCost;
  document.getElementById("total-coin").innerText = totalCoin;

  alert("Calling Police Helpline Number 999...");

  // add history

  const callHistory = document.getElementById("call-history");

  const addHistory = document.createElement("div");
  //Present time 
  let now = new Date();
  let currentTime = now.toLocaleTimeString();

  addHistory.innerHTML = `
          <div class="bg-gray-200 p-4 rounded-xl flex justify-between items-center mb-4">
            <div>
              <h4 class="font-semibold text-lg ">Police Helpline Number
                </h4>
              <p class="text-lg">999</p>
            </div>            
            <div class="font-bold">
              ${currentTime}
            </div>
          </div>
`

  callHistory.append(addHistory);

});

// Fire Service Number

document.getElementById("call-btn-Fire-Service").addEventListener("click", function () {
  if (totalCoin < callCost) {
    alert("Not enough coins! You need at least 20 coins to make a call.");
    return;
  }

  totalCoin = totalCoin - callCost;
  document.getElementById("total-coin").innerText = totalCoin;

  alert("Calling Fire Service Number 999...");

  // add history

  const callHistory = document.getElementById("call-history");

  const addHistory = document.createElement("div");
  //Present time 
  let now = new Date();
  let currentTime = now.toLocaleTimeString();

  addHistory.innerHTML = `
          <div class="bg-gray-200 p-4 rounded-xl flex justify-between items-center mb-4">
            <div>
              <h4 class="font-semibold text-lg ">Fire Service Number
                </h4>
              <p class="text-lg">999</p>
            </div>            
            <div class="font-bold">
              ${currentTime}
            </div>
          </div>
`

  callHistory.append(addHistory);

});

// Ambulance

document.getElementById("call-btn-Ambulance").addEventListener("click", function () {
  if (totalCoin < callCost) {
    alert("Not enough coins! You need at least 20 coins to make a call.");
    return;
  }

  totalCoin = totalCoin - callCost;
  document.getElementById("total-coin").innerText = totalCoin;

  alert("Calling Ambulance Service 1994-999999...");

  // add history

  const callHistory = document.getElementById("call-history");

  const addHistory = document.createElement("div");
  //Present time 
  let now = new Date();
  let currentTime = now.toLocaleTimeString();

  addHistory.innerHTML = `
          <div class="bg-gray-200 p-4 rounded-xl flex justify-between items-center mb-4">
            <div>
              <h4 class="font-semibold text-lg ">Ambulance Service
                </h4>
              <p class="text-lg">1994-999999</p>
            </div>            
            <div class="font-bold">
              ${currentTime}
            </div>
          </div>
`

  callHistory.append(addHistory);

});

// Women & Child Helpline

document.getElementById("call-btn-woman").addEventListener("click", function () {
  if (totalCoin < callCost) {
    alert("Not enough coins! You need at least 20 coins to make a call.");
    return;
  }

  totalCoin = totalCoin - callCost;
  document.getElementById("total-coin").innerText = totalCoin;

  alert("Calling Women & Child Helpline 109...");

  // add history

  const callHistory = document.getElementById("call-history");

  const addHistory = document.createElement("div");
  //Present time 
  let now = new Date();
  let currentTime = now.toLocaleTimeString();

  addHistory.innerHTML = `
          <div class="bg-gray-200 p-4 rounded-xl flex justify-between items-center mb-4">
            <div>
              <h4 class="font-semibold text-lg ">Women & Child Helpline
                </h4>
              <p class="text-lg">109</p>
            </div>            
            <div class="font-bold">
              ${currentTime}
            </div>
          </div>
`

  callHistory.append(addHistory);

});

//Anti-Corruption Helpline

document.getElementById("call-btn-anti-corruption").addEventListener("click", function () {
  if (totalCoin < callCost) {
    alert("Not enough coins! You need at least 20 coins to make a call.");
    return;
  }

  totalCoin = totalCoin - callCost;
  document.getElementById("total-coin").innerText = totalCoin;

  alert("Anti-Corruption Helpline 106...");

  // add history

  const callHistory = document.getElementById("call-history");

  const addHistory = document.createElement("div");
  //Present time 
  let now = new Date();
  let currentTime = now.toLocaleTimeString();

  addHistory.innerHTML = `
          <div class="bg-gray-200 p-4 rounded-xl flex justify-between items-center mb-4">
            <div>
              <h4 class="font-semibold text-lg ">Anti-Corruption Helpline
                </h4>
              <p class="text-lg">106</p>
            </div>            
            <div class="font-bold">
              ${currentTime}
            </div>
          </div>
`

  callHistory.append(addHistory);

});

////////************************** */


// heart count

const heartIcons = document.getElementsByClassName("heart-icon");

for (let heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    let heartCountElement = document.getElementById("heart-click-count");
    let heartCount = parseInt(heartCountElement.innerText);
    heartCount++;
    heartCountElement.innerText = heartCount;
    console.log(heartCount);
  })
}

document.getElementById("btn-clear").addEventListener("click", function () {
  const historyBox = document.getElementById("call-history");

  historyBox.innerHTML = "";
})

const btnCopys = document.getElementsByClassName("btn-copy");

for (let btnCopy of btnCopys) {
  btnCopy.addEventListener("click", function () {
    let copyCountElement = document.getElementById("copy-count");
    let copyCount = parseInt(copyCountElement.innerText);

    copyCount++;
    copyCountElement.innerText = copyCount;

    const emergencyNumber = btnCopy.parentNode.parentNode.childNodes[7].innerText;

    const serviceName = btnCopy.parentNode.parentNode.childNodes[3].innerText;

    navigator.clipboard.writeText(emergencyNumber);

    alert(serviceName + " copied: " + emergencyNumber);

  })
}