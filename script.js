$(function() {
  checkAndUpdatePetInfoInHtml();

  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.nap-button').click(clickedNapButton);
});

var pet_info = {
  name: "Mochi",
  weight: 10,
  happiness: 50,
  energy: 40
};

function clickedTreatButton() {
  pet_info.happiness += 10;
  pet_info.weight += 2;
  pet_info.energy += 5;

  showPetComment("Yum! Mochi loved that treat!");
  bouncePet();
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  pet_info.happiness += 15;
  pet_info.weight -= 1;
  pet_info.energy -= 10;

  showPetComment("Mochi had so much fun playing!");
  bouncePet();
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  pet_info.happiness -= 5;
  pet_info.weight -= 3;
  pet_info.energy -= 15;

  showPetComment("Whew! Mochi is tired from exercising.");
  bouncePet();
  checkAndUpdatePetInfoInHtml();
}

function clickedNapButton() {
  pet_info.happiness += 5;
  pet_info.energy += 20;

  showPetComment("Zzz... Mochi took a peaceful nap.");
  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  checkStatsBeforeUpdating();
  updatePetInfoInHtml();
}

function checkStatsBeforeUpdating() {
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }

  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }

  if (pet_info.energy < 0) {
    pet_info.energy = 0;
  }
}

function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
  $('.energy').text(pet_info.energy);

  updateMood();
}

function updateMood() {
  var mood = "";

  if (pet_info.happiness > 70) {
    mood = "😄 Super Happy";
    $('.happiness').css('color', 'green');
    $('.mood').css('color', 'green');
  } else if (pet_info.happiness > 40) {
    mood = "🙂 Okay";
    $('.happiness').css('color', 'orange');
    $('.mood').css('color', 'orange');
  } else {
    mood = "😢 Sad";
    $('.happiness').css('color', 'red');
    $('.mood').css('color', 'red');
  }

  $('.mood').text(mood);
}

function showPetComment(message) {
  /*
    fadeOut() is a jQuery method that smoothly hides the pet comment.
    After the text is hidden, the message changes and fadeIn() smoothly
    shows the new pet comment on the page.
  */
  $('.pet-comment').fadeOut(200, function() {
    $('.pet-comment').text(message).fadeIn(200);
  });
}

function bouncePet() {
  /*
    animate() is a jQuery method that changes CSS properties over time.
    Here it moves the pet image up and then back down to make it look
    like the pet is bouncing after an action.
  */
  $('.pet-image')
    .animate({ marginTop: "-15px" }, 150)
    .animate({ marginTop: "0px" }, 150);
}