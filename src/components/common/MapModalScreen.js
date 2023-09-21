import { Modal } from './Modal';
import { ModalInfoPanel } from './ModalInfoPanel';
import { Map } from './Map';
import { Button } from './Button';
import styled from '@emotion/styled';

const Info = styled(ModalInfoPanel)`
  padding: 40px 20px;
`;

const ButtonStyled = styled(Button)`
  margin-top: 16px;
  padding-top: 28px;
  padding-bottom: 28px;
`;

export const MapModalScreen = ({text, title, onNext, children, buttonText = 'ВПЕРЕД', modalKey, renderContent}) => {
    return <>
        <Map />
        <Modal modalKey={modalKey} opacity={'0.6'}>
            {renderContent ? renderContent({title, text, children, buttonText, onNext}) : (
              <>
                <Info title={title}>
                  {text}
                </Info>
                {children}
                <ButtonStyled onClick={onNext}>{buttonText}</ButtonStyled>
              </>
            )}
        </Modal>
    </>
}