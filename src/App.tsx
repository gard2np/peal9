import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f0f2f5;
  z-index: 1000;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f0f2f5;
  z-index: 1000;
  padding: 10px;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  flex: 1;
  margin-top: 60px; /* Header height */
  margin-bottom: 60px; /* Footer height */
  overflow-y: auto;
  padding: 120px;
`;

const Btn = styled.button`
  height: 40px;
  width: 125px;
  margin: 0px 5px;
  background: #001f3f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
  font-weight: bold;

  &:hover {
    background: #001f3f;
  }
`;

const App: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [question, setQuestion] = useState("");

  const handleSubmit = (question: string) => {
    setQuestion(question);
    setSubmitted(true);
  };

  const handleReset = () => {
    setQuestion("");
    setSubmitted(false);
  };

  const handleSupportClick = () => {
    window.open('https://naver.me/xdp5vMQp', '_blank');
  };

  return (
    <Router>
      <AppContainer>
        <Header>
          <h1>필구는 고민해결사</h1>
          <Home submitted={submitted} onSubmit={handleSubmit} onReset={handleReset} question={question} />
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact>
              <Home submitted={submitted} onSubmit={handleSubmit} onReset={handleReset} question={question} />
            </Route>
          </Switch>
        </Content>
        <Footer>
          <Btn onClick={handleSupportClick}>후원하기</Btn>
        </Footer>
      </AppContainer>
    </Router>
  );
};

export default App;
