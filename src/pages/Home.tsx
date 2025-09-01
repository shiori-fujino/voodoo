// src/pages/Home.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { models, Model } from "../models";

function Home() {
  const [filter, setFilter] = useState<string>("");

  const nationalities = Array.from(new Set(models.map(m => m.nationality)));

  const filteredModels = filter
    ? models.filter((model) => model.nationality === filter)
    : models;


  return (
    <div className="home">
      <h1>Our Models</h1>

      {/* Nationality filter dropdown */}
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="">All Nationalities</option>
        {nationalities.map((nat) => (
          <option key={nat} value={nat}>{nat}</option>
        ))}
      </select>

      {/* Grid of model photos */}
      <div className="model-grid">
  {filteredModels.map((model: Model) => (
    <Link key={model.id} to={`/model/${model.id}`} className="model-card">
      <img src={model.photo} alt={model.name} />
      <p>{model.name}</p>{model.shift && (
          <p style={{ fontSize: "0.9em", color: "#888" }}>{model.shift}</p>)}
    </Link>
  ))}
</div>


    </div>
  );
}

export default Home;
