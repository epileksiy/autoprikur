'use client'

import { useState } from "react"
import { useForm } from 'react-hook-form'

export default function OrderForm() {

    const { register, handleSubmit } = useForm()
  
    const [submitted, setSubmitted] = useState(false) 

    const onSubmit = () => {
      // submit logic
      setSubmitted(true)
    }
  
    if (submitted) {
      return (
        <div className="text-center">
          <p>Спасибо за Вашу заявку, обрабатываем!</p>  
        </div>
      )
    }
   
    return (    //   <form action="https://formsubmit.co/56clon@mail.ru" method="POST" onSubmit={handleSubmit(onSubmit)} className="mt-14 bg-zinc-800 rounded-xl">
    //     <div className="">
    //         <input 
    //         {...register('name', {
    //             required: true 
    //         })}
    //         placeholder="Ваше имя"
    //         className="border p-2 w-full"
    //         name="name"
    //         />
    
    //         <input
    //         {...register('car', {
    //             required: true
    //         })}  
    //         placeholder="Марка автомобиля"
    //         className="border p-2 w-full"
    //         name="car"
    //         />
    
    //         <input 
    //         {...register('phone', {
    //             pattern: {
    //             value: /^\+7\d+$/,
    //             message: 'Please enter a valid phone number'
    //             }
    //         })}
    //         placeholder="Номер телефона"
    //         className="border p-2 w-full"
    //         name="phone"
    //         />
    
    //         <input
    //         {...register('problem', {
    //             required: true
    //         })}
    //         placeholder="Опишите Вашу поломку.."
    //         className="border p-2 w-full"
    //         name="problem"
    //         />
    //     </div>
    //     <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
  
    //   </form>


    <div className="mt-10 px-5 py-8 bg-zinc-800 flex flex-col justify-center text-center w-full md:w-1/3 rounded-2xl">
        <p className="text-white text-2xl">Заполните заявку онлайн</p>
        <p className="text-white text-lg mt-3">Наша команда обработает заявку и сразу <span className="text-red-500">Вам</span> перезвонит</p>
        <form target="_blank" action="https://formsubmit.co/richyshark@gmail.com" method="POST" className="mt-4">
            <div className="px-6 flex flex-col space-y-4">
                <input type="hidden" name="_next" value="https://autoprikur.vercel.app/#uslugi"/>
                <input type="hidden" name="_captcha" value="false"/>
                <input type="text" name="name" className="h-12 p-4 rounded-lg" placeholder="Ваше имя" required/>
                <input type="text" name="car" className="h-12 p-4 rounded-lg" placeholder="Марка автомобиля" required/>
                <input type="text" name="phone" className="h-12 p-4 rounded-lg" placeholder="Номер телефона" required/>
                <input placeholder="Опишите Вашу поломку.." className=" h-52 p-4 rounded-lg" name="problem" required></input>
            </div>
            <button type="submit" className="btn btn-lg btn-dark btn-block text-white bg-red-600 p-3 rounded-lg mt-12">Оставить заявку</button>
        </form>
    </div>
    )
  
  }