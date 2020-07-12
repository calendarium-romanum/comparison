const romcal = require('romcal');

// calendarFor() with no arguments should generate
// General Roman Calendar for the current year
const calendar = romcal.calendarFor({
  year: 2019, // TODO: don't hardcode
  type: 'liturgical', // liturgical, not civil year
});

const rankMap = {
  SOLEMNITY: 'solemnity',
  SUNDAY: 'sunday',
  TRIDUUM: 'solemnity',
  HOLY_WEEK: 'solemnity',
  FEAST: 'feast',
  MEMORIAL: 'memorial',
  OPT_MEMORIAL: 'optional memorial',
  COMMEMORATION: 'commemoration',
  FERIA: 'ferial',
};

const dateFormat =
  (date) =>
    date.getFullYear() +
      '-' +
      (1 + date.getMonth()).toString().padStart(2, '0') +
      '-' +
      date.getDate().toString().padStart(2, '0');

calendar.forEach((day) => {
  const date = new Date(day['moment']);
  day['name'].split('/').forEach((name) =>
    console.log(
      dateFormat(date) +
        ' ' +
        name +
        ', ' +
        rankMap[day['type']]
    )
  );
});
