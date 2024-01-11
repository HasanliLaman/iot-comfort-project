export const getLast24Hours = () => {
  const hours = [...Array(24).keys()];
  const currentHour = new Date().getHours();

  const last24Hours = [
    ...hours.slice(hours.indexOf(currentHour) + 1),
    ...hours.slice(0, hours.indexOf(currentHour) + 1),
  ];

  const last24HoursFormatted = last24Hours.map(
    (el) => `${`${el}`.padStart(2, "0")}:00`
  );

  return last24HoursFormatted;
};
