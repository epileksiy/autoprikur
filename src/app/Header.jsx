'use client'
import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";


export default function Header() {
    const handleScrollToUslugi = () => {
        const uslugiElement = document.getElementById("uslugi");
        if (uslugiElement) {
          const yOffset = -70; // Adjust the offset as needed to account for any fixed header or padding
          const y = uslugiElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          scrollTo({
            top: y,
            behavior: "smooth",
          });
        }
    };

    const handleCallButtonClick = () => {
        window.location.href = `tel:+79963651717`;
    };

    return(


    <div className=" w-full lg:w-11/12 xl:w-10/12 flex items-center p-6 md:rounded-3xl mainbg flex-col md:mt-8">
        <div className="flex flex-col md:flex-row md:items-center w-full md:justify-between py-4 lg:py-12 border-b-2 border-slate-300/25">
            <div className="flex items-start md:items-center flex-col md:flex-row">
                <div className="text-white font-bold lg:ml-5 mr-7 text-2xl">
                АвтоПрикурка.рф
                </div>
                <button onClick={handleScrollToUslugi} className="text-white bg-red-600 rounded-lg mt-2 lg:mt-0 lg:rounded-xl px-2 p-1 lg:px-3  lg:p-3 flex flex-row items-center">
                <svg width="12" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.75 0.25C0.335786 0.25 0 0.585786 0 1C0 1.41421 0.335786 1.75 0.75 1.75H16.75C17.1642 1.75 17.5 1.41421 17.5 1C17.5 0.585786 17.1642 0.25 16.75 0.25H0.75ZM0 6C0 5.58579 0.335786 5.25 0.75 5.25H16.75C17.1642 5.25 17.5 5.58579 17.5 6C17.5 6.41421 17.1642 6.75 16.75 6.75H0.75C0.335786 6.75 0 6.41421 0 6ZM0 11C0 10.5858 0.335786 10.25 0.75 10.25H16.75C17.1642 10.25 17.5 10.5858 17.5 11C17.5 11.4142 17.1642 11.75 16.75 11.75H0.75C0.335786 11.75 0 11.4142 0 11Z" fill="white"/>
                </svg>

                <p className='ml-2'>Услуги</p>
                </button>
            </div>

            <div className="flex flex-col md:flex-row text-white md:ml-0 mt-6 w-full md:w-auto justify-between md:justify-normal mb-4 md:mb-0 text-lg">
                {/* <p className='mr-8'>О компании</p>
                <p className='mr-8'>Контакты</p> */}
                <p className='font-bold md:mr-5 cursor-pointer' onClick={handleCallButtonClick}>+7 996 365-17-17</p>
            </div>
        </div>

        <div className="w-full flex">
            <div className="w-3/4 lg:w-1/2 h-full flex flex-col">
                <div className="flex text-3xl lg:text-6xl text-white px-3 lg:px-10 pt-14 mt-16">Премиальное обслуживание вашего автомобиля</div>
                <div className="flex text-md lg:text-2xl text-gray-300 px-3 lg:px-10 mt-4">Заведём любой автомобиль быстро и качественно</div>
                <div className="flex px-3 lg:px-10 mb-20 mt-20">
                    <div className="bg-red-600 p-3 flex flex-row rounded-lg cursor-pointer" onClick={handleCallButtonClick}>
                        <p className='font-semibold text-white'>Вызвать сервис</p>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 16.5L14 12.5L10 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-1/3 lg:w-1/2 h-full"></div>
        </div>
    </div>
    )
}