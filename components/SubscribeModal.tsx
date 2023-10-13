"use client"

import Modal from './Modal'
import React from 'react'

const SubscribeModal = () => {
  return (
    <Modal 
      title="Only for premium users"
      description='Listen to music with Spotify Premium'
      isOpen 
      onChange={() => {}}
    >Subscription</Modal>
  )
}

export default SubscribeModal