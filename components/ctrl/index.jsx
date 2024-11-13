'use client'
import React from 'react'
import Btn from '../btn'



const BtnCtrl = ({setcontentchanger}) => {
  return (
    <>
        <Btn title={'laptop'} content={'laptop'} setcontentChanger={setcontentchanger}/>
        <Btn title={'mobile'} content={'mobile'} setcontentChanger={setcontentchanger}/>
        <Btn title={'tablet'} content={'tablet'} setcontentChanger={setcontentchanger}/>
    </>
  )
}

export default BtnCtrl

