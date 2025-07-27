// src/pages/FaceShapeDetector.jsx
import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

const FaceShapeDetector = () => {
  const [faceShape, setFaceShape] = useState("");
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    };
    loadModels();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imgURL = URL.createObjectURL(file);
    setImage(imgURL);
  };

  const detectFaceShape = async () => {
    const detection = await faceapi
      .detectSingleFace(imageRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks();

    if (!detection) return alert("No face detected!");

    const landmarks = detection.landmarks.positions;
    const jaw = landmarks.slice(0, 17);
    const width = jaw[jaw.length - 1].x - jaw[0].x;
    const height = landmarks[27].y - jaw[8].y;

    const ratio = width / height;

    let shape = "Unknown";
    if (ratio > 1.4) shape = "Round";
    else if (ratio > 1.2) shape = "Square";
    else if (ratio > 1.0) shape = "Oval";
    else shape = "Oblong";

    setFaceShape(shape);
  };

  return (
    <div className="pt-24 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">🧠 Face Shape Detector</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <br />
      {image && (
        <>
          <img
            ref={imageRef}
            src={image}
            alt="Uploaded"
            className="mx-auto mt-4 max-h-80"
            onLoad={detectFaceShape}
          />
          {faceShape && (
            <div className="mt-4 text-xl font-semibold">
              🔍 Detected Face Shape: <span className="text-pink-600">{faceShape}</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FaceShapeDetector;
