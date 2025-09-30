import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  isLoading = false,
  disabled = false,
  href,
  external = false,
  className = '',
  onClick,
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-space-blue-900 hover:bg-space-blue-800 text-white focus:ring-space-blue-500 shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-cyber-cyan-500 text-cyber-cyan-500 hover:bg-cyber-cyan-500 hover:text-white focus:ring-cyber-cyan-500',
    ghost: 'text-gray-600 dark:text-gray-300 hover:text-space-blue-900 dark:hover:text-cyber-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-800'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 1 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={combinedClasses}
      disabled={isLoading || disabled}
      onClick={onClick}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 1 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;