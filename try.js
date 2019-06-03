$(document).ready(function() {
  $('#submittedNumber').click(function() {
    const inputtedNumber = parseInt($('#number').val());
    $('#number').val("");

    function checkNumber(number) {
      if (isNaN(number) || number < 0) {
        return new Error("Not a valid number!");
      } else {
        return true;
      }
    }

    try {
      const isNumberValid = checkNumber(inputtedNumber);
      if (isNumberValid instanceof Error) {
        console.error(isNumberValid.message);
        throw RangeError("Not a valid number!");
      } else {
        console.log("Try was successful, so no need to catch!");
        $('#displayNumber').text("This number is valid. You may continue.")
      }
    } catch(error) {
      console.error(`Red alert! We have an error: ${error.message}`)
      $('#displayNumber').text("This number is not valid. Please enter a positive number.")
    }

    //I tried breaking down the checkNumber function into two separate functions for more transparency but couldn't get it to work.

    // function checkIfNumber(number) {
    //   if (isNaN(number)) {
    //     return new Error("Not a number!");
    //   } else {
    //     return true;
    //   }
    // }
    //
    // function checkIfPositive(number) {
    //   if (number < 0) {
    //     return new Error("Not a positive number!");
    //   } else {
    //     return true;
    //   }
    // }
    //
    // try {
    //   const isItANumber = checkIfNumber(inputtedNumber);
    //   if (isItANumber instanceof Error) {
    //     console.error(isItANumber.message);
    //     throw RangeError("Not a number!");
    //   } else {
    //     console.log("Try was successful, so no need to catch!");
    //     $('#displayNumber').text("This number is valid. You may continue.")
    //   }
    // } catch(error) {
    //   console.error(`Red alert! We have an error: ${error.message}`)
    //   $('#displayNumber').text("This is not a  number. Please enter a positive number.")
    // }
    //
    // try {
    //   const isItAPositiveNumber = checkIfPositive(inputtedNumber);
    //   if (isItAPositiveNumber instanceof Error) {
    //     console.error(isItAPositiveNumber.message);
    //     throw RangeError("Not a positive number!");
    //   } else {
    //     console.log("Try was successful, so no need to catch!");
    //     $('#displayNumber').text("This number is valid. You may continue.")
    //   }
    // } catch(error) {
    //   console.error(`Red alert! We have an error: ${error.message}`)
    //   $('#displayNumber').text("This is not a positive number. Please enter a positive number.")
    // }

  });
});
