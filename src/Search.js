import React, { useState } from "react";

export default function Search() {
  let [word, setword] = useState(" ");

  function updateWord(event) {
    setword(event.target.value);
  }

  return (
    <div className="input-group rounded">
      <input
        type="search"
        placeholder="Search"
        onSubmit={updateWord}
        className="form-control rounded"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <p>{word}</p>
    </div>
  );
}
