const queryPriority = require("../config/queryPriority");

const configureQuery = (queryObj, minParams = 2) => {
  let item;
  let maxGroupLevel = 0;
  let currentItemsOfMaxLevel = 0;
  let currentItems = 0;
  let hasCompleteGroup = false;

  return Object.fromEntries(
    Object.entries(queryObj).reduce((acc, [key, value]) => {
      if (queryPriority.some(obj => obj.name == key)) {
        
        item = queryPriority[queryPriority.indexOf(queryPriority.find(item => item.name == key))];
        
        if (item.group == null) {
          acc.push([key, value]);

        } else if (item.group = maxGroupLevel) {
          currentItemsOfMaxLevel += 1;
          if (currentItemsOfMaxLevel >= 2) {
            hasCompleteGroup = true;
          }
          currentItems += 1;
          acc.push([key, value]);

        } else if (item.group > maxGroupLevel && hasCompleteGroup == false) {
          maxGroupLevel = item.group;
          currentItemsOfMaxLevel = 1;
          acc.push([key, value]);

        } else if (item.group < maxGroupLevel && hasCompleteGroup == false) {
          maxGroupLevel = item.group;
          currentItemsOfMaxLevel = 1;
          currentItems += 1;
          acc.push([key, value]);

        } else if (currentItems < minParams && hasCompleteGroup == false) {
          acc.push([key, value]);
          currentItems += 1;

        }
        return acc;
      }
    }, [])
  )
}

module.exports = configureQuery;