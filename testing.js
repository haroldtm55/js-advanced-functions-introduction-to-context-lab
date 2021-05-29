/ Your code here
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
    // arrayOfArrays.push(createEmployeeRecord(arrays[i]))
    arrayOfArrays = [...arrayOfArrays,createEmployeeRecord(arrays[i])]
  }
  return arrayOfArrays
}

function createTimeInEvent(array,timeIn) {
  const employeeRecord = createEmployeeRecord(array)
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

  employeeRecord.timeInEvents = [...employeeRecord.timeInEvents, timeInObj]
  return employeeRecord
}

function createTimeOutEvent(employeeRecord,timeOut) {
  // let employeeRecordCopy = []
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