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

function displayServices(service) {
  const mainSection = document.getElementById("main-section");
  const div = document.createElement("div");
  div.classList.add("m-5");
  div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src=${service.imageUrl} class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${service.vehicle}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>`;

  mainSection.appendChild(div);
  console.log(service);
}

displayServices(busObject);
displayServices(busObject);

function handelBooking(serviceObj) {
  const modal = document.getElementById("modal-body");
  const modalDiv = document.createElement("div");

  modalDiv.innerHTML = `
  
  <div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">${serviceObj.vehicle} </h5>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
  </div>
  <div class="modal-body" >
  <img src=${serviceObj.imageUrl} class="card-img-top" alt="...">

  <div class="card-body py-3">
    
    <p class="card-text">${serviceObj.discription} </p>
    <p class="card-text"><small class="text-muted"> Fare Per Kilo ${serviceObj.farePerKm}</small>
            <small class="text-muted"> Capacity ${serviceObj.capacity}</small></p>
  </div>
  
  
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
      Close
    </button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</div>
</div>




 `;
  modal.appendChild(modalDiv);

  console.log("hey");
  console.log(serviceObj);
}
