import styled from 'styled-components';
import {Watch, Heart} from 'react-feather';
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

const Title = styled.h1`
  color: white;
  margin: 0;

  svg {
    vertical-align: bottom;
  }
`;

const Credits = styled.p`
  color: white;
  margin: 0;
  
  svg {
    vertical-align: bottom;
  }

  a {
    color: white;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>
        <Watch color='white' size={38} /> Gui Clock <Watch color='white' size={38} />
      </Title>
      <Clock/>
      <Credits>
        Built with <Heart color='white' size={18} /> by <a href='https://github.com/qix1986' target='_blank' title='Juca github page'>Juca</a>
      </Credits>
    </Wrapper>
  );
}

export default App;
