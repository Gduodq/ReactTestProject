import React, { useState, useCallback } from 'react'
import { Button, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Frame } from 'components/Frame'
import { strings } from 'utils/strings'
import axios from 'axios'
import { pathsAPI } from 'utils/pathsAPI'
import { GIPHY_API_KEY } from 'utils/giphyAPIKey'
import { getGifInfo } from 'utils/getGifInfo'
import { GifsGrid } from 'components/GifsGrid'
import { GifModal } from 'components/GifModal'
import 'App.css'

const defaultOffsetStep = 9

const useClasses = makeStyles({
  searchBar: { width: 300 },
})

export const App = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchOffset, setSearchOffset] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState(null)
  const [gifs, setGifs] = useState([])
  const classes = useClasses()
  const searchAPI = useCallback(
    async (searchQuery, params) => {
      const url = pathsAPI.search
      const requestParams = { q: searchQuery, api_key: GIPHY_API_KEY, limit: defaultOffsetStep, ...params }
      const res = await axios.get(url, { params: requestParams })
      const gifsInfo = res.data.data.map(getGifInfo(searchOffset))
      return gifsInfo
    },
    [searchOffset],
  )
  const searchAPIAndSetGifs = useCallback(
    async (searchQuery, params) => {
      const gifsInfo = await searchAPI(searchQuery, params)
      setGifs(gifsInfo)
    },
    [searchOffset],
  )
  const changeOffset = useCallback(
    async (nextOffset) => {
      if (nextOffset < 0) setSearchOffset(0)
      else setSearchOffset(nextOffset)
      await searchAPIAndSetGifs(searchInput, { offset: nextOffset })
    },
    [searchInput],
  )
  const openModal = useCallback((actualGifInfo) => {
    setModalData(actualGifInfo)
    setModalOpen(true)
  }, [])
  const getGifByNumber = useCallback(async (gifNumber) => {
    const gifInfo = await searchAPI(searchInput, { offset: gifNumber, limit: 1 })[0]
    setModalData(gifInfo)
  }, [])
  return (
    <Frame flex column width="90%" alignItems="center" margin="5% 5% 0 5%" gap="30px">
      <Frame flex row gap="10px">
        <TextField
          placeholder={strings.searchInput}
          className={classes.searchBar}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button onClick={() => searchAPIAndSetGifs(searchInput, { offset: searchOffset })}>Search</Button>
      </Frame>
      <GifsGrid gifsInfo={gifs} openModal={openModal} />
      <Frame flex row justifyContent="center">
        <Button disabled={searchOffset === 0} onClick={() => changeOffset(searchOffset - defaultOffsetStep)}>
          {strings.abrevPrevious}
        </Button>
        <Button onClick={() => changeOffset(searchOffset + defaultOffsetStep)}>Next</Button>
      </Frame>
      <GifModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        gifInfo={modalData}
        getGifByNumber={getGifByNumber}
      />
    </Frame>
  )
}
