import Image from 'next/image'
import Link from 'next/link'
import ScrollButton from './scrollbutton'
import Header from './Header'
import Why from './Why'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-4 lg:px-12">

      <Header />

      {/* // Services */}
      <div className="mt-2 md:mt-4 w-full lg:w-11/12 xl:w-10/12 flex flex-col md:flex-row" id='uslugi'>
        <div className="w-full md:w-1/3 xl:w-1/2 h-96 md:rounded-lg banner flex items-center">
          <div className="w-1/2 flex text-4xl md:text-3xl lg:text-4xl text-white px-14 py-12 font-semibold">Поможем правильно завести автомобиль при севшем аккумуляторе</div>
        </div>
        <div className="w-full md:w-2/3 xl:w-1/2 space-x-3 flex md:pl-3 mt-4 md:mt-0">
          <div className="w-1/2 h-64 md:h-full bg-slate-200 firstinfo md:rounded-lg flex justify-center items-end py-5">
          <div className="bg-red-600 p-2 font-semibold text-white rounded-lg">Работаем на выезд</div>
          </div>
          <div className="w-1/2 h-64 md:h-full bg-zinc-800 secinfo md:rounded-lg flex justify-center items-end py-5">
            <div className="bg-red-600 p-2 font-semibold text-white rounded-lg">Диагностика</div>
          </div>
        </div>
      </div>

      {/* // Text on black bg */}
      <div className="mt-4 w-full lg:w-11/12 xl:w-10/12 bg-zinc-800 flex flex-col px-14 py-12 rounded-lg">
        <p className='text-xl md:text-2xl font-bold text-white'>Высококвалифицированные услуги автоэлектрика</p>
        <p className='text-xl text-white mt-7'>Далеко не каждый автовладелец может правильно прочитать и распознать предупреждающий сигнал автомобиля о той или иной неполадке в электросистемах. Затягивать с диагностикой и устранением ошибок нельзя, так как многие из них могут привести к тяжёлым поломкам и даже возгоранию ТС</p>
      </div>

      {/* // Mini icons with services */}
      <div className="mt-12 w-full lg:w-11/12 xl:w-10/12 flex flex-col md:flex-row mb-4 md:space-x-6 md:px-12">

        <div className="h-72 w-full md:w-1/2 flex space-x-6 mb-4 md:mb-0 px-5 md:px-0 rounded-lg">
          <div className="w-full md:w-1/2 h-full bg-zinc-800 rounded-lg flex flex-col justify-between hover:border-4 hover:border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="h-4/6 serv1 rounded-lg"></div>
            <p className="text-white text-lg md:text-xl lg:text-2xl px-6 xl:px-14 py-5">Прикурка бустером</p>
          </div>
          <div className="w-full md:w-1/2 h-full bg-zinc-800 rounded-lg flex flex-col justify-between hover:border-4 hover:border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="h-4/6 serv2 rounded-lg"></div>
            <p className="text-white text-base md:text-xl lg:text-2xl px-6 xl:px-14 py-5">Зарядка аккумулятора</p>
          </div>
        </div>
        
        <div className="h-72 w-full md:w-1/2 flex space-x-6 px-5 md:px-0">
          <div className="w-full md:w-1/2 h-full bg-zinc-800 rounded-lg flex flex-col justify-between hover:border-4 hover:border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="h-4/6 serv3 rounded-lg"></div>
            <p className="text-white text-lg md:text-xl lg:text-2xl px-6 xl:px-14 py-5">Ремонт стартеров</p>
          </div>
          <div className="w-full md:w-1/2 h-full bg-zinc-800 rounded-lg flex flex-col justify-between hover:border-4 hover:border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="h-4/6 serv4 rounded-lg"></div>
            <p className="text-white text-lg md:text-xl lg:text-2xl px-6 xl:px-14 py-5">Ремонт генераторов</p>
          </div>
        </div>

      </div>

      {/* //Why AutoPrikurka? */}
      <Why />

      <div className="mt-20 flex justify-center mb-10">
        <p className='text-white'>АвтоПрикурка © | Москва, 2023</p>
      </div>
      <ScrollButton />

    </main>
  )
}
