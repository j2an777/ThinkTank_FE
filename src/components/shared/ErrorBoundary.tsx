import { ModalContext, ModalContextValue } from '@/contexts/ModalContext';
import { AxiosError } from 'axios';
import { Component, PropsWithChildren } from 'react';

interface ErrorBoundaryState {
  error: Error | AxiosError | null;
  errorCase: 'unauthorized' | 'get' | 'Bad Request' | null;
}

class ErrorBoundary extends Component<
  PropsWithChildren<{ navigate: (path: string) => void }>,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren<{ navigate: (path: string) => void }>) {
    super(props);
    this.state = { error: null, errorCase: null };
    this.captureReject = this.captureReject.bind(this);
  }

  resetErrorBoundary = () => {
    this.setState({ error: null, errorCase: null });
  };

  static contextType = ModalContext;
  componentDidMount() {
    window.addEventListener('unhandledrejection', this.captureReject);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.captureReject);
  }

  captureReject(e: PromiseRejectionEvent) {
    const { reason } = e;
    if (reason && reason.response) {
      const status = reason.response.status;
      switch (status) {
        case 400:
          return this.setState({ error: reason.response, errorCase: 'Bad Request' });
        case 401:
          return this.setState({ error: reason.response, errorCase: 'unauthorized' });
      }
    }
  }

  render() {
    const { error, errorCase } = this.state;
    const { navigate } = this.props;
    if (error) {
      const { open } = this.context as ModalContextValue;
      const errorMessage =
        error instanceof AxiosError && error.response
          ? error.response.data.message || '알 수 없는 에러가 발생했습니다.'
          : '알 수 없는 에러가 발생했습니다.';
      if (errorCase === 'Bad Request') {
        open({
          onButtonClick: () => this.resetErrorBoundary(),
          title: '빈 값을 확인해주세요',
          description: errorMessage,
          type: 'alert',
          buttonLabel: '확인',
        });
      } else if (errorCase === 'unauthorized') {
        open({
          onButtonClick: () => {
            navigate('/login');
            this.resetErrorBoundary();
          },
          title: '로그인 페이지 이동',
          description: '로그인 후 이용 가능한 서비스입니다.',
          type: 'alert',
          buttonLabel: '이동',
          hasCancelButton: true,
        });
      }
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
