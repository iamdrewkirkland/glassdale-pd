import { getCriminals } from "./criminals/criminalProvier.js";
import { criminalList } from "./criminals/CriminalList.js";
import { getCrimes } from "./convictions/crimeData.js";
import { crimeSelect } from "./convictions/CrimeSelect.js";

getCrimes().then (
    () => crimeSelect()
)

getCriminals().then(
    () => criminalList()
);


