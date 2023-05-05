import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Error from "../pages/error/Error";
import RecipeDetails from "../recipeDetails/RecipeDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/details/:id',
                element: <RecipeDetails></RecipeDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])

export default router;