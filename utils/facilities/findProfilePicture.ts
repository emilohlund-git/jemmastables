import { Facility } from '../../generated/graphql';

const findProfilePicture = (facility: Facility) => {
  const profilePicture = facility.images?.find((image) => image!.profile);
  const profilePictureURL = profilePicture?.url;
  return profilePictureURL;
};

export default findProfilePicture;
