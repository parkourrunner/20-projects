import React, { useRef, useState } from 'react'
import useClickOutside from '.';

function TestUseClickOutside() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setShowContent(false));
  return (
    <div ref={ref}>
      {showContent ? <div>
        <h1>Random content</h1>
        <p>Click outside of this to close this</p>
      </div> : <button onClick={() => setShowContent(true)}>Show Content</button>}
    </div>
  )
}

export default TestUseClickOutside
