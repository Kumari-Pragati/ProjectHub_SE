import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { Firebase } from "../../firebase/config";
import { useHistory } from "react-router";
import RoundLoading from "../Loading/RoundLoading";

export default function Signup() {
  const history = useHistory();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let [loading,setLoading]=useState(false)
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: name }).then(() => {
          Firebase.firestore().collection("users").doc(result.user.uid).set({
            id: result.user.uid,
            name: name,
            phone: phone,
          });
        });
      })
      .then(() => {
        history.push("/login");
      });
  };
  return (<>
    {loading && <RoundLoading/> } <div>
      <div className="signupParentDiv">
      <img src="https://imgs.search.brave.com/okRZMmgU5Xg4lJukAZpbqQaf5U0znP3U9w-kEMJUrhE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MTAxNjkyMDMvZmls/ZS9vcmlnaW5hbC01/YTI0YWI0OWFjM2Jh/Y2UxZGU0ZTVhNzk2/YWUwMmMyYS5qcGc_/cmVzaXplPTQwMHgw" alt="Girl in a jacket" width="100" height="50"></img>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
          <br />
          <label>Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <br />
          <label>Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </div> 
    </>
  );
}
