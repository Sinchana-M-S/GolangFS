import Navbar from "../Header/Navbar";

export default function CarsList(){
    return(
        <>
        <Navbar/>
        <h3>Car List</h3>
        <div class="container">
        <table class="table table-bordered border-dark table-hover">
            <thead class="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Number</th>
                <th scope="col">Model</th>
                <th scope="col">Class</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>KA091231</td>
                <td>Zen</td>
                <td>Small car</td>
                <td><a class="btn btn-success" href="cars_view.html?car1">view</a></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>KA093211</td>
                <td>Beatle</td>
                <td>Big car</td>
                <td><a class="btn btn-success" href="cars_view.html?car2">view</a></td>
              </tr>
            </tbody>
          </table>
    </div>
        </>
        
    );

}