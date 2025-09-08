import { Link } from "react-router-dom";

export default function Error() {
    return (
        <>
            <main id="main">
                <div className="container d-flex flex-column justify-content-center align-items-center" style={{height:"50vh"}}>
                    <div className="row">
                        <div className="col">
                            <h1>404 - Page not found</h1>
                            <p>The page you are looking for doesn’t exist.</p>
                            <Link to="/">Go back to Home</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}