import { Horse } from "../../generated/graphql";


const findProfilePicture = (horse: Horse) => {
  const profilePicture = horse.images?.find((image) => image!.profile);
  const profilePictureURL = profilePicture?.url;
  return profilePictureURL;
};

export default findProfilePicture;
