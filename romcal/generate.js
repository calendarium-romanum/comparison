const romcal = require('romcal');

// calendarFor() with no arguments should generate
// General Roman Calendar for the current year
const calendar = romcal.calendarFor({
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
  (date) => (1 + date.getMonth()) + '/' + date.getDate();

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
