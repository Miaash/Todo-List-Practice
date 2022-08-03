import React, {useState} from 'react';
import AddMemo from './components/Users/AddMemo';
// import MemoList from './components/Users/MemoLIst';
import styled from 'styled-components';

const Title = styled.h3`
  text-align: center;
  color: white;
`

const App = () => {
  return (
    <div>
      <Title>
        <h1>🤍 To-do List 🤍</h1>
      </Title>
      <section>
       <AddMemo />
      </section>
      <section>
       {/* <MemoList />  */}
      </section>
    </div>
  );
}


export default App;
