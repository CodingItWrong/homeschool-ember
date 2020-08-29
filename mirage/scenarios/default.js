// eslint-disable-next-line import/no-anonymous-default-export
export default function (server) {
  const year1 = server.create('contentYear', { name: 'Year 1' });
  const year2 = server.create('contentYear', { name: 'Year 2' });

  const mario = server.create('student', { name: 'Mario', contentYear: year2 });
  const luigi = server.create('student', { name: 'Luigi', contentYear: year1 });

  const history = server.create('subject', { name: 'History' });
  const geography = server.create('subject', { name: 'Geography' });

  const historyContent1A = server.create('content', {
    subject: history,
    contentYear: year1,
    notes: 'Leif the Lucky, first half',
    sequenceNumber: 1,
  });
  const historyContent1B = server.create('content', {
    subject: history,
    contentYear: year1,
    notes: 'Leif the Lucky, second half',
    sequenceNumber: 2,
  });
  const historyContent2A = server.create('content', {
    subject: history,
    contentYear: year2,
    notes: 'Year 2 history day 1',
    sequenceNumber: 1,
  });
  const historyContent2B = server.create('content', {
    subject: history,
    contentYear: year2,
    notes: 'Year 2 history day 2',
    sequenceNumber: 2,
  });

  const geographyContent1A = server.create('content', {
    subject: geography,
    contentYear: year1,
    notes: 'Home Geography, lessons 1-2',
    sequenceNumber: 1,
  });
  const geographyContent1B = server.create('content', {
    subject: geography,
    contentYear: year1,
    notes: 'Home Geography, lessons 3-4',
    sequenceNumber: 2,
  });
  const geographyContent2A = server.create('content', {
    subject: geography,
    contentYear: year2,
    notes: 'Year 2 geography day 1',
    sequenceNumber: 1,
  });
  const geographyContent2B = server.create('content', {
    subject: geography,
    contentYear: year2,
    notes: 'Year 2 geography day 2',
    sequenceNumber: 2,
  });

  const aug31 = server.create('day', { date: new Date(2020, 7, 31, 0, 0, 0) });
  const sep1 = server.create('day', { date: new Date(2020, 8, 1, 0, 0, 0) });

  server.create('scheduling', {
    day: aug31,
    student: luigi,
    content: historyContent1A,
    complete: false,
  });
  server.create('scheduling', {
    day: aug31,
    student: mario,
    content: historyContent2A,
    complete: true,
  });
  server.create('scheduling', {
    day: aug31,
    student: luigi,
    content: geographyContent1A,
    complete: true,
  });
  server.create('scheduling', {
    day: aug31,
    student: mario,
    content: geographyContent2A,
    complete: false,
  });
  server.create('scheduling', {
    day: sep1,
    student: luigi,
    content: historyContent1B,
    complete: false,
  });
  server.create('scheduling', {
    day: sep1,
    student: mario,
    content: historyContent2B,
    complete: false,
  });
  server.create('scheduling', {
    day: sep1,
    student: luigi,
    content: geographyContent1B,
    complete: false,
  });
  server.create('scheduling', {
    day: sep1,
    student: mario,
    content: geographyContent2B,
    complete: false,
  });
}
