

require('datejs');

function combineUsers(...args) {

  // Step 3: Initialize return object
  let combinedObject = {
    users: []
  };

  // Step 4: Loop through args
  for (let i = 0; i < args.length; i++) {

    // Step 5: Merge arrays using spread
    combinedObject.users = [
      ...combinedObject.users,
      ...args[i]
    ];
  }

  // Step 6: Add merge date
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};