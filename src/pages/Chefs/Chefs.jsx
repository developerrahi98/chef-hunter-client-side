import React from "react";
import { Button, Card } from "react-bootstrap";

const Chefs = (chef) => {
    console.log(chef);
  return (
    <div className="py-5 col">
      <Card style={{ width: "32rem" }} className="w-75">
        <Card.Img variant="top" src={chef.chef.image} />
        <Card.Body>
          <Card.Title>{chef.chef.name}</Card.Title>
          <hr />
          <Card.Text>
            <p><span className="fw-bold">Experiences :</span> {chef.chef.yearsOfExperience}</p>
            <p><span className="fw-bold">Recipies :</span>  {chef.chef.numberOfSomething}</p>
            <p><span className="fw-bold">Likes :</span>  {chef.chef.likes}</p>
          </Card.Text>
          <Button variant="secondary">View Recipes</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Chefs;
