//Create the employee records
function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

let createEmployeeRecords = function (employeeArrayData) {
  return employeeArrayData.map(function (employeeData) {
    return createEmployeeRecord(employeeData);
  });
};

//Creating time events
let createTimeInEvent = function (employee, dateStamp) {
  let [date, hour] = dateStamp.split("");
  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  });
  return employee;
};

let createTimeOutEvent = function (employee, dateStamp) {
  let [date, hour] = dateStamp.split("");
  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  });
};

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
