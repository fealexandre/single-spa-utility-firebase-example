import { getDocs, collection  } from "firebase/firestore";
import { firestoreInstance } from "@example/utility-firebase";

// but here it's not working
const getCollectionExample = async () => {
  const querySnapshot = await getDocs(collection(firestoreInstance, "teste"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });  
}

getCollectionExample()

export default function Root(props) {
  return <section>{props.name} is mounted!</section>;
}
