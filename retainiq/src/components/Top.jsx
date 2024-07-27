import { faUser, faBackspace, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Top() {
  return (
    <div className='mt-4 flex justify-between'>
        <div className='flex justify-center justify-items-center'>
        <FontAwesomeIcon icon={faArrowLeft} size='3x' className='ml-5'/>
        <div className='font-sans font-semibold ml-6 w-[300px] h-12 pl-2 border-b-4 border-b-black justify-center justify-items-center text-left text-3xl '>
            Rules Creation
        </div>
        </div>
        <div className='w-40 h-12 bg-green-500 rounded-md flex justify-center justify-items-center text-white mr-9'>
            <button>Publish Feed</button>
        </div>
        
    </div>
  )
}

export default Top
