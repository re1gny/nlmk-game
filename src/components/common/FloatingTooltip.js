import styled from '@emotion/styled';
import { Tooltip } from './Tooltip';

const Wrapper = styled(Tooltip)`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  transform: translate(-50%, -100%);
`;

export function FloatingTooltip(props) {
  return <Wrapper {...props} />;
}