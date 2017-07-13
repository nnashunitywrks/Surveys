// Create a sample of n integers using https://www.random.org/integers/
var sequence = [5471, 2381, 6886, 5878, 3580, 2972, 6422, 7689, 6604, 3105, 6533, 3812, 7428, 2927, 4166, 3266, 1111, 8596, 1058, 9023];
var surveyCode = sequence[Math.floor(Math.random() * sequence.length)];
var postMessage = "Survey Code:" + surveyCode;

//Echo out code to an element with the ID of surveyCode
$("#surveyCode").html(postMessage);
