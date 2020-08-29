/*
const SUBJECTS = [
  'History',
  'Geography',
  'Literature',
  'Natural History',
  'Modern Language',
  'Math',
  'Music',
  'Language Arts',
];
*/

export default function (server) {
  const history = server.create('subject', { name: 'History' });
  const geography = server.create('subject', { name: 'Geography' });

  const historyContent1 = server.create('content', {
    subject: history,
    notes: 'Leif the Lucky, first half',
    sequenceNumber: 1,
  });
  const historyContent2 = server.create('content', {
    subject: history,
    notes: 'Leif the Lucky, second half',
    sequenceNumber: 2,
  });

  const geographyContent1 = server.create('content', {
    subject: geography,
    notes: 'Home Geography, lessons 1-2',
    sequenceNumber: 1,
  });
  const geographyContent2 = server.create('content', {
    subject: geography,
    notes: 'Home Geography, lessons 3-4',
    sequenceNumber: 2,
  });

  const aug31 = server.create('day', { date: new Date(2020, 7, 31, 0, 0, 0) });
  const sep1 = server.create('day', { date: new Date(2020, 8, 1, 0, 0, 0) });

  server.create('scheduling', {
    day: aug31,
    content: historyContent1,
  });
  server.create('scheduling', {
    day: aug31,
    content: geographyContent1,
  });
  server.create('scheduling', {
    day: sep1,
    content: historyContent2,
  });
  server.create('scheduling', {
    day: sep1,
    content: geographyContent2,
  });
}
