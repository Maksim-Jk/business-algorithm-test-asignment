import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/employees">Employees</Link>
                    </li>
                    <li>
                        <Link to="/calendar">Calendar</Link>
                    </li>
                    <li>
                        <Link to="/work-list">Work List</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;