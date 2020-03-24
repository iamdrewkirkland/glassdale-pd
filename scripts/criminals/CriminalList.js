import { useCriminals } from "./criminalProvier.js";
import { criminalHtmlRep } from "./Criminal.js";

const contentTarget = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container");

// Set state variable for criminal list visibility
let visibility = true

// Toggle criminal list if Witness Statements button clicked
eventHub.addEventListener("witnessButtonClicked", customEvent => {
  visibility = !visibility

  visibility
    ? contentTarget.classList.remove("invisible")
    : contentTarget.classList.add("invisible")

})

// Function responsible for rendering the criminal list
export const criminalList = () => {
  const criminals = useCriminals();

  // Render only criminals that match the selected crime
  eventHub.addEventListener("crimeSelected", event => {
    
    // Get the ID of the crime selected from drop down and render matching criminals
    const crimeId = event.detail.crime;
    const matchingCriminals = criminals.filter(crime => {
      if (crime.conviction === crimeId) {
        return true;
      }
      return false;
    });
    render(matchingCriminals);
  });

  // Render each object of the collection as HTML
  const render = criminalCollection => {
    contentTarget.innerHTML = `${criminalCollection
      .map(criminal => {
        return criminalHtmlRep(criminal);
      })
      .join("")}`;
  };

  // Render ALL criminals initally
  render(criminals);
};
