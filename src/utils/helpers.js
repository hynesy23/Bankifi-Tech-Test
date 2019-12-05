export const formatCreatorResults = results => {
  return results.map(result => {
    result.name = `${result.firstName} ${result.lastName}`;
    delete result.firstName;
    delete result.lastName;
    return result;
  });
};

export const formatResultImage = result => {
  const notAvailable = "image_not_available";

  if (!Object.keys(result).length) {
    return result;
  }

  if (result.thumbnail.path.includes(notAvailable)) {
    result.thumbnail.path = "";
    return result;
  }

  return result;
};

export const formatResultName = result => {
  if (!Object.keys(result).length) {
    return result;
  }

  result.name = result.fullName;
  delete result.fullName;

  return result;
};
