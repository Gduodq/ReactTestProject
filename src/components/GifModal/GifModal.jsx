import { Button, Modal } from '@mui/material'
import { Frame } from 'components/Frame'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { strings } from 'utils/strings'

const useClasses = makeStyles({
  buttons: { backgroundColor: 'black' },
})

export const GifModal = ({ gifInfo, open, onClose, getGifByNumber }) => {
  const classes = useClasses()
  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <Frame flex column alignItems="center" height="100%" margin="50px 0 0 0" gap="10px">
          <img src={gifInfo && gifInfo.originalUrl} />
          <Frame flex row gap="5px">
            <Button className={classes.buttons} onClick={() => getGifByNumber(gifInfo.number - 1)}>
              {strings.abrevPrevious}
            </Button>
            <Button className={classes.buttons} onClick={onClose}>
              {strings.close}
            </Button>
            <Button className={classes.buttons} onClick={() => getGifByNumber(gifInfo.number + 1)}>
              {strings.next}
            </Button>
          </Frame>
        </Frame>
      </div>
    </Modal>
  )
}
