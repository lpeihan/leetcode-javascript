
function fibonacci(N) {
  const cache = [0, 1];

  function memoise(index) {
    if (cache[index] !== undefined) {
      return cache[index];
    }

    cache[index] = memoise(index - 1) + memoise(index - 2);

    return cache[index];
  }

  return memoise(N);
}

function fibonacci2(N) {
  if (N <= 1) {
    return N;
  }

  return fibonacci2(N - 1) + fibonacci2(N - 2);
}

function fibonacci3(N) {
  const arr = [0, 1];

  for (let i = 2; i <= N; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[N];
}

function fibonacci4(N) {
  let prev = 0;
  let current = 1;
  let sum = 0;

  for (let i = 2; i <= N; i++) {
    sum = prev + current;
    prev = current;
    current = sum;
  }

  return sum;
}
console.log(fibonacci4(5))
