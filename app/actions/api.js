const getApiUrl = (id) => {
  const base = process.env.API_URL;
  // test dev
  // return 'https://app.leverageinventory.com/backend/results?id=4260ccb2-60fe-46ba-8122-7ccd233cbf2d'
  // test production
  // console.log(process.env);
  // console.log(base);
  // console.log(id);
  // return 'https://leverage-inventory.wharton-research-programming.org/backend/results/?id=f0721981-f0a6-4127-af7c-9f00d3fc1f21';
  return 'https://leverage-inventory.wharton-research-programming.org/backend/results/?id=33333333333333333333333333333333';
  // return 'https://leverage-inventory.wharton-research-programming.org/backend/results/?id=11111111111111111111111111111111';
  return `${base}?id=${id}`;
};

export default getApiUrl;
