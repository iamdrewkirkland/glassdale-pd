import { getWitnesses, useWitnesses } from "./witnessProvider.js";
import { Witness } from "./Witness.js";

const contentTarget = document.querySelector(".witnessStatementsContainer");
const eventHub = document.querySelector(".container");

let visibility = false;

eventHub.addEventListener("witnessButtonClicked", customEvent => {
  visibility = !visibility;

  visibility
    ? (contentTarget.classList.remove("invisible"), render())
    : contentTarget.classList.add("invisible");
});

const render = () => {
  getWitnesses().then(() => {
    const allStatements = useWitnesses();

    contentTarget.innerHTML = allStatements
      .map(currentStatement => {
        const statementHTML = Witness(currentStatement);
        return statementHTML;
      })
      .join("");
  });
};
