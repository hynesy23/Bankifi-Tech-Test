export const formatCreatorResults = results => {
  return results.map(result => {
    result.name = `${result.firstName} ${result.lastName}`;
    delete result.firstName;
    delete result.lastName;
    return result;
  });
};

export const formatResultImageAndDescription = result => {
  const notAvailable = "image_not_available";

  if (result.thumbnail.path.includes(notAvailable)) {
    result.thumbnail.path = "";
  }

  // if (!result.description) {
  //   result.description = `No bio available (I know! ${result.name} doesn't have a bio! crazy, right? )`;
  // }

  return result;
};
