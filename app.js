
var carObject = {
  vehicle: "Car",
  imageUrl:
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  farePerKilo: 3,
  capacity: 4,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};

var bikeObject = {
  vehicle: "bike",
  imageUrl:
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

  farePerKilo: 2,
  capacity: 2,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
var busObject = {
  vehicle: "Bus",
  imageUrl:
    "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  farePerKilo: 3,
  capacity: 30,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};


const servicesArray = [bikeObject, carObject, busObject]

function displayAllArticles(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    displayeServices(element);
  }
}


// fareperkilo --> per kilo cost

function displayeServices(services) {

  const mainSection = document.getElementById('main-section');
  const stringified = JSON.stringify(services)

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card mt-3 mx-auto" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src=${services.imageUrl} class="img-fluid rounded-start h-100" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${services.vehicle}</h5>
                  <p class="card-text">${services.description}</p>
                  <p class="card-text"><small class="text-muted">Fare per kilo ${services.farePerKilo}</small>   <small class="text-muted">  Capacity ${services.capacity}</small></p>
 
                  <button type="button"    class="btn btn-primary" data-bs-toggle="modal" onclick='hendleBokking(${stringified})' data-bs-target="#exampleModal">
                 Book Now
                 </button>
                </div>
              </div>
            </div>
          </div>
`;

  mainSection.appendChild(div);
  console.log(services);
}
displayeServices(carObject);
displayeServices(bikeObject);
displayeServices(busObject);


function hendleBokking(obj) {

  const modalBody = document.getElementById('modal-body');
  const stringified = JSON.stringify(obj)
  modalBody.innerHTML = `
  <div class="card mx-auto" style="width: 18rem;">
  <img src="${obj.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Mood : ${obj.vehicle}</h5>
    <p class="card-text">${obj.description}</p>
    <p class="card-text"><small class="text-muted">Fare per kilo ${obj.farePerKilo}</small>   <small class="text-muted">  Capacity ${obj.capacity}</small></p>
    <div class="d-flex flex-column" role="search">

    <p> Fare: <small class="text-muted" id="fare"></small></p>
    <p> Tax: <small class="text-muted" id='tax'></small></p>
    <p> Total-cost: <small class="text-muted" id='total'></small></p>



       <input class="form-control m-2" id="distance-input" type="number" placeholder="koto kilo jaba" aria-label="Search">
       <input class="form-control m-2" id="quentity-input" type="number" placeholder="koto gari lagby" aria-label="Search">
       <button class="btn btn-outline-success" type="submit" onclick='calculateCost(${stringified})'>Submit</button>
   </div>
</div>
  `;
}


function calculateCost(obj) {
  const quentity = document.getElementById("quentity-input").value;
  const distance = document.getElementById("distance-input").value;



  const fareDiv = document.getElementById("fare")

  fareDiv.innerHTML = quentity * distance * obj.farePerKilo
  console.log(fareDiv)

  const taxDiv = document.getElementById("tax");
  taxDiv.innerHTML = quentity * distance * obj.farePerKilo * 0.1;
  console.log(taxDiv);


  const totalCost = document.getElementById("total");
  totalCost.innerHTML = fareDiv.innerHTML + taxDiv.innerHTML;
  console.log(totalCost);

  console.log(obj)


}

document.getElementById('search-btn').addEventListener('click', function () {
  const value = document.getElementById('search-value').value;
  for (let i = 0; i < servicesArray.length; i++) {
    const element = servicesArray[i];
    if (value.toLowerCase() == element.vehicle.toLocaleLowerCase()) {
      document.getElementById('main-section').innerHTML = ""
      displayeServices(element);
      return;
    }
  }
  alert("enter a valid name");

})

