import { query, where, getDocs, collection } from 'firebase/firestore';
import { db } from './../firebase';

const q = (str: string) => {
  return query(
    collection(db, "beans"),
    where("name", "==", str)
  );
}

const querySnapShot = await getDocs(q);
querySnapShot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});
