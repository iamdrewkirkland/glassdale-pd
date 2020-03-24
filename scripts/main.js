import { getCriminals } from "./criminals/criminalProvier.js";
import { criminalList } from "./criminals/CriminalList.js";
import { getCrimes } from "./convictions/crimeData.js";
import { crimeSelect } from "./convictions/CrimeSelect.js";
import NoteForm from "./notes/NoteForm.js";
import { DisplayNotesButton } from "./notes/DisplayNoteListButton.js";
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js";
import { NoteList } from "./notes/NoteList.js";
import { WitnessStatementButton } from "./witness/DisplayWitnessStatementButton.js";
import "./witness/WitnessList.js"

getCrimes().then(() => crimeSelect());

getCriminals().then(() => criminalList());

DisplayNotesButton();
DisplayNoteFormButton();
NoteForm();
NoteList();
WitnessStatementButton();
