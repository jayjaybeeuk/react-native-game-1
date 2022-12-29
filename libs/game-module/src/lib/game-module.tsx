import { useRef, useEffect } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GameModuleProps {}

const StyledGameModule = styled.div`
  color: pink;
`;

export function GameModule(props: GameModuleProps) {
  //1. useRef to get the Canvas from the render
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //2. useEffect is used to affect the canvas once the ref has been got
  useEffect(() => {
    //3. We need to get the 'current' from the ref
    const canvas = canvasRef.current;
    if (canvas != null) {
      //4. Get the context
      const ctx = canvas.getContext('2d');
      if (ctx != null) {
        //5. Apply the canvas changes to give us our hello world
        ctx.font = '34px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#000000';
        ctx.fillText('Hello World', 150, 50);
      }
    }
  }, [canvasRef]);

  return (
    <StyledGameModule>
      <canvas ref={canvasRef} width="300" height="100"></canvas>
    </StyledGameModule>
  );
}

export default GameModule;
