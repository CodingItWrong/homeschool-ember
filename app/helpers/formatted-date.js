import { helper } from '@ember/component/helper';
import format from 'date-fns/format';

const FORMAT_STRING = 'EEE, MMM d';

export default helper(function formattedDate([date]) {
  return format(date, FORMAT_STRING);
});
