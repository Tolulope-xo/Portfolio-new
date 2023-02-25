import React from 'react';

import portrait from '../assets/port.jpeg'
const Hero = () => {
  const onButtonClick = () => {
    fetch('../assets/CV.docx').then(response => {
        response.blob().then(blob => {
            const url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = 'CV.docx';
            a.click();
        })
    })}
  return (
    <div className="block md:flex justify-between items-center gap-[5rem] text-white mt-[5rem]">
      <div>
      <h2 className="text-[22px] text-[gold]">Hi, I'm Tolulope</h2>
      <p className="text-[20px] leading-[60px]">I am a frontend developer who is currently expanding her skill set by learning technical writing. As a frontend developer, I have decided to improve my technical writing skills to better communicate complex ideas to both technical and non-technical audiences.</p>
   
      <button className='bg-white text-black text-[20px] font-[Poppins] w-[10rem] h-[2rem] text-center' onClick={onButtonClick}>Download CV</button>

      </div>
    <div className="h-fit w-full md:w-[80rem] mt-[2rem] md:mt-0 border rounded">
      <img src={portrait} alt="my-portrait"/>
    </div>
    </div>
  );
}

export default Hero;
