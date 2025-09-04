// react
import React, { InputHTMLAttributes } from 'react';
import './Radio.css';

interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'error' | 'success';
  className?: string;
}

const Radio: React.FC<RadioProps> = ({
  label,
  description,
  size = 'medium',
  variant = 'default',
  className = '',
  ...props
}) => {
  const baseClass = 'nan-radio';
  const sizeClass = size !== 'medium' ? `nan-radio--${size}` : '';
  const variantClass = variant !== 'default' ? `nan-radio--${variant}` : '';

  const radioClasses = [baseClass, sizeClass, variantClass, className]
    .filter(Boolean)
    .join(' ');

  const labelClasses = ['nan-radio-label', props.required ? 'required' : '']
    .filter(Boolean)
    .join(' ');

  const inputId =
    props.id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className='nan-radio-wrapper'>
      <input id={inputId} type='radio' className={radioClasses} {...props} />
      {label && (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
        </label>
      )}
      {description && (
        <div className='nan-radio-description'>{description}</div>
      )}
    </div>
  );
};

export default Radio;
