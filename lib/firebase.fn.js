import { doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

export const createNewProduct = async (productData, userId) => {
  const id = uuidv4();
  await setDoc(doc(db, `users/${userId}/products`, id), {
    ...productData,
    id: id,
  });
};

export const editProduct = async (productData, userId, productId) => {
  await updateDoc(doc(db, `users/${userId}/products`, productId), {
    ...productData,
  });
};

export const createNewCustomer = async (customerData, userId) => {
  const id = uuidv4();
  await setDoc(doc(db, `users/${userId}/customers`, id), {
    ...customerData,
    id: id,
  });
};

export const createNewCategory = async (dataArray, userId) => {
  await setDoc(doc(db, `users/${userId}/categorys`, "categorys"), {
    categorys: [...dataArray],
  });
};

export const deleteProduct = async (id, userId) => {
  await deleteDoc(doc(db, `users/${userId}/products`, id));
};
