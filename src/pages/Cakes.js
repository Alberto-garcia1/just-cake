import React from "react";
import CakeItem from "../components/CakeItem"; // Importing the ProjectItem component
import { CakeList } from "../helpers/CakeList"; // Importing the list of projects
import "../styles/Project.css";

function Cakes() {
  return (
    <div className="cakes">
      <h1>Cakes</h1>
      <div className="projectList">
        {/* Mapping through the list of projects and rendering ProjectItem for each */}
        {CakeList.map((cake, idx) => {
          return (
            <CakeItem key={idx} id={idx} name={cake.name} image={cake.image} />
          );
        })}
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ultrices luctus odio, eu lobortis dui dictum non. Mauris et dui
          dapibus, malesuada erat eu, faucibus tortor. Mauris consectetur
          accumsan bibendum. Curabitur posuere odio nec turpis feugiat, vitae
          ornare nunc faucibus. Praesent ac leo neque. In efficitur feugiat
          venenatis. Nulla sed elit rutrum, viverra urna vitae, consequat odio.
          Cras aliquam posuere faucibus. Suspendisse sit amet sem tincidunt,
          varius sapien sit amet, malesuada leo. Proin eget velit pretium magna
          pulvinar varius. Praesent porttitor mi at sapien blandit, quis sodales
          augue vestibulum. Etiam vel turpis quis mi hendrerit iaculis. Aenean
          lacinia est nisi, luctus molestie augue semper quis. Praesent
          facilisis scelerisque nisi.
        </p>
      </div>
      <div className="info-table">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
            <tr>
              <td>Anom</td>
              <td>19</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Megha</td>
              <td>19</td>
              <td>Female</td>
            </tr>
            <tr>
              <td>Subham</td>
              <td>25</td>
              <td>Male</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cakes;
