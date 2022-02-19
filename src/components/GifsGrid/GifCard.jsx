import React from 'react'

export const GifCard = ({ gifInfo, openModal }) => {
  const { previewUrl } = gifInfo
  return (
    <div onClick={() => openModal(gifInfo)}>
      <img src={previewUrl} width="200" />
    </div>
  )
}
