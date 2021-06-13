import React, { ReactElement, ReactNode, useState } from 'react';
import './App.css';

// Conventional props
function Heading({title}: {title: string}) {
  return <h1>{title}</h1>
}

function HeadingWithContent({children} : {children: ReactNode}): ReactElement {
  return <h1>{children}</h1>
}

// Default props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}
type ContainerProps = {children: ReactNode} & typeof defaultContainerProps

function Container ({ heading, children} : ContainerProps): ReactElement {
  return(
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  )
}

Container.defaultProps = defaultContainerProps

// Functional props
function TextWithNumber({
  header,
  children,
} : {
  header?: (num: number) => ReactNode
  children: (num: number) => ReactNode
}) {
  const [state, setState] = useState<number>(1)
  return (
    <div>
      {header && <h2>{header?.(state)}</h2>}
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState(state + 1)}>Add</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Heading title="Hello World!" />
      <HeadingWithContent>
        <strong>Hello from Heading with Content!</strong>
      </HeadingWithContent>
      <Container>Foo</Container>
      <TextWithNumber>{(num: number) => <div>Today's number is {num}</div>}</TextWithNumber>
    </div>
  );
}

export default App;
