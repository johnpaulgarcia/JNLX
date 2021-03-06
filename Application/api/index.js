var API_URL = 'http://192.168.30.3:3000/v1';

exports.CUST_SIGNUP = `${API_URL}/customersignup`;
exports.CUST_SIGNIN = `${API_URL}/customersignin`;
exports.CUST_ADDRESS = `${API_URL}/updatecustomeraddress`;


// staff signin
exports.STAFF_SIGNIN = `${API_URL}/signin`;

// changepass

exports.CHANGE_PASS = `${API_URL}/changepass`;

// All get data
// get customer data
exports.CUST_INFO = `${API_URL}/getcustomerinfo`;


// get scheduled employees
exports.GET_SCHEDULED = `${API_URL}/getscheduledemployees`;
exports.GET_LATER_SCHEDULED = `${API_URL}/getlaterscheduled`;
exports.GET_NEVER = `${API_URL}/getneveravailable`;

// schedules

exports.CHECK_APPOINTMENT = `${API_URL}/checkappointment`;
exports.SET_APPOINTMENT = `${API_URL}/setappointment`;

// get app

exports.GET_APP = `${API_URL}/getmyapp`;
exports.MY_POS = `${API_URL}/mypos`;



// get cat data
exports.GET_CAT = `${API_URL}/getcat`;


// get service data
exports.GET_SERVICES = `${API_URL}/services`;
exports.GET_STYPE = `${API_URL}/getservicetype`;


// booked
exports.BOOKED = `${API_URL}/mba`;


// cancel
exports.CANCEL = `${API_URL}/cancelorder`;

// update
exports.UPDATE_ORDER = `${API_URL}/updateorder`;



// All update
// update customer info
exports.CUST_UPDATE = `${API_URL}/updatecustomerinfo`;