if (true) {
  console.log(`yes it's true`);
}
if (false) {
  console.log(`it's false`);
}

const d = new Date(2025, 5, 16, 2);
const hour = d.getHours();
const month = d.getMonth();

if (hour < 12) {
  console.log('Good Morning');

  if (hour === 7) {
    console.log('get up');
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

switch (month) {
  case 1:
    console.log(`it is January`);
    break;
  case 2:
    console.log(`it is February`);
    break;
  case 3:
    console.log(`it is March`);
    break;
  case 4:
    console.log(`it is April`);
    break;
  default:
    console.log(`it is not jan, feb, mar, aprl`);
}

switch (true) {
  case hour < 12:
    console.log(`Lovely Morning`);
    break;
  case hour < 15:
    console.log(`Sunny Day`);
    break;
  case hour <= 18:
    console.log(`chilling Evening`);
    break;
  case hour > 18:
    console.log(`Good Night`);
  default:
    console.log(`Good Night`);
}
