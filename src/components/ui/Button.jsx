import React from 'react'

const Button = ({children, variant = 'primary', className='', ...props}) => {
    const baseStyle = "btn";
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
    outline: "btn-outline",
  };
  return (
    <div  className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>{children}</div>
  )
}

export default Button