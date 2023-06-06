const numberToTimestamp = (number) => {
  const formatedTime = new Date(number * 1000).toISOString().replace('T', ' ').replace('Z', '');
  console.log(formatedTime);
  return formatedTime;
}

module.exports = numberToTimestamp;