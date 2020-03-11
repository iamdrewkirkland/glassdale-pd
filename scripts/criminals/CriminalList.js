import { useCriminals } from "./criminalProvier.js";
import { criminalHtmlRep } from "./Criminal.js";

const domTarget = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container")


export const criminalList = () => {
  const criminals = useCriminals();
  
  // for (const criminal of criminals) {
  //   domTarget.innerHTML += criminalHtmlRep(criminal);
  // }

  // Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeSelected", event => {
  // You remembered to add the id of the crime to the event detail, right?
  const crimeId = event.detail.crime
  const matchingCriminals = criminals.filter(
    (crime) => {
          if (crime.conviction === crimeId) {
            return true
          } return false
        })
          render(matchingCriminals)
  }
)

const render = criminalCollection => {
  domTarget.innerHTML = `${criminalCollection.map( 
    
    (criminal) => {
      return criminalHtmlRep(criminal)
  }
  ).join("")}`
}


// Render ALL criminals initally

  render(criminals)
}



