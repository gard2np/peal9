import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

interface FormData {
  concern: string;
}

interface ConcernFormProps {
  onSubmit: (question: string) => void;
  onReset: () => void;
  disabled: boolean;
  question: string;
}

const BtnContainer = styled.div`
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 125px;
  margin : 0px 5px;
  background: #001f3f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
  font-weight: bold;

  &:hover {
    background: #004080;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ConcernForm: React.FC<ConcernFormProps> = ({ onSubmit, onReset, disabled, question }) => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmitHandler = (data: FormData) => {
    console.log(data);
    onSubmit(data.concern);
    reset();
    // 여기에 텔레그램 메시지 전송 로직을 추가할 수 있어
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Input
        {...register('concern', { required: true })}
        placeholder="고민을 입력하세요"
        disabled={disabled}
        defaultValue={question}
      />
      <BtnContainer>
        <Button type="submit" disabled={disabled}>고민 제출하기</Button>
        <Button onClick={onReset} disabled={!disabled}>리셋하기</Button>
      </BtnContainer>
    </Form>
  );
};

export default ConcernForm;
