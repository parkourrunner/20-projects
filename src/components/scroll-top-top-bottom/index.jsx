import React, { useRef } from 'react'
import useFetch from '../use-fetch'

function ScrollToTopAndBottom() {

  const { data, error, loading } = useFetch("https://dummyjson.com/products?limit=1000", {});
  const bottomRef = useRef(null);
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({behavior: "smooth"});
  }
  if (loading) return <h1>Loading, please wait...</h1>
  if (error) return <h1>Error happened, {error}</h1>

  return (
    <div>
      <h1>Scroll to top and bottom</h1>
      <h3>Top section</h3>
      <button onClick={() => handleScrollToBottom()}>Scroll to bottom</button>
      {data && data.products && data.products.length
        ? data.products.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))
        : null}
      <button ref={bottomRef} onClick={() => handleScrollToTop()}>Scroll to top</button>
      <h3>Bottom of the section</h3>
    </div>
  )
}

export default ScrollToTopAndBottom


