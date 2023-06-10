import styled from '@emotion/styled';
import tail from '../../assets/icons/tooltipTail.svg';
import { Panel } from './Panel';
import { Text } from './Text';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { useRef } from 'react';

const Wrapper = styled(Panel)`
  position: relative;
  display: inline-flex;
  background: #FFFFFF;
  border: 2px solid #002366;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 16px;
  max-width: 100%;
  animation: appear 0.2s both;
  z-index: 1000;

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Content = styled(Text)`
  color: #003399;
`;

const Icon = styled.img`
  position: absolute;
  top: 0;
  right: 8px;
  transform: translateY(-50%);
`;

const Tail = styled.div`
  position: absolute;
  width: 36px;
  height: 35px;
  bottom: 1px;
  left: 50%;
  transform: translate(-50%, 100%);
  background-image: url(${tail});
  background-repeat: no-repeat;
  background-size: cover;
`;

export function Tooltip({ className, children, withTail = true, icon, onClose }) {
  const wrapperRef = useRef();

  useOnClickOutside(wrapperRef, onClose);

  return (
    <Wrapper ref={wrapperRef} className={className}>
      <Icon src={icon} alt="" />
      <Content>{children}</Content>
      {withTail && <Tail />}
    </Wrapper>
  )
}