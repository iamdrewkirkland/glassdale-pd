let crimes = [];

export const useCrimes = () => {
  return crimes.slice();
};

export const getCrimes = () => {
  return fetch("https://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then(parsedCrimes => {
      
      crimes = parsedCrimes;
    });
};
