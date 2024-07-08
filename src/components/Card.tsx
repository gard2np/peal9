import React from 'react';
import styled, { css } from 'styled-components';

interface CardProps {
  text: string;
  onClick: () => void;
  flipped: boolean;
  selected: boolean;
}

const CardContainer = styled.div<{ flipped: boolean, selected: boolean }>`
  perspective: 900px;
  width: 280px;
  height: 140px;
  margin-bottom: -55px;
  border-radius: 18px;
  cursor: pointer;
  transition: transform 0.6s, background-color 0.6s, z-index 0.6s, box-shadow 0.6s;
  position: relative;
  background-color: ${(props) => (props.selected ? '#001f3f' : '#add8e6')};
  z-index: ${(props) => (props.selected ? 10 : 1)};
  transform: ${(props) => (props.selected || props.flipped ? 'scale(1.1)' : 'none')};
  box-shadow: ${(props) => (props.selected || props.flipped ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.1)')};
  border: 3px solid ${(props) => (props.selected || props.flipped ? '#ff009d' : '#ffffff')};

  ${(props) =>
    props.flipped &&
    css`
      background-color: #ffffff;
      color: #001f3f;
    `}
`;



const CardInner = styled.div<{ flipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.flipped ? 'rotateY(180deg)' : 'none')};
  border-radius: 18px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardFace = styled.div<{ front?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  box-sizing: border-box;
  text-align: center;

  ${(props) =>
    props.front
      ? css`
          background-color: #76889a;
          color: white;
        `
      : css`
          background-color: #001f3f;
          color: #ffd700;
          transform: rotateY(180deg);
        `}
`;

const Logo = styled.img`
  position: absolute;
  right: 80px;
  bottom: 3px;
  margin-bottom: -20px;
  width: 120px;
  height: 120px;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 10px;
  width: 60%;
  font-weight: bold;
`;

const Card: React.FC<CardProps> = ({ text, onClick, flipped, selected }) => {
  return (
    <CardContainer flipped={flipped} selected={selected} onClick={onClick}>
      <CardInner flipped={flipped}>
        <CardFace>
          <TextContainer>
            {text}
          </TextContainer>
            {flipped && <Logo src="/logo192.png" alt="logo" />}
        </CardFace>
      </CardInner>
    </CardContainer>
  );
};

export default Card;
