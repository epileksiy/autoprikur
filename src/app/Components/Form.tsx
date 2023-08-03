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


    <div className="mt-10 p-5 bg-zinc-800 flex flex-col justify-center text-center">
        <h1 className="text-white">FormSubmit Demo</h1>
        <form target="_blank" action="https://formsubmit.co/richyshark@gmail.com" method="POST" className="mt-4">
            <div className="px-6 flex flex-col space-y-4">
                {/* <input type="hidden" name="_next" value="https://autoprikur.vercel.app/"/> */}
                <input type="hidden" name="_captcha" value="false"/>
                <input type="email" name="email" className="" placeholder="Email Address" required/>
                <input type="text" name="name" className="" placeholder="Full Name" required/>
                <input placeholder="Your Message" className="" name="message" required></input>
            </div>
            <button type="submit" className="btn btn-lg btn-dark btn-block text-white bg-red-600 p-3 rounded-lg mt-6">Submit Form</button>
        </form>
    </div>
    )
  
  }