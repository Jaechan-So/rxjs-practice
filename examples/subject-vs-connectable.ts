import { connectable, filter, from, map, of, Subject } from 'rxjs';

const doWithSubject = () => {
  const subject = new Subject();

  subject.subscribe((n) => console.log(`Observer A: ${n}`));
  subject.subscribe((n) => console.log(`Observer B: ${n}`));
  subject.subscribe((n) => console.log(`Observer C: ${n}`));
  subject
    .pipe(
      filter((value: number) => value % 2 === 0),
      map((value: number) => (value + 1) * 2),
    )
    .subscribe((n) => console.log(`Observer D: ${n}`));

  of(1, 2, 3).subscribe(subject);
};

const doWithConnectable = () => {
  const multicasted = connectable(of(1, 2, 3)); // multicast will be deprecated since rxjs v8

  multicasted.subscribe((n) => console.log(`Observer A: ${n}`));
  multicasted.subscribe((n) => console.log(`Observer B: ${n}`));
  multicasted.subscribe((n) => console.log(`Observer C: ${n}`));
  multicasted
    .pipe(
      filter((value: number) => value % 2 === 0),
      map((value: number) => (value + 1) * 2),
    )
    .subscribe((n) => console.log(`Observer D: ${n}`));

  multicasted.connect();
};

doWithSubject();
console.log('----------');
doWithConnectable();
