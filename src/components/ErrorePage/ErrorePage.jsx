import { Link } from "react-router-dom";


const ErrorePage = () => {
    return (
        <div className="flex h-screen flex-col gap-10 justify-center items-center">
            <h1 className="text-3xl font-bold text-yellow-600">Oops!! Page Not Found</h1>
            <button className="btn text-xl font-semibold"><Link to={'/'}>Back Home</Link></button>
        </div>
    );
};

export default ErrorePage;