// Represent notes as HTML for display

export const Note = noteObject => {
    
    return `
        <section class="note">
            <h3>${noteObject.criminalName}</h3>
            <div>${new Date(noteObject.noteDate).toLocaleDateString('en-us')}</div>
            <div>${noteObject.noteText}</div>
        </section>
    `
}

