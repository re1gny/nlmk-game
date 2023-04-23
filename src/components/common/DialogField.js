import styled from '@emotion/styled';
import dialogTail from '../../assets/icons/dialorTail.svg';

const Wrapper = styled.div`
  height: auto;
  width: 100%;
`;

const TextWrapper = styled.div`
  position: relative;
  padding: 16px 8px;
  min-height: 60px;
  height: auto;
  background: #FFFFFF;
  border-radius: 10px;
  border: 1px solid #003399;
  text-align: center;
  color: #003399;
`;

const DialogTail = styled.div`
  position: absolute;
  width: 30px;
  height: 22px;
  bottom: -21.5px;
  right: 27px;
  background-image: url(${dialogTail});
  background-repeat: no-repeat;
  background-size: cover;
`;


export const DialogField = (props) => {
    return (
        <Wrapper className={props.className}>
            <TextWrapper ref={props.innerRef}>
                {props.children}
                <DialogTail/>
            </TextWrapper>
        </Wrapper>
    )
}