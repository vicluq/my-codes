function temporizer(future) {
  const futureDate = new Date(
    future.year ? future.year : 0,
    future.month ? future.month : 0,
    future.day ? future.day : 0,
    future.hours ? future.hours : 0,
    future.minutes ? future.minutes : 0,
    future.seconds ? future.seconds : 0
  );
  if (futureDate.getTime() - new Date().getTime() > 0) {
    const futureHours = futureDate.getHours();
    const futureMinutes = futureDate.getMinutes();
    const futureSeconds = futureDate.getSeconds();

    const timer = setInterval(() => {
      const dateNow = new Date();

      let hoursLeft = futureHours - dateNow.getHours();

      let minsLeft =
        futureMinutes - dateNow.getMinutes() >= 0
          ? futureMinutes - dateNow.getMinutes()
          : 60 + (futureMinutes - dateNow.getMinutes());

      const secondsLeft =
        futureSeconds - dateNow.getSeconds() >= 0
          ? futureSeconds - dateNow.getSeconds()
          : 60 + (futureSeconds - dateNow.getSeconds());

      if (futureMinutes - dateNow.getMinutes() <= 0) hoursLeft -= 1;
      if (futureSeconds - dateNow.getSeconds() <= 0) minsLeft -= 1;

      if (hoursLeft < 0 && minsLeft < 0 && secondsLeft === 0) {
        clearInterval(timer);
        $(this).html("Done! 🕒");
      } else {
        $(this).html(
          `<span class="digito">${
            hoursLeft < 10 ? "0" + hoursLeft : hoursLeft
          }</span><span class="separador">:</span><span class="digito">${
            minsLeft < 10 ? "0" + minsLeft : minsLeft
          }</span><span class="separador">:</span><span class="digito">${
            secondsLeft < 10 ? "0" + secondsLeft : secondsLeft
          }</span>`
        );
      }
    }, 1000);
  } else {
    $(this).html('<span class="warning">Invalid Time ⚠</span>');
  }
  return this;
}

// $.fn.temporizer = temporizer;

const plus25 = new Date().getTime() + 120 * 60 * 1000;

setInterval(() => {
  const dateNow = new Date().getTime();
  const difference = new Date(plus25 - dateNow);
  console.log(
    new Date(difference).toLocaleTimeString("pt-BR", { timeZone: "GMT" })
  );
}, 1000);
