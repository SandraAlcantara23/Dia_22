function binarySearch() {
  const numbersInput = document.getElementById('numbers').value;
  const targetInput = parseInt(document.getElementById('target').value);
  const numbers = numbersInput.split(',').map(num => parseInt(num.trim()));
  const result = performBinarySearch(numbers, targetInput);
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Resultado: ${result}`;
}
function performBinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
          return `esta en la posicion ${mid}`;
      } else if (arr[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return 'No encontrado';
}



  