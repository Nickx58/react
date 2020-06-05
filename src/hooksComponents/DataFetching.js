import React, { useState, useEffect } from "react";

function DataFetching() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
