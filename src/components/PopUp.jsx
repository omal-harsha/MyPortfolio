import React, { useState } from 'react'


export const PopUp = ({setOpenPop,handleDownload}) => {

    const [newPw, setNewPw] = useState()
    const [title,setTitle] = useState(false)
    const checkPassword = () => {
        const pw = process.env.REACT_APP_DOWNLOAD_KEY
    
        if(pw === newPw){
            setOpenPop(false)
            handleDownload();
        }else{
            setTitle(true)
            console.log("wrong")
        }
    }

  return (
    <div className='h-screen flex justify-center z-[500] items-center fixed top-0 left-1/2 transform -translate-x-1/2  w-screen'>
        <div
        data-aos='zoom-in'
        data-aos-duration="200"
        className='flex backdrop-blur-lg  backdrop-filter flex-col justify-center items-center w-max mx-auto px-2 md:px-5 py-4  rounded-lg shadow-xl bg-gray-500/50'>
            <div className={`text-2xl font-bold text-white mb-5`}>Enter PIN</div>
            {title && <p className='text-xs text-red-600 mb-2'>Incrrect PIN number</p>}
            <input type='text' value={newPw} onChange={(e)=> setNewPw(e.target.value)} className='text-4xl w-28 tracking-widest focus:outline-none text-center mb-5' maxLength={4} placeholder='****'/>
            <div className='text-xs mb-2 text-gray-400 font-semibold flex-wrap max-w-[400px] md:max-w-[500px] text-center'>If you don't have a PIN, please contact me.</div>
            <div >
                
                <div className='flex space-x-4'>
                <button className='px-4 w-20 py-1 bg-logoBlue font-semibold text-white rounded-md' onClick={checkPassword} >Ok</button>
                <button className='px-4 w-20 py-1 bg-gray-500 font-semibold text-white rounded-md' onClick={()=> setOpenPop(false)}>Cancel</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}
