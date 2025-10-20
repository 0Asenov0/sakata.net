declare module 'react-dino-game' {
  import { ComponentType } from 'react';
  interface DinoGameProps {
    width?: number;
    height?: number;
  }
  const DinoGame: ComponentType<DinoGameProps>;
  export default DinoGame;
}
