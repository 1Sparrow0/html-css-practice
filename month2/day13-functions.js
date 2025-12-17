// Simple Function

function sayHello(name = "Guest") {
  return `Hello Dear ${name}, Welcome!`;
}

console.log(sayHello("Mehran"));

// BMI Calculator

function calculateBMI(weight, height) {
  const bmi = weight / (height + height);
  return bmi.toFixed(2);
}

console.log("BMI: ", calculateBMI(100, 1.86));

// BMI calculator With IF

function getBMIStatus(bmi) {
  if (bmi < 18.5) {
    return "Lether Weight";
  } else if (bmi < 25) {
    return "Normal Weight";
  } else if (bmi < 30) {
    return "Over Weight";
  } else {
    return "Chubby!";
  }
}

const bmiValue = calculateBMI(110, 1.85);
console.log("BMI Status: ", getBMIStatus(bmiValue));

// Convert score to string with Switch

function gradeToLetter(grade) {
  switch (true) {
    case grade >= 90:
      return "A";
      break;
    case grade >= 80:
      return "B";
      break;
    case grade >= 70:
      return "C";
      break;
    case grade >= 60:
      return "D";
      break;
    default:
      return "F";
      break;
  }
}

console.log("Score 85:", gradeToLetter(85));

// Driving licence Verification with Arrow Fucntion

const canDrive = (age) => (age >= 18 ? "NO, Not Yet!" : "Yes Can Drive!");

console.log(canDrive(16));
console.log(canDrive(24));

// Odd Number

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
}

console.log("Is 11 Odd number? ", isPrime(11));
console.log("Is 12 Odd number? ", isPrime(12));
