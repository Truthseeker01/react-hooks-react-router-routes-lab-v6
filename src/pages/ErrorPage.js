import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {

    return (
        <>
            <NavBar />
            <h1>Oops! Looks like something went wrong.</h1>
        </>
    )

}

export default ErrorPage