import { of, Subject } from 'rxjs';

const doWithObservable = () => {
  const observable = of(1, 2, 3);

  observable.subscribe((n) => console.log(`Observer A: ${n}`));
  observable.subscribe((n) => console.log(`Observer B: ${n}`));
  observable.subscribe((n) => console.log(`Observer C: ${n}`));
};

const doWithSubject = () => {
  const subject = new Subject();

  subject.subscribe((n) => console.log(`Observer A: ${n}`));
  subject.subscribe((n) => console.log(`Observer B: ${n}`));
  subject.subscribe((n) => console.log(`Observer C: ${n}`));

  of(1, 2, 3).subscribe(subject);
};

const doWithSubscriptionUnsubscribe = () => {
  const subject = new Subject();

  const subscriptionA = subject.subscribe((n) =>
    console.log(`Observer A: ${n}`),
  );
  subject.subscribe((n) => console.log(`Observer B: ${n}`));
  subject.subscribe((n) => console.log(`Observer C: ${n}`));

  subscriptionA.unsubscribe();
  of(1, 2, 3).subscribe(subject);
};

doWithObservable();
console.log('----------');
doWithSubject();
console.log('----------');
doWithSubscriptionUnsubscribe();
