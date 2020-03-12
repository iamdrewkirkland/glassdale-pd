import { useCrimes } from "./crimeData.js";

const eventHub = document.querySelector(".container")
const domTarget = document.querySelector(".filters__crime");

export const crimeSelect = () => {
  const crimeArray = useCrimes();

  // On the content target, listen for a "change" event.
eventHub.addEventListener("change", changeEvent => {

  // Only do this if the `crimeSelect` element was changed
  if (changeEvent.target.classList.contains("dropdown")) {
    
    const selectedCrime = changeEvent.target.value

    // Generate a new custom message that a friend was selected
    const message = new CustomEvent("crimeSelected", {
      detail: {
        crime: selectedCrime
      }
    });

    // Dispatch custom message to event hub
    eventHub.dispatchEvent(message);
  }
})

  const renderCrimeOption = crimeArrayForRender => {

    domTarget.innerHTML = `
       <select class="dropdown" id="crimeSelect">
           <option value="0">Please select a crime...</option>
           ${crimeArrayForRender.map(crime => {
             return `<option value="${crime.id}">${crime.name}</option>`
           }
        )
        }
       </select>
    `;
  };
  renderCrimeOption(crimeArray);
};


