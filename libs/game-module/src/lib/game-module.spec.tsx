import { render } from '@testing-library/react';

import GameM from './game-module';

describe('GameM', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameM />);
    expect(baseElement).toBeTruthy();
  });
});
