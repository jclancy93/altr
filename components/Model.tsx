import { useAnimations, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect, Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import "@google/model-viewer";

function Model() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <model-viewer
          data-js-focus-visible="true"
          src="facecovering.glb"
          alt="3D model of ‘VISCERA’ MAGIC PLEATS DRESS"
          auto-rotate="true"
          autoplay="true"
          ar="true"
          camera-controls="true"
          field-of-view="44deg"
          ios-src="https://storage.googleapis.com/dmt-data-staging/12a347c3-0a1b-4dec-8830-933df2e28bc9/usdzUrl/viscera.usdz"
          exposure="1"
          environment-image="neutral"
          ar-status="not-presenting"
        ></model-viewer>
      </Suspense>
    </div>
  );
}

export default Model;
