// debounce: delays a function call
export function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

// truncate: shortens long text
export function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + "…" : str;
}
