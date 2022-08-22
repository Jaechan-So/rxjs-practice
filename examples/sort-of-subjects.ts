import { AsyncSubject, BehaviorSubject, ReplaySubject } from 'rxjs';

const behaviorSubjectExample = () => {
  const subject = new BehaviorSubject(0);

  subject.subscribe((v) => console.log(`observerA: ${v}`));

  subject.next(1);
  subject.next(2);

  subject.subscribe((v) => console.log(`observerB: ${v}`));

  subject.next(3);
};

const replaySubjectExample = () => {
  const subject = new ReplaySubject(3);

  subject.subscribe((v) => console.log(`observerA: ${v}`));

  subject.next(1);
  subject.next(2);
  subject.next(3);
  subject.next(4);

  subject.subscribe((v) => console.log(`observerB: ${v}`));

  subject.next(5);
};

const asyncSubjectExample = () => {
  const subject = new AsyncSubject();

  subject.subscribe((v) => console.log(`observerA: ${v}`));

  subject.next(1);
  subject.next(2);
  subject.next(3);
  subject.next(4);

  subject.subscribe((v) => console.log(`observerB: ${v}`));

  subject.next(5);
  subject.complete();
};

behaviorSubjectExample();
console.log('----------');
replaySubjectExample();
console.log('----------');
asyncSubjectExample();
