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

const subMenuAnimate = {
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    display: 'block',
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const Modal = ({ open, type = 'alert', ...props }: ModalProps) => {
  if (!open) return null;
  return (
    <Dimmed>
      <motion.div
        initial="exit"
        animate={open ? 'enter' : 'exit'}
        variants={subMenuAnimate}
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
