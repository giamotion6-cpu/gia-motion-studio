import { CameraModel } from "./camera-model";

export function CameraShowcase() {
  return (
    <div className="camera-showcase">
      <div className="camera-showcase__frame" aria-hidden="true">
        <CameraModel />
      </div>
    </div>
  );
}
