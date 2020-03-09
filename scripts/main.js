import { getCriminals } from "./criminals/criminalProvier.js";
import { criminalList } from "./criminals/CriminalList.js";

getCriminals().then(
    () => criminalList()
);
