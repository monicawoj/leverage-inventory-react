//dev
// const id = 4260ccb2-60fe-46ba-8122-7ccd233cbf2d
// const url = "https://leverage-inventory-dev.wharton-research-programming.org/backend/results/";

//production
// const userId = getCookie('resultsid');
// const url = "https://leverage-inventory.wharton-research-programming.org/backend/results/";

//local
//const finalUrl = 'https://app.leverageinventory.com/backend/results/?id=4260ccb2-60fe-46ba-8122-7ccd233cbf2d';

// export default finalUrl;

const getApiUrl = (id) => {
  const base = process.env.API_URL;
  // console.log(base);
  return `${base}?id=${id}`;
}

export default getApiUrl;
