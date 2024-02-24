function toggleMenu() {
    var menu = document.querySelector('menu');
    menu.style.right = (menu.style.right === '0px' || menu.style.right === '') ? '-400px' : '0';
}



// let currentQuestion = 1;

function initializeSelectedOptions() {
    const selectedOptions = localStorage.getItem('selectedOptions');
    if (selectedOptions) {
        const selectedOptionIds = selectedOptions.split(',');
        selectedOptionIds.forEach((optionId) => {
            const option = document.getElementById(optionId);
            if (option) {
                option.classList.add('selected');
                showCheckMark(option);
            }
        });
    }
}

// Function to save selected options to localStorage
function saveSelectedOptions() {
    const options = document.querySelectorAll('.option.selected');
    const selectedOptionIds = Array.from(options).map((option) => option.id);
    localStorage.setItem('selectedOptions', selectedOptionIds.join(','));
}

function selectOption(option) {
    const optionId = option.id;

    // Check if the clicked option is a redirect option
    const isRedirectOption = option.classList.contains('redirect-option');

    if (isRedirectOption) {
        // Get the target page URL from the data-target-page attribute
        const targetPage = option.getAttribute('data-target-page');

        // Redirect to the target page after a 1-second delay
        setTimeout(() => {
            window.location.href = targetPage;
        }, 1000);
    } else {
        // Rest of the logic for non-redirect options
        const isNoneOfAbove = option.classList.contains('none-of-above');

        if (isNoneOfAbove) {
            // Deselect all other options
            const options = document.querySelectorAll('.option');
            options.forEach((opt) => {
                opt.classList.remove('selected');
                hideCheckMark(opt);
            });

            // Select the "None of the Above" option and show its check mark
            option.classList.add('selected');
            showCheckMark(option);
        } else {
            // If not "None of the Above," toggle the selection of the clicked option
            option.classList.toggle('selected');

            // If the clicked option is selected, show its check mark; otherwise, hide it
            if (option.classList.contains('selected')) {
                showCheckMark(option);
            } else {
                hideCheckMark(option);
            }

            // If the clicked option is selected, deselect "None of the Above"
            const noneOfAboveOption = document.querySelector('.none-of-above');
            noneOfAboveOption.classList.remove('selected');
            hideCheckMark(noneOfAboveOption);
        }

        // Save selected options to localStorage
        saveSelectedOptions();
    }
}

// Function to show check mark
function showCheckMark(option) {
    const checkMark = option.querySelector('.check_i');
    if (checkMark) {
        checkMark.style.display = 'block';
    }
}

function hideCheckMark(option) {
    const checkMark = option.querySelector('.check_i');
    if (checkMark) {
        checkMark.style.display = 'none';
    }
}


// const inputField = document.querySelector('.input-field');
// const inputElement = document.getElementById('input1');
// const labelElement = document.querySelector('.label');
// const unitsElement = document.querySelector('.units');

// function updateColors() {
//   if (inputElement.value === '') { // Check if input value is empty
//     inputField.classList.add('invalid'); // Add 'invalid' class to change color
//   } else {
//     inputField.classList.remove('invalid'); // Remove 'invalid' class if not empty
//   }
// }

// // Event listener for input change
// inputElement.addEventListener('input', updateColors);

