import {
  asapScheduler,
  asyncScheduler,
  observeOn,
  queueScheduler,
  range,
} from 'rxjs';

const asyncSchedulerExample = () => {
  const observable = range(1, 5).pipe(observeOn(asyncScheduler, 5000));

  console.log('just before subscribe');
  observable.subscribe((n) => console.log(`got value ${n}`));
  console.log('just after subscribe');
};

const asapSchedulerExample = () => {
  const observable = range(1, 5).pipe(observeOn(asapScheduler));

  console.log('just before subscribe');
  observable.subscribe((n) => console.log(`got value ${n}`));
  console.log('just after subscribe');
};

const queueSchedulerExample = () => {
  const observable = range(1, 5).pipe(observeOn(queueScheduler));

  console.log('just before subscribe');
  observable.subscribe((n) => console.log(`got value ${n}`));
  console.log('just after subscribe');
};

asyncSchedulerExample();
console.log('----------');
asapSchedulerExample();
