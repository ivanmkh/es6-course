// First version: one line. Known weakness: returns 42 for a number city
// and '   ' for a blank one, because both are truthy.
function getCityOneLine(user) {
  return user?.address?.city || 'unknown';
}

// Final version: guard clauses, no else, no nesting.
function getCity(user) {
  const city = user?.address?.city;
  if (typeof city !== 'string') return 'unknown';
  const trimmed = city.trim();
  if (trimmed === '') return 'unknown';
  // return the trimmed value we validated, not the raw input
  return trimmed;
}

console.log(getCity({ address: { city: 'Oslo' } }));   // Oslo
console.log(getCity({ address: { city: '   ' } }));    // unknown
console.log(getCity({ address: { city: 42 } }));       // unknown
console.log(getCity({}));                              // unknown
console.log(getCity(null));                            // unknown