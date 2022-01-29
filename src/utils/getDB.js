import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
  
// FireStore Set
const getDB = async() => {
  const db = getFirestore(); 
  const q = query(collection(db, "camp"), where('id', '<=', 20) )
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  })
}

export default getDB