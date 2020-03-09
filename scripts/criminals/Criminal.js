export const criminalHtmlRep = criminalObject => {
  return `
    <section class="criminal">
        <h3>${criminalObject.name}</h3>
        <div>Age: ${criminalObject.age}</div>
        <div>Crime: ${criminalObject.conviction}</div>
        <div>Incarcerated: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')} </div>
        <div>Release: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
    </section>
`;
};

