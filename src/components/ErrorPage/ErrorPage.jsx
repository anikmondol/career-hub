import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center text-2xl my-20">
            <h2>Oops!!!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ullam.</p>
            <Link to="/"><button className="btn btn-primary mt-2">Go back home</button></Link>
        </div>
    );
};

export default ErrorPage;