import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileComponent from './ProfileComponent'
import { useRecoilState, useRecoilValue } from 'recoil'
import { profileAtom } from './atoms'

function App() {
  const [allProfiles, updateAllProfiles] = useRecoilState(profileAtom);

  useEffect(() => {
    updateAllProfiles((old) => [
      ...old,
      
    ])
  }, [])

  return (
    allProfiles.map((each) => {
      return <ProfileComponent key={allProfiles.indexOf(each)} profile={each} />
    })
  )
}

export default App
