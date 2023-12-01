import React from 'react'

export const Map = () => {
  return (
    <div
      className='w-full h-[70vh] relative overflow-hidden lg:col-span-3 max-lg:order-1'
      id='map'>
      <iframe
        title='map'
        width='100%'
        height='100%'
        src='https://www.google.com/maps/d/u/0/embed?mid=1Qylb7U78CoJqevU5C7vsgM-3qEa3zCY&ehbc=2E312F&noprof=1'
        className='w-full h-full'></iframe>
      <p className='absolute top-20 left-1/2 -translate-x-1/2 bg-red-500 text-white p-2 md:p-4 z-10 max-w-7xl w-11/12 rounded-xl'>
        <b>Zonas de distribución:</b> La Plata, Los Hornos, City Bell,
        San Carlos, Gonnet, Berisso, Tolosa, Ensenada, Melchor,
        Romero, Altos de San Lorenzo.
      </p>
    </div>
  )
}
