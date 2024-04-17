import React from 'react'

export const Footer = () => {
    const footerStyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
    }

  return (
    <div className = "bg-black opacity-80 text-light text-center" style={footerStyle}>
    Copyright &copy; Bon-Voyage.com
  </div>

  )
}
