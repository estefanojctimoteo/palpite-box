import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por:
        <a className='hover:underline' href='https://estefanotimoteo.com.br/' target='blank'> Estéfano Timóteo</a> /
        <a className='hover:underline' href='https://www.linkedin.com/in/estefanotimoteo/' target='blank'> LinkedIn</a> /
        <a className='hover:underline' href='https://github.com/estefanojctimoteo' target='blank'> Github</a>
        <div className='mt-2'>
          <img className='inline p-4' src='/logo_semana_fsm (1).png' />
          <img className='inline p-4' src='/logo_devpleno.png' />
        </div>
      </div>
    </div>
  )
}
export default Footer