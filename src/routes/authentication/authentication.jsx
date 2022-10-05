import React from "react";
import {
  createUserDocumentFromAuth,
  singInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import SingUpForm from "../../components/sing-up-form/sing-up-form.component";

const Authentication = () => {
 

  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Baga te in pagina</h1>
      <button onClick={logGoogleUser}>Te ajuta Gogu</button>
      <SingUpForm/>
    </div>
  );
};

export default Authentication;
