export function formatDate(dateString) { 
  return new Date(dateString).toDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).toUpperCase();
}