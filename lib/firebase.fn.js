import { doc, setDoc, onSnapshot, collection, query } from "firebase/firestore";
import { db } from "../lib/firebase";
import { v4 as uuidv4 } from "uuid";

export const createNewProduct = async (productData) => {
  const id = uuidv4();
  await setDoc(doc(db, "products", id), {
    ...productData,
    id: id,
  });
};

export const getProducts = async () => {
  const onsub = onSnapshot(
    query(collection(db, "posts"), (snapshot) => {
      const postsData = [];
      snapshot.forEach((doc) => {
        postsData.push(doc.data());
      });
      return postsData;
    })
  );
};
