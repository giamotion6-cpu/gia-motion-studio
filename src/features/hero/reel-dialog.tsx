"use client";

import { useRef } from "react";
import { Play, X } from "lucide-react";

export function ReelDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
    void videoRef.current?.play();
  };

  const closeDialog = () => {
    videoRef.current?.pause();
    dialogRef.current?.close();
  };

  return (
    <>
      <button className="text-link reel-trigger" type="button" onClick={openDialog}>
        <span className="play-icon"><Play size={14} fill="currentColor" aria-hidden="true" /></span>
        Ver reel
      </button>

      <dialog
        ref={dialogRef}
        className="reel-dialog"
        aria-labelledby="reel-title"
        onClose={() => videoRef.current?.pause()}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <div className="reel-dialog__panel">
          <div className="reel-dialog__header">
            <div>
              <span>GIA Motion / Showreel</span>
              <h2 id="reel-title">Ideas en movimiento</h2>
            </div>
            <button type="button" onClick={closeDialog} aria-label="Cerrar reel">
              <X aria-hidden="true" />
            </button>
          </div>
          <video
            ref={videoRef}
            controls
            playsInline
            preload="none"
            poster="/images/industrial-aerial.jpg"
          >
            <source src="/media/gia-reel.mp4" type="video/mp4" />
          </video>
        </div>
      </dialog>
    </>
  );
}
