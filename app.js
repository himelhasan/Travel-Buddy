var carObject = {
  vehicle: "car",
  imageUrl:
    "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80",

  farePerKm: 5,
  capacity: 4,
  discription:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente natus quibusdam ut laudantium dolorum animi nihil! Sapiente, facere a, nulla omnis in, odit doloremque dignissimos ad officia nobis quas.",
};

var bikeObject = {
  vehicle: "bike",
  imageUrl:
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  farePerKm: 3,
  capacity: 1,
  discription:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente natus quibusdam ut laudantium dolorum animi nihil! Sapiente, facere a, nulla omnis in, odit doloremque dignissimos ad officia nobis quas.",
};

var busObject = {
  vehicle: "Bus",
  imageUrl:
    "https://images.unsplash.com/photo-1461435218581-ff0972867e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",

  farePerKm: 1.5,
  capacity: 15,
  discription:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente natus quibusdam ut laudantium dolorum animi nihil! Sapiente, facere a, nulla omnis in, odit doloremque dignissimos ad officia nobis quas.",
};

// main body element generated

function displayServices(service) {
  const mainSection = document.getElementById("main-section");
  const stringified = JSON.stringify(service);
  const div = document.createElement("div");
  div.classList.add("col-12");
  div.classList.add("col-md-6");
  div.innerHTML = `<div class="card my-3 mx-auto" style="max-width: 600px;">
      <div class="row g-0">
        <div class="col-12">
          <img src=${service.imageUrl} class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${service.vehicle}</h5>
            <p class="card-text">${service.discription}</p>
            <p class="card-text"><small class="text-muted"> Fare Per Kilo ${service.farePerKm}</small>
            <small class="text-muted"> Capacity ${service.capacity}</small></p>
            <button type="button"  class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='handelBooking(${stringified})'>
            Book Now </button>
          </div>
        </div>
      </div>
    </div>
    `;

  mainSection.appendChild(div);
}

displayServices(carObject);
displayServices(busObject);
displayServices(bikeObject);
displayServices(carObject);
displayServices(busObject);
displayServices(bikeObject);

//popuop creation

function handelBooking(obj) {
  const modalBody = document.getElementById("modal-body");
  const stringified = JSON.stringify(obj);

  modalBody.innerHTML = `
  <div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title">${obj.vehicle}</h5>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
  </div>
  <!-- previous id place id="modal-body"-->
  <div class="modal-body">
    <img src="${obj.imageUrl}" class="card-img-top" />
    <div class="card-body">
      <p class="card-text">Fare Per Kilo ${obj.farePerKm}</p>
      <p class="card-text">Capacity ${obj.capacity}</p>
    </div>

    <form class="row row-cols-lg-auto g-3 align-items-center">
      <div class="col-12">
        
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            id="inlineFormInputGroupUsername"
            placeholder="Distance to travel"
          />
        </div>
      </div>
      <div class="col-12">
       
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            id="inlineFormInputGroupUsername"
            placeholder="Number of vehicle"
          />
        </div>
      </div>

      <div class="col-12">
        <button type="submit" id="calculate-cost" class="btn btn-primary" onclick='calculateCost(${stringified})'>Calculate Cost</button>
      </div>
    </form>
  </div>

  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>
  `;
  console.log("hey");
  console.log(obj);
}

function calculateCost(obj) {
  console.log("hey himel");
  console.log(obj);
}
