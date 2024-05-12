import { animationMap } from '@/styles/framerMotion';
import AlertComponent from './alertComponent';
import CommentComponent from './commentComponent';
import Dimmed from './Dimmed';
import { motion } from 'framer-motion';

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
  }
};
