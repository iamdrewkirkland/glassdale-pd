import { useCrimes } from "./crimeData.js";

const domTarget = document.querySelector(".filters__crime");

export const crimeSelect = () => {
  const crimeArray = useCrimes();
  const renderCrimeOption = crimeArrayForRender => {

    domTarget.innerHTML = `
       <select class="dropdown" id="crimeSelect">
           <option value="0">Please select a crime...</option>
           ${crimeArrayForRender.map(crime => 
             `<option value="${crime.id}">${crime.name}</option>`
        
        )
        }
       </select>
    `;
  };
  renderCrimeOption(crimeArray);
};
