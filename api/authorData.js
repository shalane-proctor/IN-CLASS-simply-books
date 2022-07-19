import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// FIXME:  GET ALL AUTHORS
const getAuthors = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// FIXME: CREATE AUTHOR
const createAuthor = () => {};

const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// FIXME: DELETE AUTHOR
const deleteSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => {
      getAuthors().then((authorArray) => resolve(authorArray));
    })
    .catch((error) => reject(error));
});

// FIXME: UPDATE AUTHOR
const updateAuthor = () => {};

// TODO: GET A SINGLE AUTHOR'S BOOKS
const getAuthorBooks = () => {};

// AuthorData brough in from Almost Amazon
// const getAuthors = (uid) =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${dbUrl}/authors.json?orderBy="uid"&equalTo="${uid}"`)
//       .then((response) => {
//         if (response.data) {
//           resolve(Object.values(response.data));
//         } else {
//           resolve([]);
//         }
//       })
//       .catch((error) => reject(error));
//   });

// // FIXME: CREATE AUTHOR
// const createAuthor = (authorObj) =>
//   new Promise((resolve, reject) => {
//     axios
//       .post(`${dbUrl}/authors.json`, authorObj)
//       .then((response) => {
//         const payload = { firebaseKey: response.data.name };
//         axios.patch(`${dbUrl}/authors/${response.data.name}.json`, payload).then(() => {
//           getAuthors(authorObj.uid).then(resolve);
//         });
//       })
//       .catch((error) => reject(error));
//   });

// // FIXME: GET SINGLE AUTHOR
// const getSingleAuthor = (firebaseKey) =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${dbUrl}/authors/${firebaseKey}.json`)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error));
//   });

// // FIXME: DELETE AUTHOR
// const deleteSingleAuthor = (firebaseKey) =>
//   new Promise((resolve, reject) => {
//     axios
//       .delete(`${dbUrl}/authors/${firebaseKey}.json`)
//       .then(() => {
//         getAuthors().then((authorArray) => resolve(authorArray));
//       })
//       .catch((error) => reject(error));
//   });

// // FAVORITE AUTHOR FILTER
// const favoriteAuthors = () =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${dbUrl}/authors.json?orderBy="favorite"&equalTo=true`)
//       .then((response) => resolve(Object.values(response.data)))
//       .catch((error) => reject(error));
//   });

// // FIXME: UPDATE AUTHOR
// const updateAuthor = (authorObj, uid) =>
//   new Promise((resolve, reject) => {
//     axios
//       .patch(`${dbUrl}/authors/${authorObj.firebaseKey}.json`, authorObj)
//       .then(() => getAuthors(uid).then(resolve))
//       .catch(reject);
//   });

// // TODO: GET A SINGLE AUTHOR'S BOOKS
// const getAuthorBooks = (authorFirebaseKey) =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${dbUrl}/books.json?orderBy="author_id"&equalTo="${authorFirebaseKey}"`)
//       .then((response) => resolve(Object.values(response.data)))
//       .catch((error) => reject(error));
//   });

export {
  getAuthors,
  createAuthor,
  getSingleAuthor,
  deleteSingleAuthor,
  updateAuthor,
  getAuthorBooks,
};
