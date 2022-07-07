import fetch from "node-fetch";
const value = process.argv[2];
if (!value) {
  console.log("Please enter your name");
} else {
  async function fetchData(name) {
    const url = `https://api.nationalize.io/?name=${name}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.country.length > 0) {
      console.log(`Name :${data.name}`);
      data.country.map((cp) =>
        console.log(
          `Country : ${cp.country_id}\nProbability : ${cp.probability * 100}%`
        )
      );
    } else {
      console.log("Data not found");
    }
  }
  fetchData(value);
}
