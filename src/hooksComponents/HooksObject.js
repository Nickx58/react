import React, { useState } from "react";

function HooksObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <label>First Name</label>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
}

export default HooksObject;
