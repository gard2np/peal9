import React from 'react';
import CardGrid from '../components/CardGrid';
import ConcernForm from '../components/CencernForm';
import styled from 'styled-components';

interface HomeProps {
  submitted: boolean;
  onSubmit: (question: string) => void;
  onReset: () => void;
  question: string;
}

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const Message = styled.div`
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Home: React.FC<HomeProps> = ({ submitted, onSubmit, onReset, question }) => {
  return (
    <Container>
      <FormContainer>
        <ConcernForm onSubmit={onSubmit} onReset={onReset} disabled={submitted} question={question} />
      </FormContainer>
      {submitted && <Message>카드 1장 2번 클릭 = 필구의 답변</Message>}
      {submitted && <CardGrid />}
    </Container>
  );
};

export default Home;
