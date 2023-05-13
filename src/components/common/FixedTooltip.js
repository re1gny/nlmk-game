import styled from '@emotion/styled';
import { Tooltip } from './Tooltip';

const Wrapper = styled(Tooltip)`
  position: absolute;
  top: ${({ position }) => position === 'top' ? '42px' : 'auto'};
  bottom: ${({ position }) => position === 'bottom' ? '42px' : 'auto'};
  left: 50%;
  transform: translateX(-50%);
  padding: 40px 20px;
  width: calc(100% - 40px);
`;

export function FixedTooltip(props) {
  return <Wrapper {...props} withTail={false} />;
}