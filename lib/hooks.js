import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { toggleUi } from "../infrastructure/redux/ui/ui.actions";
import { useEffect } from "react";
