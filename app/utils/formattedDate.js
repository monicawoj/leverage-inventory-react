const formattedDate = () => {
  const date = new Date();
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  let hh = date.getHours();
  let MM = date.getMinutes();
  let ss = date.getSeconds();

  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }

  return `${mm}/${dd}/${yyyy} ${hh}:${MM}:${ss}`;
};

export default formattedDate;
