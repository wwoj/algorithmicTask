const A = [2, 3, 9, 2, 5, 1, 3, 7, 10];
const B = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];
var C = [];
window.onload = function() {
    var h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.innerText = `Array A: [${C}]`;
    var h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.innerText = `Array B: [${B}]`;
    var h3 = document.createElement("h1");
    document.body.appendChild(h3);
    h3.innerText = `Array C: [${C}]`;

    
   

  };

function primeTest(N) {
  if (N <= 1) {
    return true;
  } else {
    var liczba = 0;
    for (let i = 1; i <= N / 2; i++) {
      if (N % i === 0) {
        liczba++;
      }
      if (liczba >= 2) {
        break;
      }
    }
    if (liczba >= 2) {
      return true;
    }
    return false;
  }
}

function generateCArray(A, B) {
  for (let j = 0; j < A.length; j++) {
    if (checkInC(A[j], j)) {
      if (C.includes(A[j])) {
        C.push(A[j]);
        continue;
      }
    }

    let counts = 0;
    B.forEach((elem) => {
      if (elem === A[j]) {
        counts++;
      }
    });

    if (primeTest(counts)) {
      C.push(A[j]);
    }
  }
}

function checkInC(value, index) {
  for (let i = 0; i < index; i++) {
    if (A[i] === value) {
      return true;
    }
  }
  return false;
}
generateCArray(A, B);
console.log(C);
