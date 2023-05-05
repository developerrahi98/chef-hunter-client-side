import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const RecipeDetails = () => {
  const details = useLoaderData();
  const { name, yearsOfExperience, likes, number, image, food, bio } = details;
  const recipes = details.recipes;

  return (
    <div>
      <Container>
        <img className="mx auto w-50" src={image} alt="" />
        <h3 className="my-4">Name : {name}</h3>
        <p>
          <strong>BioData : </strong>
          {bio}
        </p>
        <p>
          <strong>Experience :</strong> {yearsOfExperience} years
        </p>
        <p>
          <strong>Recipes :</strong> {number} items
        </p>
        <p>
          <strong>Food :</strong> {food}
        </p>
        <p>
          <strong>Likes :</strong> {likes} peoples
        </p>
        <h2 className="text-center fw-bold my-4">Recipe</h2>
        <div className="d-md-flex  p-2 m-2 gap-5">
        {recipes.map((r) => (
            <Recipe key={r.name} r={r}></Recipe>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RecipeDetails;
