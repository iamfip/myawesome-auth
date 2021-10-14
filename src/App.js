import "./App.css";
import initializeAuthentication from "./Firebase/firebase.initialize";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

initializeAuthentication();
const provider = new GoogleAuthProvider();

function App() {
  const handleGoogleSignin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div className="App">
      <button
        onClick={handleGoogleSignin}
        style={{
          background: "gold",
          padding: "10px",
          margin: "50px",
          borderRadius: "10px",
        }}
      >
        {" "}
        Sign In{" "}
      </button>
    </div>
  );
}

export default App;
