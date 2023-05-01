export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) =>
      formatter.format(new Date(Date.UTC(new Date().getFullYear(), 7, day))),
    )
    .map((weekDay) => {
      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
    })
}
