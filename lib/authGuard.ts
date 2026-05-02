import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export const checkAuth = (router: any) => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/dealers/login");
    }
  });
};