class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      month: document.querySelector(`${this.selector} [data-value = month]`),
      days: document.querySelector(`${this.selector} [data-value = days]`),
      hours: document.querySelector(`${this.selector} [data-value = hours]`),
      mins: document.querySelector(`${this.selector} [data-value = mins]`),
      secs: document.querySelector(`${this.selector} [data-value = secs]`)
    };
    this.start();
  }

  calculateTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.changeElems(days, hours, mins, secs);
  }

  changeElems(days, hours, mins, secs) {
    this.refs.days.innerHTML = days;
    this.refs.hours.innerHTML = hours;
    this.refs.mins.innerHTML = mins;
    this.refs.secs.innerHTML = secs;
  }

  changeDate() {
    const time = this.targetDate.getTime() - new Date().getTime();
    this.calculateTime(time);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  start() {
    this.changeDate();
    setInterval(() => {
      this.changeDate();
    }, 1000);
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2020")
});
