export default function DateAndTime({ date, dateClass }) {
  const localDate = new Date(date).toLocaleDateString(
    'en-US'
  );
  const localTime = new Date(date).toLocaleTimeString(
    'en-US'
  );

  return (
    <p className={dateClass ? dateClass : ''}>
      {localDate && localDate}&nbsp;at&nbsp;
      {localTime && localTime}
    </p>
  );
}
