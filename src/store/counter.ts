import { observable, computed, action } from 'mobx';

class Counter {
    @observable count = 0;
    @observable interval;
}

let c = new Counter();

c.interval = setInterval( () => c.count++, 1000);

(window as any).counter = c;

export default c;