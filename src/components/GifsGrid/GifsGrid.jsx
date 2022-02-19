import React, { Fragment } from 'react'
import { GifCard } from './GifCard'
import { makeStyles } from '@mui/styles'

const useClasses = makeStyles({
  gifsGrid: {
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: '200px 200px 200px',
    gap: '10px',
  },
})

export const GifsGrid = ({ gifsInfo, openModal }) => {
  const classes = useClasses()
  return (
    <div className={classes.gifsGrid}>
      {gifsInfo.map((gifInfo) => (
        <Fragment key={gifInfo.previewUrl}>
          <GifCard gifInfo={gifInfo} openModal={openModal} />
        </Fragment>
      ))}
    </div>
  )
}
