import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Slider.scss'
import { useState } from 'react';


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    
    const data = [
        "https://img1.akspic.ru/crops/8/9/7/2/7/172798/172798-mustang_shelby_gt500-ford_shelby_gt500_2020_goda-ford_shelbi_gt500_2021_goda-2020_ford_mustang-shelbi_mustang-1920x1080.jpg",
        "https://img2.akspic.ru/crops/5/6/7/2/7/172765/172765-polumesyac-astronomicheskij_obekt-polutona_i_ottenki-nebesnoe_yavlenie-lunnyj_svet-1920x1080.jpg",
        "https://img2.akspic.ru/crops/0/5/7/2/7/172750/172750-tramvajnaya_ploshhad-ty_ushel_otsyuda-zdanie-legkovyye_avtomobili-dnevnoe_vremya-1920x1080.jpg",
        "https://img1.akspic.ru/crops/1/5/7/2/7/172751/172751-priroda-oblako-rastenie-atmosfera-prirodnyj_landshaft-1920x1080.jpg",
        "https://img2.akspic.ru/crops/8/4/7/2/7/172748/172748-reka_chambal-voda-san_francisko_oklend_bej_bridzh-planshet-oblako-1920x1080.jpg"
    ]

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 4 ? 0 :(prev) => prev + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 4 :(prev) => prev - 1)
    }

    
    return (
        <div className='slider'>
            <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
                <img src={data[3]} alt="" />
                <img src={data[4]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider