
async function fetchData(url) {
    try {
      const result = await fetch(url);
      const data = await result.json();
      return data;
    } catch {
      return null;
    }
  }
  
  export default fetchData;