let currentState = welcoming;

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput() {
  currentState = welcoming;
}

function welcoming() {
  currentState = choosing;
  return ["Welcome to Polished Nail Studio!"];
}

function choosing(sInput) {
  const input = sInput.toLowerCase();

  if (input.includes("classic")) {
    currentState = upselling;
    return ["Great choice! A Classic Manicure is $32 and takes about 30 minutes."];
  } 
  else if (input.includes("gel")) {
    currentState = upselling;
    return ["Excellent! A Gel Manicure is $48 and lasts 2-3 weeks chip-free."];
  } 
  else {
    return ["Sorry, I didn't catch that! Please choose either Classic Manicure or Gel Manicure."];
  }
}

function upselling(sInput) {
  currentState = welcoming;

  if (sInput.toLowerCase().startsWith("y")) {
    return ["Amazing! Nail art added to your booking."];
  } 
  else {
    return ["No problem! Your appointment is confirmed at Polished Nail Studio, 456 Glamour Ave, Burlington."];
  }
}