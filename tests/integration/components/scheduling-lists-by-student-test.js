import { setupRenderingTest } from 'ember-qunit';
import { schedulingsGroupedByStudent } from 'homeschool/components/scheduling-lists-by-student';
import { module as describe, test as it } from 'qunit';

describe('Integration | Component | scheduling-lists-by-student', function (hooks) {
  setupRenderingTest(hooks);

  const mario = { id: 1, name: 'Mario' };
  const luigi = { id: 2, name: 'Luigi' };
  const peach = { id: 3, name: 'Peach' };
  const content1 = { id: 1 };
  const content2 = { id: 2 };
  const content3 = { id: 3 };
  const content4 = { id: 4 };

  it('shows contents for one student', function (assert) {
    const day = {
      studentDays: [
        {
          student: mario,
          contentDay: {
            contents: [content1, content2],
          },
        },
      ],
      schedulings: [
        {
          student: mario,
          content: content1,
          complete: true,
        },
      ],
    };

    const result = schedulingsGroupedByStudent(day);

    assert.equal(result.length, 1);
    assert.deepEqual(result[0].student, mario);
    assert.deepEqual(result[0].studentDay, {
      student: mario,
      contentDay: {
        contents: [content1, content2],
      },
    });
    assert.deepEqual(result[0].contentSchedulingPairs, [
      {
        content: content1,
        scheduling: {
          student: mario,
          content: content1,
          complete: true,
        },
      },
      {
        content: content2,
        scheduling: null,
      },
    ]);
  });

  it('shows contents for two students', function (assert) {
    const day = {
      studentDays: [
        {
          student: mario,
          contentDay: {
            contents: [content1, content2],
          },
        },
        {
          student: luigi,
          contentDay: {
            contents: [content3, content4],
          },
        },
      ],
      schedulings: [
        {
          student: mario,
          content: content1,
          complete: true,
        },
        {
          student: luigi,
          content: content4,
          complete: true,
        },
      ],
    };

    const result = schedulingsGroupedByStudent(day);

    assert.equal(result.length, 2);

    assert.deepEqual(result[0].student, luigi);
    assert.deepEqual(result[0].studentDay, {
      student: luigi,
      contentDay: {
        contents: [content3, content4],
      },
    });
    assert.deepEqual(result[0].contentSchedulingPairs, [
      {
        content: content4,
        scheduling: {
          student: luigi,
          content: content4,
          complete: true,
        },
      },
      {
        content: content3,
        scheduling: null,
      },
    ]);

    assert.deepEqual(result[1].student, mario);
    assert.deepEqual(result[1].studentDay, {
      student: mario,
      contentDay: {
        contents: [content1, content2],
      },
    });
    assert.deepEqual(result[1].contentSchedulingPairs, [
      {
        content: content1,
        scheduling: {
          student: mario,
          content: content1,
          complete: true,
        },
      },
      {
        content: content2,
        scheduling: null,
      },
    ]);
  });

  it('shows contents for a student with no studentDay', function (assert) {
    const day = {
      studentDays: [],
      schedulings: [
        {
          student: peach,
          content: content1,
          complete: true,
        },
        {
          student: peach,
          content: content2,
          complete: false,
        },
      ],
    };

    const result = schedulingsGroupedByStudent(day);

    assert.equal(result.length, 1);

    assert.deepEqual(result[0].student, peach);
    assert.equal(result[0].studentDay, null);
    assert.deepEqual(result[0].contentSchedulingPairs, [
      {
        content: content1,
        scheduling: {
          student: peach,
          content: content1,
          complete: true,
        },
      },
      {
        content: content2,
        scheduling: {
          student: peach,
          content: content2,
          complete: false,
        },
      },
    ]);
  });
});
