export const criminalHtmlRep = criminalObject => {
  return `
    <section class="criminal">
        <h3>Name: ${criminalObject.name}</h3>
        <div>Age: ${criminalObject.age}</div>
        <div>Crime: ${criminalObject.crime}</div>
        <div>Incarcerated: ${criminalObject.incarceration.start} </div>
        <div>Release: ${criminalObject.incarceration.end}</div>
    </section>
`;
};
