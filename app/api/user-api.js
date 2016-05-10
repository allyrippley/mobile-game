import axios from 'axios';
import store from '../store';
import { getUsersSuccess, deleteUserSuccess, userProfileSuccess } from '../actions/user-actions';

/**
 * Get all users
 */

export function getUsers() {
  return axios.get('http://localhost:3001/users')
    .then(response => {
      store.dispatch(getUsersSuccess(response.data));
      return response;
    });
}

/**
 * Search users
 */

export function searchUsers(query = '') {
  return axios.get('http://localhost:3001/users?q='+ query)
    .then(response => {
      store.dispatch(getUsersSuccess(response.data));
      return response;
    });
}

/**
 * Delete a user
 */

export function deleteUser(userId) {
  return axios.delete('http://localhost:3001/users/' + userId)
    .then(response => {
      store.dispatch(deleteUserSuccess(userId));
      return response;
    });
}

/**
 * getProfile() is much more complex because it has to make
 * three XHR requests to get all the profile info.
 */

export function getProfile(userId) {

  // Start with an empty profile object and build it up
  // from multiple XHR requests.
  let profile = {};

  // Get the user data from our local database.
  return axios.get('http://localhost:3001/users/' + userId)
    .then(response => {

      let user = response.data;
      profile.date = user.date
      profile.id = user.id
      profile.planet = user.planet
      profile.type = user.type
      profile.sign = user.sign
      profile.degree = user.degree ? user.degree : ''

      store.dispatch(userProfileSuccess(profile));
      return;
    });

}
