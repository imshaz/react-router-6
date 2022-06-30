import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const usersList = [
  {
    id: 1,
    user: "shax",
  },
  {
    id: 2,
    user: "imad",
  },
  {
    id: 3,
    user: "ayesha",
  },
];
function Home() {
  return <h2>Home</h2>;
}
function Profile() {
  return (
    <>
      <h2>Profile</h2>
      {usersList.map((user) => {
        return (
          <div key={user.id}>
            <Link to={`/profile/${user.id}`}> user : {user.id}</Link>{" "}
          </div>
        );
      })}
    </>
  );
}

function UsersProfile(props) {
  const params = useParams();
  return (
    <>
      <h2>UsersProfile :{params.id}</h2>
    </>
  );
}

function Header() {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link> <Link to={"/profile"}>Profile</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<UsersProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
