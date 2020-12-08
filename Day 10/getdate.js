/* Write a javascript prototype method name begetdatebetween() which extends Date prototype, to find the in between date from start and end date */

Date.prototype.addDays = function (day) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + day);
  return date;
};

function begetdatebetween(start_date, end_date) {
  let dateArray = [];
  let currentDate = start_date;
  while (currentDate <= end_date) {
    dateArray.push(new Date(currentDate));
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}

begetdatebetween(new Date(), new Date().addDays(2)).forEach(function (date) {
  console.log(date);
});