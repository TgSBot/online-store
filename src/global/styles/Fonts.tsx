import { createGlobalStyle } from 'styled-components';
import IntroBold from '../../assets/fonts/Intro-Bold.ttf';
import IntroBook from '../../assets/fonts/Intro-Book.ttf';
import IntroRegular from '../../assets/fonts/Intro-Regular.ttf';

export default createGlobalStyle`
@font-face {
  font-family: Intro-Bold;
  src: url(${IntroBold});
}
@font-face {
  font-family: Intro-Book;
  src: url(${IntroBook});
}
@font-face {
  font-family: Intro-Regular;
  src: url(${IntroRegular});
}
`;
