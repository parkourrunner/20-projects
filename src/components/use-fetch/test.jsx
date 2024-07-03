import React from 'react'
import useFetch from '.'

function TestUseFetchHook() {
  const { data, error, loading } = useFetch("https://dummyjson.com/products", {});

  if (loading) return <h1>Loading, please wait...</h1>
  if (error) return <h1>Error happened, {error}</h1>

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {data && data.products && data.products.length
        ? data.products.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))
        : null}
    </div>
  )
}

export default TestUseFetchHook
