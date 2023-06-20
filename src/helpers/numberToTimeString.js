const numberToTimeString = (number) => {
  const localNumber = !number ? 1 : number;
  const formatedTime = new Date(localNumber * 1000).toISOString().replace('T', ' ').replace('Z', '');
  return formatedTime;
}

module.exports = numberToTimeString;