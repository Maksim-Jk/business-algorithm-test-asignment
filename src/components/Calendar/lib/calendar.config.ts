import dayGridPlugin from "@fullcalendar/daygrid";
import rrulePlugin from "@fullcalendar/rrule";

export const calendarConfig = {
    plugins: [dayGridPlugin, rrulePlugin],
    initialView: 'dayGridMonth',
    locale: 'ru',
    headerToolbar: {
        left: '',
        center: '',
        right: 'title'
    },
    buttonText: {
        today: 'Сегодня',
        month: 'Месяц',
        week: 'Неделя',
        day: 'День',
        list: 'Список'
    },
    buttonHints: {
        today: 'Сегодня',
        prev: 'Предыдущий месяц',
        next: 'Следующий месяц',
    }
};