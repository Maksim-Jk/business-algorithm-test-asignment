import {Outlet} from "react-router-dom";

import Container from "@mui/material/Container";

const HomeLayout = () => {
    return (
        <Container>
            <Outlet/>
        </Container>
    )
};

export default HomeLayout