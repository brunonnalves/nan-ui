import React, { InputHTMLAttributes, useState } from 'react';
import { applyMask, cleanMaskedValue } from '../../utils/mask';
import { MaskTypes } from '../../types/maskTypes';
import './Input.css';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  touched?: boolean;
  mask?: MaskTypes;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'error' | 'success';
  helpText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  clearable?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  touched,
  mask,
  size = 'medium',
  variant = 'default',
  helpText,
  leftIcon,
  rightIcon,
  clearable = false,
  onChange,
  value,
  className = '',
  ...props
}) => {
  const [rawValue, setRawValue] = useState(
    value ? applyMask(String(value), mask) : ''
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Se há máscara, permite apenas números
    if (mask) {
      inputValue = inputValue.replace(/[^0-9]/g, '');
    }

    const formatted = applyMask(inputValue, mask);
    setRawValue(formatted);

    // Se existir onChange, repassa apenas os números limpos para o formik
    if (onChange) {
      onChange({
        ...e,
        target: {
          ...e.target,
          value: !mask
            ? inputValue
            : mask !== 'datetime'
              ? cleanMaskedValue(formatted)
              : inputValue,
          name: props.name!,
        },
      });
    }
  };

  const handleClear = () => {
    setRawValue('');
    if (onChange) {
      onChange({
        target: { name: props.name!, value: '' },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Se há máscara, permite apenas números e teclas de controle
    if (mask) {
      const allowedKeys = [
        'Backspace',
        'Delete',
        'Tab',
        'Escape',
        'Enter',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
        'Home',
        'End',
        'PageUp',
        'PageDown',
      ];

      const isNumber = /^[0-9]$/.test(e.key);
      const isControlKey = allowedKeys.includes(e.key);
      const isCtrlA = e.ctrlKey && e.key === 'a';
      const isCtrlC = e.ctrlKey && e.key === 'c';
      const isCtrlV = e.ctrlKey && e.key === 'v';
      const isCtrlX = e.ctrlKey && e.key === 'x';
      const isCtrlZ = e.ctrlKey && e.key === 'z';

      if (
        !isNumber &&
        !isControlKey &&
        !isCtrlA &&
        !isCtrlC &&
        !isCtrlV &&
        !isCtrlX &&
        !isCtrlZ
      ) {
        e.preventDefault();
      }
    }
  };

  const baseClass = 'nan-input';
  const sizeClass = `nan-input--${size}`;
  const variantClass = variant !== 'default' ? `nan-input--${variant}` : '';
  const hasLeftIcon = leftIcon ? 'nan-input--with-icon' : '';

  const inputClasses = [
    baseClass,
    sizeClass,
    variantClass,
    hasLeftIcon,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const labelClasses = ['nan-input-label', props.required ? 'required' : '']
    .filter(Boolean)
    .join(' ');

  const inputId =
    props.id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className='nan-form-group'>
      {label && (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
        </label>
      )}

      <div className='nan-input-wrapper'>
        {leftIcon && (
          <span className='nan-input-icon nan-input-icon--left'>
            {leftIcon}
          </span>
        )}

        <input
          id={inputId}
          className={inputClasses}
          {...props}
          value={rawValue || value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        {rightIcon && (
          <span className='nan-input-icon nan-input-icon--right'>
            {rightIcon}
          </span>
        )}

        {clearable && (rawValue || value) && (
          <button
            type='button'
            className='nan-input-clear'
            onClick={handleClear}
            aria-label='Limpar campo'
          >
            ✕
          </button>
        )}
      </div>

      {!!error && touched && <div className='nan-input-error'>{error}</div>}

      {helpText && !error && <div className='nan-input-help'>{helpText}</div>}
    </div>
  );
};

export default Input;
