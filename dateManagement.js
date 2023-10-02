export function getAvailableDatesFromDashboard(collection) {
  const isPeriodic = collection["dashboard:is_periodic"];
  const timeDensity = collection["dashboard:time_density"];
  const summaries = collection.summaries.datetime;

  if (!isPeriodic || !summaries) {
    return summaries || null;
  }

  const startDate = new Date(summaries[0]);
  const endDate = new Date(summaries[summaries.length - 1]);

  const availableDates = [];

  if (isPeriodic) {
    if (timeDensity === "day") {
      const currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        availableDates.push(currentDate.toISOString());
        currentDate.setDate(currentDate.getDate() + 1);
      }
    } else if (timeDensity === "month") {
      const currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        availableDates.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString());
        currentDate.setMonth(currentDate.getMonth() + 1);
      }
    } else if (timeDensity === "year") {
      const currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        availableDates.push(currentDate.toISOString());
        currentDate.setFullYear(currentDate.getFullYear() + 1);
      }
    }
  }
  return availableDates.map(date => date.slice(0, 19) + 'Z')
  // console.log(availableDates);
}

export function formatDateToYYYYMMDD(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
}
