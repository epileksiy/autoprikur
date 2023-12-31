'use client'

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const works = [
  {
    img: 'work1.jpeg', 
    model:'BMW 5 серии',
    title: ', обрыв проводки АКБ',
    desc: 'В процессе диагностики электрооборудования BMW 5 серии нашим специалистом было выявлено повреждение силового провода от аккумулятора, расположенного под днищем автомобиля. Провод имел нарушение изоляции, что могло привести к короткому замыканию. В ходе ремонта поврежденный участок проводки был заменен на новый, выполнен монтаж и изоляция соединений. После ремонта были проведены испытания электросистемы, подтвердившие ее работоспособность.'
  },
  { 
    img: 'work2.jpeg',
    model:'Mercedes Gelandewagen',
    title: ', коррозия проводки',
    desc: 'При осмотре автомобиля Mercedes Geländewagen специалистами нашего сервиса было выявлено нарушение изоляции и окисление контактных разъемов проводов электросистем. Для восстановления работоспособности был произведен демонтаж поврежденного участка проводки, установлен новый участок с соблюдением технологии монтажа. Проведены испытания, подтвердившие исправность смонтированной проводки.'
  },
  { 
    img: 'work3.jpeg',
    model:'Toyota RAV4',
    title: ', демонтаж сигнализации',
    desc: 'По просьбе клиента на автомобиле Toyota RAV4 был произведен демонтаж штатной сигнализации. Нашим специалистом была составлена схема подключения сигнализации, после чего аккуратно демонтирован блок управления, датчики и проводка сигнализации. Система полностью отключена, концы проводов изолированы во избежание коротких замыканий. Функционал и электрооборудование автомобиля после демонтажа проверены, работают штатно.'
  },
  { 
    img: 'work4.jpeg',
    model:'Volvo XC90',
    title: ', окисление контактов проводки',
    desc: 'При диагностике электрических систем автомобиля Volvo были выявлены неполадки, указывающие на нарушение контактов в проводке. Наш специалист провел проверку и заменил неисправные участки проводки, а также отдельные контактные разъемы. Была восстановлена работоспособность электрооборудования и систем автомобиля, затронутых данной неисправностью.'
  },
  { 
    img: 'work5.jpeg',
    model:'Land Rover Discovery',
    title: ', удаление спутниковой сигнализации',
    desc: 'По запросу владельца на автомобиле Range Rover был выполнен демонтаж спутниковой противоугонной системы. Наш электрик произвел отключение основного блока, антенного модуля и датчиков от штатной электропроводки автомобиля. После удаления компонентов системы их контакты были изолированы и закрыты пластиковыми заглушками. Проведена проверка работы электрооборудования автомобиля.'
  },
  { 
    img: 'work6.jpeg',
    model:'Mercedes Sprinter',
    title: ', замена стартера',
    desc: 'При диагностике Mercedes Sprinter была выявлена неисправность стартера - отсутствовало вращение якоря при включении. Наш специалист демонтировал стартер, произвел разборку и замену неисправных деталей. После сборки стартер установлен на место, отрегулирован и подключен к штатной проводке. Двигатель после ремонта запускается исправно.'
  },
  { 
    img: 'work7.jpeg',
    model:'Mercedes S-Класса',
    title: ', демонтаж спутниковой сигнализации',
    desc: 'По запросу владельца Mercedes S класса 223 нашим сервисом выполнен демонтаж спутниковой противоугонной системы. Были отсоединены и извлечены основной блок управления, приемник GPS/ГЛОНАСС сигнала, датчики перемещения и наклона. Проведена изоляция всех контактов системы от бортовой сети автомобиля. После демонтажа проверено штатное функционирование электрооборудования.'
  },
  { 
    img: 'work8.jpeg',
    model:'BMW 5 серии',
    title: 'BMW 5 серии, ремонт генератора',
    desc: 'При обращении BMW 5 серии в наш автосервис с проблемой отсутствия заряда аккумулятора, диагностикой была выявлена неисправность генератора. Наш мастер произвел демонтаж генератора с двигателя, полную разборку и замену неисправных узлов. Были установлены новые подшипники и щетки. После сборки генератор установлен на место и подключен к бортсети, после чего восстановил нормальный заряд аккумулятора.'
  },
  { 
    img: 'work9.jpeg',
    model:'Hyundai Genesis',
    title: ', разблокировка сигнализации',
    desc: 'На автомобиль Genesis поступил с неисправностью иммобилайзера и системы сигнализации, что не позволяло запустить двигатель. Наш электрик произвел диагностику, определил причину блокировки и выполнил необходимые настройки для разблокировки системы. Теперь запуск двигателя возможен в штатном режиме.'
  },
  { 
    img: 'work10.jpeg',
    model:'Honda CR-V',
    title: ', замена щеток стартера',
    desc: 'При обращении владельца Honda Pilot с жалобой на отказ при запуске двигателя, диагностикой была выявлена неисправность стартера. Наш специалист демонтировал стартер, произвел замену изношенных щеток и очистку коллектора. Стартер собран и установлен на место. После ремонта двигатель надежно запускается.'
  }
];

export default function WorksGallery() {

  const [activeIndex, setActiveIndex] = useState(0);

  const prevWork = () => {
    setActiveIndex(activeIndex > 0 ? activeIndex - 1 : works.length - 1);
  }

  const nextWork = () => {
    setActiveIndex(activeIndex < works.length - 1 ? activeIndex + 1 : 0);
  }

  return (
    <div className="mt-10 w-10/12 md:w-1/2 rounded-2xl px-4 py-8 bg-white">
      <div className="relative">

        {/* Кнопки навигации */}
        <ChevronLeftIcon 
          className="absolute top-1/2 left-0 text-gray-400 hover:text-gray-500 cursor-pointer"
          onClick={prevWork}
          height={40}
        />        
        <ChevronRightIcon 
          className="absolute top-1/2 right-0 text-gray-400 hover:text-gray-500 cursor-pointer"
          onClick={nextWork}
          height={40} 
        />

        {/* Слайд текущей работы */}
        <p className='text-center text-3xl font-semibold mt-5 mb-10'>Наши работы</p>
        <div className="text-center flex justify-center flex-col mb-5 w-10/12 mx-auto">
          <img 
            src={`gallery/${works[activeIndex].img}`}
            alt={works[activeIndex].title}
            className="rounded-lg mb-4 w-5/6 md:w-2/4 mx-auto"
          />
          <h3 className="text-xl font-bold mb-2">
            <span className='text-red-600'>{works[activeIndex].model}</span>{works[activeIndex].title}  
          </h3>
          <p className='mt-4'>
            {works[activeIndex].desc}
          </p>
        </div>

      </div>
    </div>
  );
}