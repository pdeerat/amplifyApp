import React, { ReactNode } from 'react'
import './AppHeader.css'
//import logo from './logo.png'
//import App from './App'

export default function AppHeader(props: { rightContent?: ReactNode }) {
  return (
    <div className="AppHeader">
      <img alt="" src={logo} />
      <h1>atPOS-PromptPay</h1>
      <div className="AppHeaderのrightContent">{props.rightContent}</div>
    </div>
  )
}
