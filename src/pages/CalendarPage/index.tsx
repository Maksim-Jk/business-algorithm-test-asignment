import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Calendar from "@/components/Calendar";

const CalendarPage = () => {
    return (
        <Container>
            <Typography variant='h4' component='h1' sx={{mb: 2}}>Календарь</Typography>
            <Calendar/>
        </Container>
    );
}

export default CalendarPage;
