import React from "react";
import { Link } from "react-router-dom";


export default function Error() {
  return  (
    <section className="error-page section">
      <div className="error-container">
        <h1>ooops! it's a dead end!!!</h1>
        <Link to="/" className="btn btn-primary">back home&#x1F649;</Link>
      </div>
    </section>
  )
}
