import 'antd/es/calendar/style';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/es/calendar/generateCalendar';
import { Dayjs } from 'dayjs';

export interface CalendarProps {}

const Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig);

export default Calendar;
