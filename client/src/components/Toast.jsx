import { useToast } from '../context/ToastContext';

const Toast = () => {
  const { toast } = useToast();

  if (!toast.visible) {
    return null;
  }

  return (
    <div className="toast-container">
      <div className={`toast ${toast.type}`}>{toast.message}</div>
    </div>
  );
};

export default Toast;
