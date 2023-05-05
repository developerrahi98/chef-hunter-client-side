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
        {
            chefs.map(chef => <Chefs 
            key={chef.id}
            chef={chef}
            ></Chefs>)
        }
        </div>
      </div>
    </div>
  );
};

export default Home;
