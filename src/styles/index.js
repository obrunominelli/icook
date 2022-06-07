import palette from './palette';
import styled from 'styled-components';

const Container = styled.main `
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.secondary};
  margin: auto;
  width: 100vw;
`;

const Wrapper = styled.article `
  display: flex;
  flex-direction: column;
  background-color: ${palette.secondary};
  align-items: center;
  justify-content: center;
  color: ${palette.accent};
  margin: 0.5rem;
  padding: 0.5rem;
  width: 100vw;
`;

const Block = styled.section `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 3.75rem;
  width: 100%;

  & > a {
    margin: 1rem;
    text-align: center;
    text-decoration: none;
    color: ${palette.accent};
    font-size: 1.5rem;
    font-weight: 700;
    width: 50vw;
  }

  & > a > img {
    width: 5rem;
  }
`;

const Title = styled.h1 `
  border-top: 0.0625rem solid ${palette.accent};
  border-bottom: 0.0625rem solid ${palette.accent};
  color: ${palette.primary};
  font-size: 1.5rem;
  text-align: center;
  line-height: 3rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const Row = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 0.5rem 0;
  width: 100%;

  & > a {
    margin: 0.25rem;
    text-align: center;
    text-decoration: none;
    color: ${palette.accent};
    width: 50vw;
  }

  & > a > img {
    width: 5rem;
  }
`;

const Logo = styled.img `
  min-width: 10%;
  max-width: 70%;
  margin: 2rem;
`;

const Form = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85vw;
`;

const Input = styled.input `
  border: 0.0625rem solid ${palette.accent};
  border-radius: 0.25rem;
  background-color: ${palette.secondary};
  color: ${palette.accent};
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem 1rem;
  margin-bottom: 0.75rem;
  transition: 1s;
  width: 100%;

  &:disabled {
    display: none;
  }
`;

const Select = styled.select `
  background-color: ${palette.secondary};
  border: 0.0625rem solid ${palette.accent};
  border-radius: 0.25rem;
  color: ${palette.accent};
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem 1rem;
  margin-bottom: 0.75rem;
  transition: 1s;
  width: 100%;
`;

const Button = styled.button `
  background-color: ${palette.accent};
  border: none;
  border-radius: 0.25rem;
  color: ${palette.secondary};
  font-weight: 700;
  font-size: 1.25rem;
  padding: 1rem 2rem;
  margin: 0.25rem 1rem;
  width: 100%;
  transition: 1s;

  &:disabled {
    background-color: ${palette.primary};
    color: ${palette.accent};
  }
`;

const Card = styled.figure `
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${palette.primary};
  border: 0.0625rem solid ${palette.primary};
  color: ${palette.accent};
  border-radius: 0.8rem;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  transition: 0.5s;
  width: 100%;

  & > figcaption > h3 {
    font-size: 1.5rem;
    margin: auto;
    padding: 0.5rem;
    width: 100%;
  }

  & > img {
    border-radius: 0.8rem;
    width: 100%;
  }

  &:hover {
    background-color: ${palette.accent};
    border: 0.0625rem solid ${palette.accent};
    color: ${palette.secondary}
  }

  @media screen and (min-width: 576px) {
    min-height: 11rem;
  };
`;

const Recipe = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;
  width: 50vh;

  & > p,
  & > li {
    line-height: 1.5;
    text-indent: 1rem;
    text-align: justify;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;

const Thumbnail = styled.figure `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
  & > img {
    border-radius: 0.8rem;
    margin-bottom: 1rem;
    width: 100%;
  };

  & > figcaption {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  };

  & > figcaption > ${Title} {
    border-bottom: none;
    font-size: 2rem;
    margin: 0;
  }

  & > figcaption > ${Row} > img {
    width: 2rem;
  }
`;

const SearchBar = styled.form `
  width: 100%
`;

const Header = styled.header `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  background-color: ${palette.secondary};
  padding: 0.25rem 0.75rem;
  width: 100vw;

  & section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 85vw;
  }

  & section > img {
    width: 7.5rem;
    max-width: 20rem;
  };

  & section > div {
    margin: none;
    width: fit-content;
  }

  & section > div > img {
    margin: 0.5rem;
    width: 2rem;
  }
`;

const Footer = styled.footer `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${palette.secondary};
  padding: 0.25rem 0.75rem;
  position: fixed;
  bottom: 0;
  width: 100vw;

  & > a > img {
    margin: 0.5rem;
    width: 2rem;
  }
`;

export {
  Container,
  Wrapper,
  Block,
  Title,
  Row,
  Logo,
  Form,
  Input,
  Select,
  Button,
  Card,
  Recipe,
  Thumbnail,
  SearchBar,
  Header,
  Footer,
};