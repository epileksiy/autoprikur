'use client'
import { useState, useEffect, useRef } from "react";


export default function Services() {

    const timeoutRef = useRef(null);
    const [servState,pickServ] = useState(0);
    const [expandedState,setexpandedState] = useState(false);

    const headers = ['',
    'Не заводится машина? Не волнуйтесь!',
    'Разрядился аккумулятор?',
    'Стартер вашего автомобиля сломался?',
    'Генератор вышел из строя?'
    ]

    const descriptions = ['',`Наш опытный специалист приедет к вам на помощь и быстро запустит двигатель с помощью профессионального бустера \n\n Мы используем современное premium-качественное оборудование, которое бережно и эффективно прокрутит двигатель без лишней нагрузки\n \nВам не придется ждать эвакуатор или морозиться на улице - мы оперативно приедем и запустим ваш автомобиль!`,
    `Наш мастер прибудет к вам в течение часа и быстро зарядит ваш аккумулятор прямо на месте с помощью профессионального оборудования\n\nМы используем только качественные зарядные устройства, которые восстановят аккумулятор безопасно и аккуратно\n\nВам не придется покупать новую батарею или ждать эвакуатор - мы оперативно приедем и зарядим ваш аккумулятор!`,
    `Доверьте его ремонт профессионалам!\n Наш опытный мастер оперативно устранит любую неисправность стартера прямо на месте - заменит реле, очистит коллектор, отремонтирует редуктор и т.д.\n\nМы используем только качественные запчасти и инструменты \n\nНе ждите замены стартера на СТО - мы быстро и профессионально отремонтируем ваш стартер за 1-2 часа!`,
    `Наш опытный мастер оперативно найдет и устранит неисправность прямо на месте\n\nМы устраняем дефекты обмоток, колец, подшипников, выпрямителей и других элементов генератора\n\nПосле ремонта генератор будет работать как новый! Не ждите замены генератора в сервисе - доверьте его ремонт профессионалам\nМы сделаем это быстро и с гарантией!`];
    
    const handlePickService = (val) => {
        pickServ(val);

        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current); 
        }

        if(val>0){
            setexpandedState(true);
            timeoutRef.current = setTimeout(()=>{
                setexpandedState(false)
            },7000);
        }
    }

    useEffect(() => {
        console.log(servState, expandedState)
      }, [servState]);

    return(
        <div className="w-full flex flex-col items-center">
            <div className="mt-12 w-full lg:w-11/12 xl:w-10/12 flex flex-col md:flex-row mb-4 md:space-x-6 md:px-12" id='services'>

                <div className="h-72 w-full md:w-1/2 flex space-x-6 mb-4 md:mb-0 px-5 md:px-0 rounded-lg">
                    <div onClick={() => handlePickService(1)} className={`w-full cursor-pointer md:w-1/2 h-full bg-zinc-800 rounded-lg flex flex-col justify-between ${servState==1 && expandedState && '-translate-y-1' && 'scale-110'} ${servState==1 && expandedState && 'border-4 border-white'} transition ease-in-out delay-150 duration-300`}>
                        <div className="h-4/6 serv1 rounded-lg"></div>
                        <p className="text-white text-lg md:text-xl lg:text-2xl px-6 xl:px-14 py-5">Прикурка бустером</p>
                    </div>
                    <div onClick={() => handlePickService(2)} className={`w-full cursor-pointer md:w-1/2 h-full bg-zinc-800 rounded-lg flex flex-col justify-between ${servState==2 && expandedState  && '-translate-y-1' && 'scale-110'} ${servState==2 && expandedState && 'border-4 border-white'} transition ease-in-out delay-150 duration-300`}>
                        <div className="h-4/6 serv2 rounded-lg"></div>
                        <p className="text-white text-base md:text-xl lg:text-2xl px-6 xl:px-14 py-5">Зарядка аккумулятора</p>
                    </div>
                </div>
                
                <div className="h-72 w-full md:w-1/2 flex space-x-6 px-5 md:px-0">
                    <div onClick={() => handlePickService(3)} className={`w-full cursor-pointer md:w-1/2 h-full bg-zinc-800 rounded-lg flex flex-col justify-between ${servState==3 && expandedState && '-translate-y-1' && 'scale-110'} ${servState==3 && expandedState && 'border-4 border-white'} transition ease-in-out delay-150 duration-300`}>
                        <div className="h-4/6 serv3 rounded-lg"></div>
                        <p className="text-white text-lg md:text-xl lg:text-2xl px-6 xl:px-14 py-5">Ремонт стартеров</p>
                    </div>
                    <div onClick={() => handlePickService(4)}className={`w-full cursor-pointer md:w-1/2 h-full bg-zinc-800 rounded-lg flex flex-col justify-between ${servState==4 && expandedState && '-translate-y-1' && 'scale-110'} ${servState==4 && expandedState && 'border-4 border-white'} transition ease-in-out delay-150 duration-300`}>
                        <div className="h-4/6 serv4 rounded-lg"></div>
                        <p className="text-white text-lg md:text-xl lg:text-2xl px-6 xl:px-14 py-5">Ремонт генераторов</p>
                    </div>
                </div>

            </div>
            <div className="flex justify-center w-full">
                    <div className={`w-11/12 md:w-1/3 ${!expandedState && 'h-0'} ${expandedState && 'h-auto'} transition-all duration-500 bg-gray-100 rounded-b-3xl rounded-t-md mt-5 ${expandedState && 'p-8'}`} id='description'>
                        {expandedState && (
                            <div className="">
                                <p className="text-xl font-semibold">{headers[servState]}</p>
                                <p className="text-lg mt-4 textService">{descriptions[servState]}</p>
                            </div>
                        )}
                    </div>
            </div>

      </div>
    )
}