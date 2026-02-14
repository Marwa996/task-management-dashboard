import { TaskSeverityPipe } from './task-severity-pipe';

describe('TaskSeverityPipe', () => {
  it('create an instance', () => {
    const pipe = new TaskSeverityPipe();
    expect(pipe).toBeTruthy();
  });
});
