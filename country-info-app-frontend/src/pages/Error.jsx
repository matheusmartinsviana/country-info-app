import { Link } from "react-router-dom";


export default function Error() {
    return (
        <>
            <p>Sorry, page not found. <Link to='/'>Go to home page</Link></p>
        </>
    )
}