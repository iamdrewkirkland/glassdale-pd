// Render a single object as HTML

export const Witness = witness => {
    return `
        <section class="witness">
            <header>
                <h3>${witness.name}</h3>
            </header>
            <p>${witness.statements}</p>
        </section>
    `
}