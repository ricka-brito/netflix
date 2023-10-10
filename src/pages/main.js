import React from 'react'
import Header from "../template/Header";
import Slider from "../components/Slider";

export default function Main() {
  return (
    <>
        <Header/>
        <Slider tit="Movies"/>
        <Slider tit="TV Shows" tipo="serie"/>
        <Slider tit="Hollywood" tipo="hollywood"/>
        <Slider tit="Horror" tipo="horror"/>
    </>
  )
}
