import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }

  * {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
  background: #fff9f9;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  width: 800px;
  display: flex;
  background: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #efefef;
  padding: 50px 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  width: 100%;
  border: 2px solid #efefef;
`;

export const Button = styled.button`
  background: #07ef90;
  font-weight: bold;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

export const SecondaryButton = styled(Button)`
  background: #3267eb;
  padding: 8px 24px;
  font-size: 16px;
`;

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  margin-top: 30px;
`;

export const Side = styled.div``;
