import React, { useState, useEffect } from "react";

function DataFetching() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState({});
  const [id, setID] = useState(1);
  const [idfromButton, setIdfromButton] = useState(1);

  const handleClick = () => {
    setIdfromButton(id);
  };

  useEffect(() => {
    fetch(`${url}/${id}`)
      .then((response) => response.json())
      .then((res) => setPost(res))
      .catch((err) => console.log(err));
  }, [idfromButton]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setID(e.target.value)} />
      <button onClick={handleClick}>Fetch Posts</button>
      <p>{post.title}</p>
    </div>
  );
}

export default DataFetching;
