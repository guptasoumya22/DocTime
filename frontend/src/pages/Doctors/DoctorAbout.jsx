import React from 'react'
import { formatDate } from '../../utils/formatDate'
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-black font-semibold flex items-center gap-2">
        About of
        <span className='text-skyblue font-bold text-[24px] leading-9'>
            Soumya Gupta
        </span>
        </h3>
        <p className='text__para'>
            fuidjcvod deuhfcfi djhcis ewfifh ewsjfdk denfkjds hewjwdn fhnf 
            hwj jewn qwiej qwopk ejfio ewion dsewoj jop wqkdjjwk pqo wldw eio 
            nwn ei epoi opdpk wekos scsdkc, sckopsdsmc fuidjcvod deuhfcfi djhcis ewfifh ewsjfdk denfkjds hewjwdn fhnf 
            hwj jewn qwiej qwopk ejfio ewion dsewoj jop wqkdjjwk pqo wldw eio 
            nwn ei epoi opdpk wekos scsdkc, sckopsdsmc
        </p>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-black font-semibold'>
            Education
        </h3>
        <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-skyblue text-[15px] leading-6 font-semibold '>{formatDate("08-10-2010")}-{formatDate("01-06-2014")}</span>
                    <p className='text-[16px] leading-6 font-medium text-black '>PHD in Surgeon</p>
                </div>
                <p className='text-[16px] leading-6 font-medium text-black '>New Apollo Hospital ,Shivpuri</p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-skyblue text-[15px] leading-6 font-semibold '>{formatDate("06-14-2007")}-{formatDate("03-26-2011")}</span>
                    <p className='text-[16px] leading-6 font-medium text-black '>PHD in Surgeon</p>
                </div>
                <p className='text-[16px] leading-6 font-medium text-black '>New Apollo Hospital ,Shivpuri</p>
            </li>
        </ul>
      </div>
       <div className='mt-12'>
       <h3 className='text-[20px] leading-[30px] text-black font-semibold'>
            Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellow-500 text-[15px] leading-6 font-semibold'>
                {formatDate("08-10-2010")}-{formatDate("01-06-2014")}
                </span>
                <p className='text-[15px] leading-6 font-medium text-black'>
                    Sr. Surgeon
                </p>
                <p className='text-[14px] leading-5 font-medium text-black'>
                   New Apollo Hospital, Shivpuri
                </p>
            </li>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellow-500 text-[15px] leading-6 font-semibold'>
                {formatDate("06-14-2007")}-{formatDate("03-26-2011")}
                </span>
                <p className='text-[15px] leading-6 font-medium text-black'>
                    Sr. Surgeon
                </p>
                <p className='text-[14px] leading-5 font-medium text-black'>
                   New Apollo Hospital, Shivpuri
                </p>
            </li>

        </ul>
       </div>
    </div>
  )
}

export default DoctorAbout
