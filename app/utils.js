import format from 'date-fns/format';
import parse from 'date-fns/parse';

const FORMAT_STRING = 'yyyy-MM-dd';

export const parseDate = dateString => {
  return parse(dateString, FORMAT_STRING, new Date());
};

export const formatDate = date => {
  if (!date) {
    return date;
  }

  return format(date, FORMAT_STRING);
};
