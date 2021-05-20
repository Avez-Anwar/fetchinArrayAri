import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPost(response.data);
        setError(" ");
        setLoading(false);
      })
      .catch((error) => {
        setPost([]);
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);

  const newArray = post.map(function (posts) {
    return (
      <ul>
        <li>{posts.title}</li>
      </ul>
    );
  });

  return (
    <div className="App">
      {loading ? "Loading" : newArray}
      {error ? error : null}
    </div>
  );
}
