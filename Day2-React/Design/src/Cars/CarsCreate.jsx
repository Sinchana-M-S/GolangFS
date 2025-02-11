import Navbar from "../Header/Navbar";

export default function CarsCreate(){
    return(
        <>
        <Navbar/>
        <h3><a href="cars_list.html" class="btn btn-secondary">Go Back</a>Add Car</h3>
    <div class="container">
      <div class="form-group mb-3">
        <label for="number" class="form-label">Car Number:</label>
        <input type="text" class="form-control" id="number" placeholder="Please Enter Car Number"/>
      </div>
      <div class="form-group mb-3">
        <label for="model" class="form-label">Car Model:</label>
        <input type="text" class="form-control" id="model" placeholder="Please Enter Car Model"/>
      </div>
      <div class="form-group mb-3">
        <label for="type" class="form-label">Car Type(SUV/CUV/Sedan):</label>
        <input type="text" class="form-control" id="type" placeholder="Please Enter Car Type"/>
      </div>
      <button class="btn btn-success">Create Car</button>
    </div>
        </>
    );

}