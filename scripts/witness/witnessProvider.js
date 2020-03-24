let witnesses = []

// Export copy of array for other modules
export const useWitnesses = () => witnesses.slice()

// Get copy of witnesses from API
export const getWitnesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
        .then(response => response.json())
        .then(parsedWitnesses => witnesses = parsedWitnesses)

}
