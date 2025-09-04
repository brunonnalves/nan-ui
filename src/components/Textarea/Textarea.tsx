import React, { TextareaHTMLAttributes, useState } from 'react';
import './Textarea.css';

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string;
  error?: string;
  touched?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'error' | 'success';
  helpText?: string;
  maxLength?: number;
  showCount?: boolean;
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  touched,
  size = 'medium',
  variant = 'default',
  helpText,
  maxLength,
  showCount = false,
  className = '',
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(props.value || '');
  const value = props.value !== undefined ? props.value : internalValue;
  const currentLength = String(value).length;
  const isOverLimit = maxLength ? currentLength > maxLength : false;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInternalValue(e.target.value);
    props.onChange?.(e);
  };

  const baseClass = 'nan-textarea';
  const sizeClass = size !== 'medium' ? `nan-textarea--${size}` : '';
  const variantClass = variant !== 'default' ? `nan-textarea--${variant}` : '';

  const textareaClasses = [baseClass, sizeClass, variantClass, className]
    .filter(Boolean)
    .join(' ');

  const labelClasses = ['nan-textarea-label', props.required ? 'required' : '']
    .filter(Boolean)
    .join(' ');

  const countClasses = [
    'nan-textarea-count',
    isOverLimit ? 'nan-textarea-count--limit' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const textareaId =
    props.id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className='nan-form-group'>
      {label && (
        <label htmlFor={textareaId} className={labelClasses}>
          {label}
        </label>
      )}

      <div className='nan-textarea-wrapper'>
        <textarea
          id={textareaId}
          className={textareaClasses}
          {...props}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
        />
      </div>

      {!!error && touched && <div className='nan-textarea-error'>{error}</div>}

      {helpText && !error && (
        <div className='nan-textarea-help'>{helpText}</div>
      )}

      {showCount && maxLength && (
        <div className={countClasses}>
          {currentLength} / {maxLength}
        </div>
      )}
    </div>
  );
};

export default Textarea;
