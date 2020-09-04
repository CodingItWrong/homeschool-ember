/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-anonymous-default-export
export default function (server) {
  const history = server.create('subject', { name: 'History' });
  const geography = server.create('subject', { name: 'Geography' });
  const literature = server.create('subject', { name: 'Literature' });
  server.create('subject', { name: 'Math' });

  const year1 = server.create('contentYear', {
    name: 'Year 1',
    subjects: [history, geography, literature],
  });
  const year2 = server.create('contentYear', {
    name: 'Year 2',
    subjects: [history, geography],
  });

  const year1Week1 = server.create('contentWeek', {
    contentYear: year1,
    number: 1,
  });
  const year1Week2 = server.create('contentWeek', {
    contentYear: year1,
    number: 2,
  });
  const year2Week1 = server.create('contentWeek', {
    contentYear: year2,
    number: 1,
  });
  const year2Week2 = server.create('contentWeek', {
    contentYear: year2,
    number: 2,
  });

  const year1Week1Monday = server.create('contentDay', {
    contentWeek: year1Week1,
    dayOfWeek: 'Monday',
  });
  const year1Week1Tuesday = server.create('contentDay', {
    contentWeek: year1Week1,
    dayOfWeek: 'Tuesday',
  });
  const year1Week1Wednesday = server.create('contentDay', {
    contentWeek: year1Week1,
    dayOfWeek: 'Wednesday',
  });
  const year1Week1Thursday = server.create('contentDay', {
    contentWeek: year1Week1,
    dayOfWeek: 'Thursday',
  });
  const year1Week1Friday = server.create('contentDay', {
    contentWeek: year1Week1,
    dayOfWeek: 'Friday',
  });
  const year2Week1Monday = server.create('contentDay', {
    contentWeek: year2Week1,
    dayOfWeek: 'Monday',
  });
  const year2Week1Tuesday = server.create('contentDay', {
    contentWeek: year2Week1,
    dayOfWeek: 'Tuesday',
  });

  const historyContent1A = server.create('content', {
    subject: history,
    contentDay: year1Week1Monday,
    notes: 'Leif the Lucky, first half',
  });
  const historyContent1B = server.create('content', {
    subject: history,
    contentDay: year1Week1Tuesday,
    notes: 'Leif the Lucky, second half',
  });
  const historyContent2A = server.create('content', {
    subject: history,
    contentDay: year2Week1Monday,
    notes: 'History Year 2 Content 1',
  });
  const historyContent2B = server.create('content', {
    subject: history,
    contentDay: year2Week1Tuesday,
    notes: 'History Year 2 Content 2',
  });

  const geographyContent1A = server.create('content', {
    subject: geography,
    contentDay: year1Week1Monday,
    notes: 'Home Geography, lessons 1-2',
    sequenceNumber: 1,
  });
  const geographyContent1B = server.create('content', {
    subject: geography,
    contentDay: year1Week1Tuesday,
    notes: 'Home Geography, lessons 3-4',
    sequenceNumber: 2,
  });
  const geographyContent2A = server.create('content', {
    subject: geography,
    contentDay: year2Week1Monday,
    notes: 'Geography Year 2 Content 1',
    sequenceNumber: 1,
  });
  const geographyContent2B = server.create('content', {
    subject: geography,
    contentDay: year1Week1Tuesday,
    notes: 'Geography Year 2 Content 2',
    sequenceNumber: 2,
  });

  const aug31 = server.create('day', { date: new Date(2020, 7, 31, 0, 0, 0) });
  const sep1 = server.create('day', { date: new Date(2020, 8, 1, 0, 0, 0) });

  const mario = server.create('student', { name: 'Mario', contentYear: year2 });
  const luigi = server.create('student', { name: 'Luigi', contentYear: year1 });

  server.create('studentDay', {
    day: aug31,
    student: mario,
    contentDay: year2Week1Monday,
  });
  server.create('studentDay', {
    day: aug31,
    student: luigi,
    contentDay: year1Week1Monday,
  });
  server.create('studentDay', {
    day: sep1,
    student: luigi,
    contentDay: year1Week1Tuesday,
  });

  server.create('scheduling', {
    day: aug31,
    student: mario,
    content: historyContent2A,
    complete: true,
  });
}
/* eslint-enable no-unused-vars */
