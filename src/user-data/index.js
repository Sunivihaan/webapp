import { PROFILE_FILENAME } from '../constants';



/**
 * @typedef {Object} UserProfile
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} email
 * @property {string} phone
 * @property {string} about
 * @property {string} avatar
 * @property {string} token
 * @property {string} status
 * @property {string} role 
 * @property {float} locationLatitude
 * @property {float} locationLongitude
 * @property {string} addressStreet  
 * @property {string} addressPostalCode
 * @property {string} addressCity
 * @property {string} skills
 * 
 */


// @type {UserProfile[]}
export const defaultUserProfile = [
  {
    firstname: 'Default',
    lastname: 'Default',
    email: 'Default'
},
];

/**
 * Save tasks to Gaia
 * @param {UserSession} userSession
 * @param {Profile} profile
 * @param {boolean} isPublic
 */
export const saveProfile = async (userSession, profile, isPublic) => {
  await userSession.putFile(PROFILE_FILENAME, JSON.stringify({ profile, isPublic }), {
    encrypt: !isPublic,
  });
};

/**
 * Fetch the user profile. Omit the 'username' argument to fetch the current user profile [*testing*]
 * 
 * If the profile is not found, it returns null
 * 
 * @param {import("blockstack").UserSession} userSession
 * @param {string} username
 * @returns {{ profile: Profile | null, public: boolean }}
 */
export const fetchProfile = async (userSession, username) => {
  try {
    /** @type {string} raw JSON stored in Gaia */
    const profileJSON = await userSession.getFile(PROFILE_FILENAME, {
      decrypt: false,
      username: username || undefined,
    });
    if (profileJSON) {
      const json = JSON.parse(profileJSON);
      if (json.isPublic) {
        return {
          profile: json.profile,
          public: true,
        };
      } else {
        if (!username) {
          const decrypted = JSON.parse(userSession.decryptContent(profileJSON));
          return {
            profile: decrypted.profile,
            public: false,
          };
        }
      }
    } else {
      return {
        profile: username ? null : defaultUserProfile,
        public: false,
      };
    }
  } catch (error) {
    if (username) {
      return {
        profile: null,
      };
    } else {
      return {
        profile: null,
      };
    }
  }
};
