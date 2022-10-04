import React from "react";
import {
  createUserDocumentFromAuth,
  singInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";


const SingIn = () => {
  const logGoogleUser = async () => {
    const user = await singInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };
  return (
    <div>
      <h1>Baga te in pagina</h1>
      <button onClick={logGoogleUser}>Te ajuta Gogu</button>
    </div>
  );
};

export default SingIn;
