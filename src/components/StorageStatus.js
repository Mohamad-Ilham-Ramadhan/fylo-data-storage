import React, { useRef, useState, useEffect } from "react";

export default function StorageStatus() {
  const refBar = useRef(null);
  const [used, setUsed] = useState(815);
  const total = 1000;
  useEffect(() => {
    refBar.current.style.width = `${(used * 100) / total}%`;
  }, []);
  return (
    <div className="flex-item --storage-status">
      <div className="storage-status">
        <div className="info">
          You've used <strong>{used} GB</strong> of your storage
        </div>
        <div className="status">
          <div className="status-bar">
            <div id="bar" className="bar" ref={refBar}>
              <div className="tip"></div>
            </div>
          </div>
          <div className="min-max">
            <span>
              <strong>0 GB</strong>
            </span>
            <span>
              <strong>{total} GB</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="pop">
        <span className="number">{total - used}</span>
        <span className="text">GB LEFT</span>
      </div>
    </div>
  );
}
