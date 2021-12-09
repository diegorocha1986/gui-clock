import styled from 'styled-components';
import Clock from './components/Clock';

const Wrapper = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  min-height: 100%;
  position: relative;
  background: #282c34;
  padding: 1rem;
`;

const Title = styled.h1 `
  color: white;
  margin: 0;
`;

function App() {
  return (
    <Wrapper>
      <Title>Gui Clock</Title>
      <Clock/>
    </Wrapper>
  );
}

export default App;
