import { useCriminals } from "./criminalProvier.js";
import { criminalHtmlRep } from "./Criminal.js";

const domTarget = document.querySelector(".criminalsContianer");

export const criminalList = () => {
  const criminals = useCriminals();
  for (const criminal of criminals) {
    domTarget.innerHTML += criminalHtmlRep(criminal);
  }
};
