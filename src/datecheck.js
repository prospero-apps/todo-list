import { format, differenceInCalendarDays } from 'date-fns';

function formatDate(date) {
    return format(date, 'yyyy-MM-dd');
}

function checkToday(date) {
    const today = new Date();
    return formatDate(date) === formatDate(today);
}

function checkWeek(date) {
    const today = new Date();
    const diff = differenceInCalendarDays(date, today);
    return diff > 0 && diff < 8;
}

export { formatDate, checkToday, checkWeek };