// // Initial check to set default white color (optional)
// inputField.classList.remove('invalid');
function checkInputColor() {
    var inputField = document.getElementById("input1");
    var label = document.querySelector('.label');
    var units = document.querySelector('.units');
    var warnMessage = document.querySelector('.warn');
    var warnMessage2 = document.querySelector('.warn2');
    var warnMessage3 = document.querySelector('.warn3');

    // Manually check and restrict the input within the specified range
    var inputValue = parseInt(inputField.value, 10);

    // Reset all warning messages
    warnMessage.style.display = 'none';
    warnMessage2.style.display = 'none';
    warnMessage3.style.display = 'none';

    if (inputField.value === "") {
      // Input is empty, show general warning message
      inputField.style.border = "1px solid red";
      label.classList.add('red');
      units.classList.add('red');
      warnMessage.style.display = 'block';
    } else if (inputValue < 14) {
      // Input is less than 14, show specific warning message
      inputField.style.border = "1px solid red";
      label.classList.add('red');
      units.classList.add('red');
      warnMessage2.style.display = 'block';
    } else if (inputValue > 99) {
      // Input is greater than 99, show specific warning message
      inputField.style.border = "1px solid red";
      label.classList.add('red');
      units.classList.add('red');
      warnMessage3.style.display = 'block';
    } else {
      // Input is valid, change border color to default (white), reset text color
      inputField.style.border = "1px solid white";
      label.classList.remove('red');
      units.classList.remove('red');
    }
  }

  function checkHeightInputColor() {
    var inputField = document.getElementById("input2");
    var label = inputField.parentElement.querySelector('.label');
    var units = inputField.parentElement.querySelector('.units');
    var warnMessage4 = inputField.parentElement.querySelector('.warn4');
    var warnMessage5 = inputField.parentElement.querySelector('.warn5');

    // Reset all warning messages
    warnMessage4.style.display = 'none';
    warnMessage5.style.display = 'none';

    if (inputField.value === "") {
      // Input is empty, show general warning message
      inputField.style.border = "1px solid red";
      label.classList.add('red');
      units.classList.add('red');
      warnMessage4.style.display = 'block';
    } else if (inputField.value < 4) {
      // Input is less than 4, show specific warning message
      inputField.style.border = "1px solid red";
      label.classList.add('red');
      units.classList.add('red');
      warnMessage5.style.display = 'block';
    } else {
      // Input is valid, change border color to default (white), reset text color
      inputField.style.border = "1px solid white";
      label.classList.remove('red');
      units.classList.remove('red');
    }
  }

  function checkWeightInputColor() {
    var inputField = document.getElementById("input3");
    var label = inputField.parentElement.querySelector('.label');
    var units = inputField.parentElement.querySelector('.units');
    var warnMessage6 = inputField.parentElement.querySelector('.warn6');
    var warnMessage7 = inputField.parentElement.querySelector('.warn7');

    // Reset all warning messages
    warnMessage6.style.display = 'none';
    warnMessage7.style.display = 'none';

    if (inputField.value === "") {
      // Input is empty, show general warning message
      inputField.style.border = "1px solid red";
      label.classList.add('red');
      units.classList.add('red');
      warnMessage6.style.display = 'block';
    } else if (inputField.value < 90) {
      // Input is less than 90, show specific warning message
      inputField.style.border = "1px solid red";
      label.classList.add('red');
      units.classList.add('red');
      warnMessage7.style.display = 'block';
    } else {
      // Input is valid, change border color to default (white), reset text color
      inputField.style.border = "1px solid white";
      label.classList.remove('red');
      units.classList.remove('red');
    }
  }

  function checkTargetWeightInputColor() {
    var inputField = document.getElementById("input4");
    var label = inputField.parentElement.querySelector('.label');
    var units = inputField.parentElement.querySelector('.units');
    var warnMessage8 = inputField.parentElement.querySelector('.warn8');
    var warnMessage9 = inputField.parentElement.querySelector('.warn9');

    // Reset all warning messages
    warnMessage8.style.display = 'none';
    warnMessage9.style.display = 'none';

    if (inputField.value === "") {
      // Input is empty, show general warning message
      inputField.style.border = "1px solid red";
      label.classList.add('red');
      units.classList.add('red');
      warnMessage8.style.display = 'block';
    } else if (inputField.value < 90) {
      // Input is less than 90, show specific warning message
      inputField.style.border = "1px solid red";
      label.classList.add('red');
      units.classList.add('red');
      warnMessage9.style.display = 'block';
    } else {
      // Input is valid, change border color to default (white), reset text color
      inputField.style.border = "1px solid white";
      label.classList.remove('red');
      units.classList.remove('red');
    }
  }

  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    var warnings = document.querySelectorAll('.warn, .warn2, .warn3, .warn4, .warn5, .warn6, .warn7, .warn8, .warn9');
    for (var i = 0; i < warnings.length; i++) {
      if (warnings[i].style.display === 'block') {
        alert('Please resolve all warnings before continuing.');
        return;
      }
    }

    // If no warnings, proceed with the form submission logic
    // Replace this comment with your actual form submission logic

    // Redirect to the specified page immediately after successful submission
    window.location.href = './11.html';
  }

  function toggleDisplay() {
    var finalCardWarp = document.querySelector('.final_card_warp');
    var finalCardText = document.querySelector('.final_card_text');

    if (finalCardWarp.style.opacity === '1') {
        finalCardWarp.style.opacity = '0';
        finalCardText.style.opacity = '1';
    } else {
        finalCardWarp.style.opacity = '1';
        finalCardText.style.opacity = '0';
    }
}
  function toggleDisplay2() {
    var finalCardWarp = document.querySelector('.final_card_warp2');
    var finalCardText = document.querySelector('.none_2');

    if (finalCardWarp.style.opacity === '1') {
        finalCardWarp.style.opacity = '0';
        finalCardText.style.opacity = '1';
    } else {
        finalCardWarp.style.opacity = '1';
        finalCardText.style.opacity = '0';
    }
}

  $(function () {
    $("input").keydown(function () {
      // Save old value.
      if (!$(this).val() || (parseInt($(this).val()) <= 399 && parseInt($(this).val()) >= 0))
      $(this).data("old", $(this).val());
    });
    $("input").keyup(function () {
      // Check correct, else revert back to old value.
      if (!$(this).val() || (parseInt($(this).val()) <= 399 && parseInt($(this).val()) >= 0))
        ;
      else
        $(this).val($(this).data("old"));
    });
  });