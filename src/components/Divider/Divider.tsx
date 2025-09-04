import React from 'react';
import './Divider.css';

interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'solid' | 'dashed' | 'dotted';
  orientation?: 'horizontal' | 'vertical';
  size?: 'thin' | 'medium' | 'thick';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  text?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  variant = 'solid',
  orientation = 'horizontal',
  size = 'medium',
  color = 'default',
  text,
  className = '',
  ...props
}) => {
  const baseClass = 'nan-divider';
  const variantClass = `nan-divider--${variant}`;
  const orientationClass = `nan-divider--${orientation}`;
  const sizeClass = `nan-divider--${orientation}-${size}`;
  const colorClass = color !== 'default' ? `nan-divider--${color}` : '';
  const textClass = text ? 'nan-divider--with-text' : '';

  const dividerClasses = [
    baseClass,
    variantClass,
    orientationClass,
    sizeClass,
    colorClass,
    textClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (text) {
    return (
      <div className={dividerClasses} {...props}>
        <span className='nan-divider-text'>{text}</span>
      </div>
    );
  }

  return <hr className={dividerClasses} {...props} />;
};

export default Divider;
