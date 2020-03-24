import { useCriminals } from "./criminalProvier.js";
import { criminalHtmlRep } from "./Criminal.js";

const domTarget = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container");

// Set state variable for criminal list visibility
let visibility = true

export const criminalList = () => {
  const criminals = useCriminals();

  eventHub.addEventListener("witnessButtonClicked", customEvent => {
    visibility = !visibility

    visibility
      ? domTarget.classList.remove("invisible")
      : domTarget.classList.add("invisible")

  })

  // Listen for the custom event you dispatched in ConvictionSelect
  // Render only criminals that match the selected crime
  eventHub.addEventListener("crimeSelected", event => {
    
    const crimeId = event.detail.crime;
    const matchingCriminals = criminals.filter(crime => {
      if (crime.conviction === crimeId) {
        return true;
      }
      return false;
    });
    render(matchingCriminals);
  });

  // All criminal render function. 
  const render = criminalCollection => {
    domTarget.innerHTML = `${criminalCollection
      .map(criminal => {
        return criminalHtmlRep(criminal);
      })
      .join("")}`;
  };

  // Render ALL criminals initally
  render(criminals);
};
