import { setupRenderingTest } from 'ember-qunit';
import { schedulingsGroupedByStudent } from 'homeschool/components/scheduling-lists-by-student';
import { module as describe, test as it } from 'qunit';

describe('Integration | Component | scheduling-lists-by-student', function (hooks) {
  setupRenderingTest(hooks);

  it('shows contents for one student', function (assert) {
    const mario = {
      id: 1,
      name: 'Mario',
    };
    const content1 = { id: 1 };
    const content2 = { id: 2 };

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
});
