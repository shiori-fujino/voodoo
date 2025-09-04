// src/pages/ModelProfile.tsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { models } from "../models";
import type { Model } from "../models";

export default function ModelProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const model: Model | undefined = models.find((m) => m.id === Number(id));

  // Make sure model exists
  if (!model) return <p style={{ padding: "20px" }}>Model not found.</p>;

  // Photo carousel state
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const prevPhoto = () => {
    setCurrentPhoto((prev) =>
      prev === 0 ? (model.photos?.length || 1) - 1 : prev - 1
    );
  };

  const nextPhoto = () => {
    setCurrentPhoto((prev) =>
      prev === (model.photos?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>


      {/* Hero Name */}
      <h1 style={{ fontSize: "2.5em", marginBottom: "20px" }}>{model.name}</h1>

      {/* Photo Carousel */}
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <img
          src={model.photos?.[currentPhoto] || model.photo}
          alt={`${model.name} ${currentPhoto + 1}`}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
        {model.photos && model.photos.length > 1 && (
          <>
            <button
              onClick={prevPhoto}
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                fontSize: "1.5em",
                background: "rgba(0,0,0,0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
              }}
            >
              ←
            </button>
            <button
              onClick={nextPhoto}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                fontSize: "1.5em",
                background: "rgba(0,0,0,0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
              }}
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Model Figures */}
      <div style={{ display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "center", // center horizontally
    marginBottom: "20px",
    fontSize: "1.1em",        // slightly bigger
    fontWeight: 500,          // optional, make text a bit bolder
    textAlign: "center", }}>
        <p>{model.nationality}</p>
        {model.height && <p>{model.height}</p>}
        {model.size && <p><strong>Size</strong> {model.size}</p>}
        {model.size2 && <p>{model.size2}</p>}
      </div>

      {/* Availability */}
      <div>
        <h2 style={{ marginBottom: "10px" }}>Services Availability</h2>
        {model.availability?.length ? (
          <ul>
            {model.availability.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No availability info yet.</p>
        )}
      </div>

      {/* Preferences */}
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ marginBottom: "10px" }}>Profile</h2>
        {model.preferences?.length ? (
          <ul>
            {model.preferences.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No preferences info yet.</p>
        )}
        {/* Bottom Buttons */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  }}
>
  {/* Back Button */}
  <button
    onClick={() => window.history.back()}
    style={{
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "8px",
      backgroundColor: "#eee",
      color: "#333",
      border: "none",
      cursor: "pointer",
    }}
  >
    ← Back
  </button>

  {/* Booking Button */}
  <button
    onClick={() => alert(`Booking form for ${model.name}`)}
    style={{
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "8px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    }}
  >
    Booking
  </button>
</div>

      </div>
    </div>
    
  );
}
