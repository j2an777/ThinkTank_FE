import { AnimatePresence } from 'framer-motion';
import Modal from '../components/shared/modal';
import {
  ComponentProps,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

type ModalProps = ComponentProps<typeof Modal>;
type ModalOptions = Omit<ModalProps, 'open'>;

export interface ModalContextValue {
  open: (option: ModalOptions) => void;
}

export const ModalContext = createContext<ModalContextValue | undefined>(undefined);

const defaultValue: ModalProps = {
  open: false,
  title: null,
  description: null,
  onButtonClick: () => {},
  close: () => {},
};

export const ModalContextProvider = ({ children }: PropsWithChildren) => {
  const [modalState, setModalState] = useState<ModalProps>(defaultValue);
  const $portal_root = document.getElementById('root-portal');
  const close = useCallback(() => {
    setModalState(defaultValue);
  }, []);
  const open = useCallback(
    ({ onButtonClick, ...options }: ModalOptions) => {
      setModalState({
        ...options,
        onButtonClick: () => {
          close();
          onButtonClick();
        },
        close,
        open: true,
      });
    },
    [close],
  );
  const values = useMemo(() => ({ open }), [open]);
  return (
    <ModalContext.Provider value={values}>
      {children}
      {$portal_root
        ? createPortal(
            <AnimatePresence>
              {modalState.open && <Modal {...modalState} />}
            </AnimatePresence>,
            $portal_root,
          )
        : null}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const values = useContext(ModalContext);

  if (values == null) {
    throw new Error('use in ModalContext');
  }
  return values;
};
