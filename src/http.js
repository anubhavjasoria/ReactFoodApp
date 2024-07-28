// fetchMealItems.js
export async function fetchMealItems() {
  const response = await fetch('http://localhost:3000/meals');
  const resData = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }
  
  console.log(resData);
  return resData;
}
