import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../infrastructure/redux/user/user.action";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "@firebase/firestore";

const Auth = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user !== null) {
        const userRef = doc(db, "users", user.uid);
        const userData = {
          username: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          id: user.uid,
        };
        console.log("updating user");
        await setDoc(userRef, {
          ...userData,
        });
        dispatch(setCurrentUser(userData));
        if (router.pathname === "/enter") {
          router.push("/");
        }
      } else {
        dispatch(setCurrentUser(null));
        router.push("/enter");
      }
    });
  }, []);
  return null;
};

export default Auth;
