/** UPDATE ESISTING PAGE CONTENT EXERCISE */

//select the first element of class='card'
//  const nanodegreeCard = document.querySelector(".card");
//add text to set/replace card content
//block this out to use for exercise to update the program title on the card
//  nanodegreeCard.textContent = 'I will be the updated text for the nanodegreeCard element!';

/** Page 7 - UPDATE THE PROGRAM TITLE */

const title = document.getElementById("one");
title.innerHTML = "<em>Everything</em> You Need to Know About Data";

/** end exercise here */

/** ADD TEXT WITH HTML TAGS TO AN ELEMENT */
const heading = document.querySelector(".text-center");
heading.innerHTML = "Our Amazing Community <em>ROCKS</em>!";

/** ADD PAGE CONTENT EXERCISE */
const community = document.querySelector(".testimonials"); //select element with 'testimonials' class

const adviceHeader = document.createElement("h2");

adviceHeader.textContent = "Advice for New Udacity Students";
community.appendChild(adviceHeader);

const adviceString =
  "<p>Set aside specific blocks of time each week for your coursework. Add those blocks to your calendar and set reminders.</p>";

adviceHeader.insertAdjacentHTML("afterend", adviceString);
/** exercise ends here */

/** REMOVE PAGE CONTENT (CHILD ELEMENT) EXERCISE - page 18 */

// const container = document.getElementById("card-grid");
// container.firstElementChild.remove();

//  This way uses 'removeChild'
// const firstCard = container.firstElementChild;
// container.removeChild(firstCard);

/** exercise ends here */

/**EXERCISE: STYLE PAGE CONTENT */

//find button with id "start-now" & use style property change background color and border radius
const btn = document.querySelector("#start-now");
btn.style.borderRadius = "5rem";
btn.style.backgroundColor = "#2015ff";

//USE CLASSLIST METHODS TO ADD A NEW CLASS
//Add new-hero class to the section with the hero--homepage class
const cardList = document.querySelector('.hero--homepage');
cardList.classList.add("new-hero");

//Add the new-card class to all of the elements with the card class
//Find all of the cards
const cards = document.querySelectorAll(".card");

//use a for loop to add the new class to all of the elements
for (let card of cards) {
  card.classList.add("new-card");
}