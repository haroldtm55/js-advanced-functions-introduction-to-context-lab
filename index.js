// Your code here
function createEmployeeRecord(array) {
  const keys = ['firstName','familyName', 'title', 'payPerHour']
  const employeeData = {}
  for (let i = 0; i <= array.length -1; i++) {
    employeeData[keys[i]] = array[i]
  }
  employeeData['timeInEvents'] = []
  employeeData['timeOutEvents'] = []
  return employeeData
}
function createEmployeeRecords(arrays) {
  let arrayOfArrays = []
  for (let i = 0; i<=arrays.length -1; i++) {
    arrayOfArrays = [...arrayOfArrays,createEmployeeRecord(arrays[i])]
  }
  return arrayOfArrays
}
function createTimeInEvent(employeeRecord,timeIn) {
  const timeInObj = {}
  timeInObj['type'] = 'TimeIn'
  let date = ''
  let hour = ''
  for (let i = 0; i<=timeIn.length-1; i++) {
    if (i<=9) {
      date = date + timeIn.charAt(i)
    }
    else if (i>=11) {
      hour = hour + timeIn.charAt(i)
    }
  }
  timeInObj['date'] = date
  timeInObj['hour'] = parseInt(hour)
  let employeeRecordCopy = employeeRecord
  employeeRecordCopy.timeInEvents.push(timeInObj)
  return employeeRecordCopy
}
function createTimeOutEvent(employeeRecord,timeOut) {
  const timeOutObj = {}
  timeOutObj['type'] = 'TimeOut'
  let date = ''
  let hour = ''
  for (let i = 0; i<=timeOut.length-1; i++) {
    if (i<=9) {
      date = date + timeOut.charAt(i)
    }
    else if (i>=11) {
      hour = hour + timeOut.charAt(i)
    }
  }
  timeOutObj['date'] = date
  timeOutObj['hour'] = parseInt(hour)
  let employeeRecordCopy = employeeRecord
  employeeRecordCopy.timeOutEvents.push(timeOutObj)
  return employeeRecordCopy
}
function hoursWorkedOnDate(employeeRecord, date) {
  if (employeeRecord.timeInEvents[0].date === date && employeeRecord.timeOutEvents[0].date === date) {
    return (employeeRecord.timeOutEvents[0].hour - employeeRecord.timeInEvents[0].hour)/100
  }
}
function wagesEarnedOnDate(employeeRecord,date) {
  return hoursWorkedOnDate(employeeRecord,date) * employeeRecord.payPerHour
}
function allWagesFor(employeeRecord) {
  let totalHours = 0
  for (let i = 0; i<= employeeRecord.timeInEvents.length-1; i++) {
    totalHours = totalHours + (employeeRecord.timeOutEvents[i].hour - employeeRecord.timeInEvents[i].hour)
  }
  return (totalHours * employeeRecord.payPerHour)/100
}

function calculatePayroll(arrayOfemployeeRecords) {
  let grandTotalOwed = arrayOfemployeeRecords.reduce((acc,curr)=>acc+allWagesFor(curr),0)
  return grandTotalOwed
}

function findEmployeeByFirstName(employees,nameToLookUp) {
  return employees.find(employee=> employee.firstName === nameToLookUp)
}




// const employeeRecord = {
//   timeInEvents: [{
//     date: '2020-12-20',
//     hour: 400
//   }],
//   timeOutEvents: [{
//     date: '2020-12-20',
//     hour: 800
//   }]
// }

// const object = {
//   firstName: "Julius", 
//   familyName: "Caesar", 
//   title: "General", 
//   payPerHour: 27, 
//   timeInEvents:[
//     {type: "TimeIn", date: "0044-03-15", hour: 900},
//     {type: "TimeIn", date: "0044-03-15", hour: 900}],
//     timeOutEvents: [
//       {type: "TimeOut", date: "0044-03-14", hour: 2100}, 
//       {type: "TimeOut", date: "0044-03-15", hour: 1100}]
//     }