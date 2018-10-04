import firebase from 'react-native-firebase'

class FirebaseService {
  async createChore(choreTitle, choreDescription) {
    const doc = await firebase
      .firestore()
      .collection('flats')
      .doc('flat1')
      .collection('chores')
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
        .collection('flats')
        .doc('flat1')
        .collection('chores')
        .doc(choreTitle)
        .set(defaultDoc)

      return doc
    }
  }
}
export default (firebaseService = new FirebaseService())
