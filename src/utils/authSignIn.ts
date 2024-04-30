import User from "@models/user"; // Adjust the import path as necessary
import Project from "@models/project"; // Adjust the import path as necessary
import { dbConnect } from "@utils/mongo/index";
/**
 * Handles the sign-in logic, especially the database interaction for finding or creating a user.
 * @param {string} email - The email address of the user attempting to sign in.
 * @param {any} profile - The user profile object provided by the OAuth provider.
 * @returns {Promise<boolean>} - A promise that resolves to true if sign-in is successful, false otherwise.
 */
export const handleSignIn = async (email: string, profile: any): Promise<boolean> => {
  try {
    
    await dbConnect();
    let userRecord = await User.findOne({ email: email }).exec();
    if (!userRecord) {
      const today = new Date();
      const todayWithoutTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());

      const location = "city, country";
      const language = "en-US,en;q=0.5";
      const imageProfile = "https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png";

      userRecord = await User.create({
        first_name: profile.given_name,
        last_name: profile.family_name,
        birth_date: todayWithoutTime,
        location: location,
        language: language,
        email: email,
        email_verified: false,
        image_profile: imageProfile,
        role: "user",
      });
    }

    //let projectRecords = await Project.find({ user: userRecord._id }).exec();
    //console.log(projectRecords);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
