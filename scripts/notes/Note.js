// Represent notes as HTML for display

export const Note = (noteObject, criminal) => {
    
    return `
        <section class="note">
            <h3>${criminal.name}</h3>
            <div>${new Date(noteObject.noteDate).toLocaleDateString('en-us')}</div>
            <div>${noteObject.noteText}</div>

            <button id="deleteNote--${noteObject.id}>Delete Note</button>
        </section>
    `
}

