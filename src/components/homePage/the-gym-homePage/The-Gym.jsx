import React from 'react'

import Carousel from './../../common/carousel/Carousel'

let TheGym = (props) => {
  return (
    <section className='the-gym mt-2'>
      <div className='wrapper'>
        <div className='heading d-flex justify-content-center mt-3'>
          <h2>FLEX 07</h2>
        </div>
        <div className='row mt-3 mw-100 m-0'>
          <Carousel col={props.textCol} />
          <div className={`${props.textCol} d-flex align-items-center flex-column justify-content-center`}>
            <h3 className='mt-3'>FLEX 07 - Фитнесът </h3>
            <p className='text-center text-sm-left'>
            {/* Фитнесът е разположен на площ 300кв.м. Разполага със зона за Кардио и Силова част, включващи няколко вида
            лежанки(горна и хоризонтална), скрипци, пекдек, успоредка, лост , Т-бар, смит машина, свободен клек и още
            много, много уреди, свободни тежести и дъмбели за всеки тип човек и спортист. Мъжка и женска съблекалня,
            включващи и душ баня. За тези, които целят и търсят максимално възстановяване, могат да се презаредят на
            протеиновият ни бар, предлагащ широко разнообразие продукти от висок клас. Също така ще получите и безплатна
            консултация относно, вашият хранителен и тренировъчен режим, лично от собественикът на залата и действащ
            лицензиран фитнес инструктор със дългогодишен стаж в бранша, Георги Кински.
            Заповядайте ! */}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheGym
