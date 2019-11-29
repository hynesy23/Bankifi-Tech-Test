export const formatCreatorResults = results => {
  return results.map(result => {
    result.name = `${result.firstName} ${result.lastName}`;
    delete result.firstName;
    delete result.lastName;
    return result;
  });
};
