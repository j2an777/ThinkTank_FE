import { animationMap } from '@/styles/framerMotion';
import AlertComponent from './alertComponent';
import CommentComponent from './commentComponent';
import Dimmed from './Dimmed';
import { motion } from 'framer-motion';
import QuestionComponent from './questionComponent/indext';
import { LanguageNames } from '@/consts/language';

type ModalType = 'alert' | 'comment' | 'question';

interface ModalProps {
  open?: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string;
  hasCancelButton?: boolean;
  onButtonClick: () => void;
  close?: () => void;
  type?: ModalType;
  answer?: string;
  language?: LanguageNames;
}

const Modal = ({ open, type = 'alert', ...props }: ModalProps) => {
  if (!open) return null;

  return (
    <Dimmed>
      <motion.div
        initial="exit"
        animate={open ? 'enter' : 'exit'}
        variants={animationMap.subMenuAnimate}
      >
        {renderComponent({ type, ...props })}
      </motion.div>
    </Dimmed>
  );
};

export default Modal;

const renderComponent = ({ type, ...props }: Omit<ModalProps, 'open'>) => {
  switch (type) {
    case 'alert':
      return <AlertComponent {...props} />;
    case 'comment':
      return <CommentComponent {...props} />;
    case 'question':
      return <QuestionComponent {...props} />;
  }
};
