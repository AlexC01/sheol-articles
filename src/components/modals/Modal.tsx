"use client";

import { useState, useEffect, useCallback } from "react";
import Button from "../Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  loading?: boolean;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  loading,
  secondaryActionLabel
}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <div
      className="
    justify-center 
    items-center 
    flex 
    overflow-x-hidden 
    overflow-y-hidden
    fixed 
    inset-0 
    z-50 
    outline-none 
    focus:outline-none 
    bg-neutral-800/70"
    >
      <div
        className={`
          relative
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          2xl:w-1/4
          h-[650px]
          md:max-h-[800px]
          overflow-y-auto
          my-6
          mx-auto
          overflow-x-hidden
          translate
          duration-300
          border-0
          rounded-lg
          ${showModal ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
          `}
      >
        <div>
          <div
            className="
              translate
              border-0
              rounded-lg
              shadow-lg
              relative
              flex
              flex-col
              w-full
              bg-white
              outline-none
              focus:outline-none
            "
          >
            <div
              className="
              flex
              items-center
              p-6
              rounded-t
              justify-center
              relative
              border-b-[1px]
            "
            >
              <button onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-6 text-black">
                X
              </button>
              <div className="text-lg font-semibold text-black">{title}</div>
            </div>
            <div className="relative p-6 flex-auto">{body}</div>
            <div className="flex flex-col gap-2 p-6">
              <div className="flex flex-row items-center gap-4 w-full">
                {secondaryAction && secondaryActionLabel && (
                  <button className="btn relative w-full flex-1" disabled={disabled} onClick={handleSecondaryAction}>
                    {secondaryActionLabel}
                  </button>
                )}
                <Button
                  extraClasses=" relative w-full flex-1"
                  disabled={disabled}
                  onClick={handleSubmit}
                  label={actionLabel}
                  loading={loading}
                />
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
