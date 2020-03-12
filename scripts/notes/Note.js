// Represent notes as HTML for display

export const NoteList = noteObject => {
    return `
        <section>
            <h3>${noteObject.suspect}</h3>
            <div>${new Date(noteObject.date).toLocaleDateString('en-us')}</div>
            <div>${noteObject.notetext}</div>
        </section>
    `
}

