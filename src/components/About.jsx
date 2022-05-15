import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Acerca de:
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hola, soy Jorge es un placer conocerte. Espero que te guste mi portafolio.</p>
            </div>
            <div>
              <p> Soy un estudiante muy proactivo,que se ha esforzado continuamente en aprender las
                mejores tecnologias de desarrollo web. Mi enfoque siempre ha sido desarrollarme como
                un profesional Full-Stack, con una amplia gama de conocimientos, para eso, desde que
                comence a adentrarme en los lenguajes de programación le he dedicado la mayor cantidad
                de tiempo posible. Anhelo poder ser parte de una empresa tecnologica moderna que pueda
                sacar provecho de lo mejor de mí. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;