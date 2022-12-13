import { useMatch, useResolvedPath, Link } from "react-router-dom";
import "./LinkTo.css";


const LinkTo = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className={`${match ? "nav-active": ""} nav-style`}
            to={to}
            {...props}
        >
            {children}
        </Link>
    )
}

export default LinkTo;