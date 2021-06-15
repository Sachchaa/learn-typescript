import React from 'react';
import './App.css';
import { Container, Heading, HeadingWithContent, List, TextWithNumber } from './components';
import UseEffectHook from './UseEffectHook';
import UseStateHook from './UseStateHook';

function App() {
  return (
    <div className="App">
      <Heading title="Hello World!" />
      <HeadingWithContent>
        <strong>Hello from Heading with Content!</strong>
      </HeadingWithContent>
      <Container>Foo</Container>
      <TextWithNumber>{(num: number) => <div>Today's number is {num}</div>}</TextWithNumber>
      <List
        items={["Sachin", "Kanishka", "Imara", "Don"]}
        render={(item: string) => <div>{item.toLocaleLowerCase()}</div>}
      ></List>
      <h2>Use State Hook</h2>
      <UseStateHook />

      <h2>Use Effect Hook</h2>
      <UseEffectHook />
    </div>
  );
}

export default App;
