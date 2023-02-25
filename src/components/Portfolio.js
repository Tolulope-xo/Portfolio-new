import React from 'react';
import {datas} from './data'

const Portfolio = () => {
    
   
  return (
    <div className='flex flex-col md:grid md:grid-cols-3 items-center '>
      {datas.map((data, index) => {
        return(
                <div key={data.id} className='p-[2rem] mb-[2rem] w-[20rem] h-[20rem] bg-[white]'>
<a href={data.link}>
<img className="cursor-pointer " src={data.src} alt='rep'>
</img>
</a>
<p className= 'text-[black] pt-[1rem] font-[Poppins] font-[700] text-[20px]'>{data.name}</p>
<p className= 'text-[black] font-[Poppins] font-[500] text-[20px]'>{data.para}</p>

            </div>
        )
      })}
    </div>
  );
}

export default Portfolio;
