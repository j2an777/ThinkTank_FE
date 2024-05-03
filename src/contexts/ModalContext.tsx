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

interface ModalContextValue {
  open: (option: ModalOptions) => void;
}

const Context = createContext<ModalContextValue | undefined>(undefined);

const defaultValue: ModalProps = {
  open: false,
  title: null,
  description: null,
  onButtonClick: () => {},
  close: () => {},
  type: 'alert',
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
    <Context.Provider value={values}>
      {children}
      {$portal_root ? createPortal(<Modal {...modalState} />, $portal_root) : null}
    </Context.Provider>
  );
};

export const useModalContext = () => {
  const values = useContext(Context);

  if (values == null) {
    throw new Error('use in ModalContext');
  }
  return values;
};
