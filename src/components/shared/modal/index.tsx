import AlertComponent from './alertComponent';
import CommentComponent from './commentComponent';
import Dimmed from './Dimmed';

type ModalType = 'alert' | 'comment';

interface ModalProps {
  open?: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string;
  hasCancelButton?: boolean;
  onButtonClick: () => void;
  close?: () => void;
  type?: ModalType;
}

const Modal = ({ open, type = 'comment', ...props }: ModalProps) => {
  if (!open) return null;
  return <Dimmed>{renderComponent({ type, ...props })}</Dimmed>;
};

export default Modal;

const renderComponent = ({ type, ...props }: Omit<ModalProps, 'open'>) => {
  switch (type) {
    case 'alert':
      return <AlertComponent {...props} />;
    case 'comment':
      return <CommentComponent {...props} />;
  }
};
