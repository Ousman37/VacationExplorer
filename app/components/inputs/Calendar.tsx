import React from 'react';
import { DateRange, Range, RangeKeyDict } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalendarProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}
const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  disabledDates,
}) => {
  return (
    <div>
      <DateRange
        rangeColors={['#F4A261']}
        ranges={[value]}
        // Use the 'ranges' array
        onChange={onChange}
        minDate={new Date()}
        disabledDates={disabledDates}
        color="#0077B6"
        direction="horizontal"
      />
    </div>
  );
};

export default Calendar;
