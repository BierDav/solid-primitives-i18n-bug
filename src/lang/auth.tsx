export default {
  test: (name: string, click: () => void) => (
    <>
      Hello<b>World</b> {name}!<button onClick={click}>Click Me</button>
    </>
  ),
}