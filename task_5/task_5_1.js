const startT = performance.now();

function debounce(func, delay) {
  let timerRef;

  return function () {
    clearTimeout(timerRef);
    timerRef = setTimeout(() => {
      func();
      const endT = performance.now();
      console.log(`и сработала за ${Math.floor(endT - startT) / 1000} секунд`);
    }, delay);
  };
}

function inputFunc() {
  console.log("Я медленная функция");
}

const debouncedF = debounce(inputFunc, 2001);

debouncedF();
setTimeout(() => {
  debouncedF();
}, 2000);
