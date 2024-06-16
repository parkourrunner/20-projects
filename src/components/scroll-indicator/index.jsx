import React, { useEffect, useState } from 'react'
import "./style.css"
function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [errMessage, setErrMessage] = useState("");
  const [scrollPrecent, setScrollPercent] = useState(0);
  async function fetchData(getUrl) {
    try {
      setLoading(true)
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products?.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      setErrMessage(error)
    }
  }

  function handleScroll() {

    const howMuch = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrollPercent(howMuch / height * 100)
  }
  useEffect(() => {
    fetchData(url)
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", () => { });
  }, []);

  if (errMessage) {
    return <div>Error ! {errMessage}</div>;
  }

  if (loading) {
    return <div>Loading data ! Pleaae wait</div>;
  }

  return (
    <div>
      <div className='top-container'>
        <h1>Custom Scroll Indicator</h1>
        <div className='scroll-progress-tracking-container'>
          <div className='current-progress-bar' style={{ width: `${scrollPrecent}%` }}></div>
        </div>
      </div>
      <div className='data-container'>
        {data && data.length > 0 ?
          data.map(item => <p key={item.id}>{item.title}</p>)
          : null}
      </div>
    </div>
  )
}

export default ScrollIndicator
