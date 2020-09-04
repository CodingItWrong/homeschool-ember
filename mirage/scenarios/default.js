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

  const week1Monday = server.create('contentDay', {
    contentWeek: year1Week1,
    dayOfWeek: 'Monday',
  });
  const week1Tuesday = server.create('contentDay', {
    contentWeek: year1Week1,
    dayOfWeek: 'Tuesday',
  });
  const week1Wednesday = server.create('contentDay', {
    contentWeek: year1Week1,
    dayOfWeek: 'Wednesday',
  });
  const week1Thursday = server.create('contentDay', {
    contentWeek: year1Week1,
    dayOfWeek: 'Thursday',
  });
  const week1Friday = server.create('contentDay', {
    contentWeek: year1Week1,
    dayOfWeek: 'Friday',
  });

  const historyContent1 = server.create('content', {
    subject: history,
    contentDay: week1Monday,
    notes: 'Leif the Lucky, first half',
  });
  const historyContent2 = server.create('content', {
    subject: history,
    contentDay: week1Tuesday,
    notes: 'Leif the Lucky, second half',
  });

  const geographyContent1 = server.create('content', {
    subject: geography,
    contentDay: week1Monday,
    notes: 'Home Geography, lessons 1-2',
    sequenceNumber: 1,
  });
  const geographyContent2 = server.create('content', {
    subject: geography,
    contentDay: week1Tuesday,
    notes: 'Home Geography, lessons 3-4',
    sequenceNumber: 2,
  });

  const aug31 = server.create('day', { date: new Date(2020, 7, 31, 0, 0, 0) });
  const sep1 = server.create('day', { date: new Date(2020, 8, 1, 0, 0, 0) });

  const mario = server.create('student', { name: 'Mario', contentYear: year2 });
  const luigi = server.create('student', { name: 'Luigi', contentYear: year1 });

  server.create('studentDay', {
    day: aug31,
    student: mario,
    contentDay: week1Monday,
  });
  server.create('studentDay', {
    day: sep1,
    student: mario,
    contentDay: week1Tuesday,
  });

  server.create('scheduling', {
    day: aug31,
    student: mario,
    content: historyContent1,
    complete: true,
  });
}
/* eslint-enable no-unused-vars */
