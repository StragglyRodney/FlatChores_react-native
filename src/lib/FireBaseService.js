import firebase from 'react-native-firebase'

class FirebaseService {
  async createChore(choreTitle, choreDescription) {
    const doc = await firebase
      .firestore()
      .collection('flat1')
      .doc('chores')
      .doc(choreTitle)
      .get()

    if (doc.exists) {
      return doc.data()
    } else {
      const defaultDoc = {
        choreTitle: choreTitle,
        choreDescription: choreDescription
      }
      await firebase
        .firestore()
        .collection('flat1')
        .doc('chores')
        .doc(choreTitle)
        .set(defaultDoc)

      return doc
    }
  }

  async fetchChores() {
    // var choresRef = await firebase.firestore().collection('flat1').doc('chores')
    // var getDoc = choresRef
    //   .get()
    //   .then(doc => {
    //     if (!doc.exists) {
    //       console.log('No such document!')
    //     } else {
    //       console.log('Document data:', doc.data())
    //     }
    //   })
    //   .catch(err => {
    //     console.log('Error getting document', err)
    //   })
  }
}
export const firebaseService = new FirebaseService()
