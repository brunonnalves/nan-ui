import React, { InputHTMLAttributes } from 'react';
import './Checkbox.css';

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  description,
  size = 'medium',
  className = '',
  ...props
}) => {
  const baseClass = 'nan-checkbox';
  const sizeClass = size !== 'medium' ? `nan-checkbox--${size}` : '';

  const checkboxClasses = [baseClass, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  const labelClasses = ['nan-checkbox-label', props.required ? 'required' : '']
    .filter(Boolean)
    .join(' ');

  const inputId =
    props.id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className='nan-checkbox-wrapper'>
      <input
        id={inputId}
        type='checkbox'
        className={checkboxClasses}
        {...props}
      />
      {label && (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
        </label>
      )}
      {description && (
        <div className='nan-checkbox-description'>{description}</div>
      )}
    </div>
  );
};

export default Checkbox;
