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
  // test dev
  // return 'https://app.leverageinventory.com/backend/results?id=4260ccb2-60fe-46ba-8122-7ccd233cbf2d'
  // test production
  console.log(process.env);
  console.log(base);
  console.log(id);
  return 'https://leverage-inventory.wharton-research-programming.org/backend/results/?id=f0721981-f0a6-4127-af7c-9f00d3fc1f21';
  // return `${base}?id=${id}`;
}

export default getApiUrl;
