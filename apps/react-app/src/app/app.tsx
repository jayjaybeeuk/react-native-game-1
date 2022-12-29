import styled from 'styled-components';
import { GameModule } from '@react-app/game-module';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <GameModule />
    </StyledApp>
  );
}

export default App;
