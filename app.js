/** update existing page content exercise */

//select the first element of class='card'
//  const nanodegreeCard = document.querySelector(".card");
//add text to set/replace card content
//block this out to use for exercise to update the program title on the card
//  nanodegreeCard.textContent = 'I will be the updated text for the nanodegreeCard element!';

/** Page 7 - Update the Program Title */

const title = document.getElementById("one");
title.innerHTML = "<em>Everything</em> You Need to Know About Data";

/** end exercise here */

/** add text with html tags to an element */
const heading = document.querySelector(".text-center");
heading.innerHTML = "Our Amazing Community <em>ROCKS</em>!";

/** Add Page Content Exercise */
const community = document.querySelector(".testimonials"); //select element with 'testimonials' class

const adviceHeader = document.createElement("h2");

adviceHeader.textContent = "Advice for New Udacity Students";
community.appendChild(adviceHeader);

const adviceString =
  "<p>Set aside specific blocks of time each week for your coursework. Add those blocks to your calendar and set reminders.</p>";

adviceHeader.insertAdjacentHTML("afterend", adviceString);
/** exercise ends here */

/** Remove Page Content (child element)  Exercise page 18 */

const container = document.getElementById("card-grid");
container.firstElementChild.remove();

//  This way uses 'removeChild'
// const firstCard = container.firstElementChild;
// container.removeChild(firstCard);
