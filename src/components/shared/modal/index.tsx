import AlertComponent from './alertComponent';
import CommentComponent from './commentComponent';
import Dimmed from './Dimmed';
import QuestionComponent from './questionComponent/indext';
import { LanguageNames } from '@/consts/language';
import SettingComponent from './settingComponent';

type ModalType = 'alert' | 'comment' | 'question' | 'setting';

interface ModalProps {
  open?: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string;
  hasCancelButton?: boolean;
  onButtonClick: () => void;
  close?: () => void;
  type?: ModalType;
  code?: string;
  flag?: boolean;
  language?: LanguageNames;
}

const Modal = ({ open, type = 'alert', ...props }: ModalProps) => {
  if (!open) return null;

  return <Dimmed>{renderComponent({ type, open, ...props })}</Dimmed>;
};

export default Modal;

const renderComponent = ({ type, open, ...props }: ModalProps) => {
  switch (type) {
    case 'alert':
      return <AlertComponent open={open as boolean} {...props} />;
    case 'comment':
      return <CommentComponent open={open as boolean} {...props} />;
    case 'question':
      return <QuestionComponent open={open as boolean} {...props} />;
    case 'setting':
      return <SettingComponent open={open as boolean} {...props} />;
  }
};
