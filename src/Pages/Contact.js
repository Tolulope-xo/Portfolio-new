import React from 'react';
import { TbBrandTwitter } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { SiGithub } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";


const Contact = () => {
  return (
    <div>
         <div className="flex text-[gold] py-[1rem] m-auto justify-between gap-[2rem] w-[30rem] leading-[60px] items-center">
            <div className='flex flex-col justify-center  item-center'>
                <a href='https://twitter.com/Ayo__tomiwa'>
      <TbBrandTwitter className='text-[3rem]' />
      </a>
      <p className="text-white">Twitter</p>
      </div>
      <div className='flex flex-col justify-center item-center'>
        <a href=''>
<FaInstagram className='text-[3rem]'/>
</a>
<p className="text-white">Instagram</p>
</div>
<div className='flex flex-col justify-center  item-center'>
<a href='mailto:olatunjitolulope4@gmail.com'>
<CgMail className='text-[3rem]'/>
</a>
<p className="text-white">Gmail</p>
</div>
<div className='flex flex-col justify-center  item-center'>
<a href='https://github.com/Tolulope-xo'>
<SiGithub className='text-[3rem]'/>
</a>
<p className="text-white">Github</p>
</div>
<div className='flex flex-col justify-center  item-center'>
<a href='https://www.linkedin.com/in/tolulope-olatunji'>
<ImLinkedin className='text-[3rem]'/>
</a>
<p className="text-white">LinkedIn</p>
</div>
      </div>
    </div>
  );
}

export default Contact;
