import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Chefs from "../../Chefs/Chefs";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="d-flex px-4 py-5">
        <div className="p-5 w-75">
          <h1 className="fw-bold">The Best Cusine</h1>
          <p className="text-secondary fs-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            ut magnam amet esse, obcaecati quos optio neque quia nobis magni non
            delectus fugit necessitatibus voluptatibus officiis minus. Fugiat,
            cum temporibus!
          </p>
          <Button variant="outline-success">About Us</Button>
        </div>
        <div>
          <img
            className="rounded w-100"
            src="/src/assets/images/photo-1600891964599-f61ba0e24092.avif"
            alt=""
          />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="fw-bold text-center fs-1">All Chefs Here</h2>
        <div className="row row-cols-2 g-0 w-75 mx-auto">
          {chefs.map((chef) => (
            <Chefs key={chef.id} chef={chef}></Chefs>
          ))}
        </div>
      </div>
      <div className="d-flex mt-4 p-4 w-75 mx-auto justify-content-around">
        <div>
          <h1 className="fw-bold fs-1">Our Best Chefs</h1>
          <p>
            Our mission is to serve the community by offering a state-of-the-art
            facility with professional management, and by hosting local events,
            conventions, trade shows, meetings, and concerts generating
            significant economic impact for the City of Pembroke Pines as well
            as promoting education, entertainment and community pride, in a
            fiscally responsible manner. In addition, the City Center will
            support and encourage actions and programs that enhance the
            desirability and attractiveness of Pembroke Pines to neighboring
            communities.
          </p>
          <h1 className="fw-bold">Responsibilities</h1>
          <ul>
            <li>
              Set up the kitchen with cooking utensils and equipment, like
              knives, pans and kitchen scales
            </li>
            <li>Study each recipe and gather all necessary ingredients</li>
            <li>Cook food in a timely manner</li>
            <li>Ensure appealing plate presentation</li>
            <li>Supervise Cooks and assist as needed</li>
          </ul>
        </div>
        <div className="ms-4 mt-5">
            <img className="rounded" src="/src/assets/images/istockphoto-1408797987-170667a.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
