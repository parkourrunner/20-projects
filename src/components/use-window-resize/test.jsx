import useWindowResize from '.';

function TestUseWindowResize() {
  const { width, height } = useWindowResize();
  return (
    <div >
      <h1>Use Window resize Hook</h1>
      <p>
        width is {width}
      </p>
      <p>height is {height}</p>
    </div>
  )
}

export default TestUseWindowResize
