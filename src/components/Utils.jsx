export function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00'); // Add time to ensure it's interpreted as local time
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC' // Interpret the date as UTC
    });
  }