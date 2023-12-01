import React, { useEffect, useRef } from 'react'

function Dropdown(props) {
    const dropdownRef = useRef()
    const handleClick = (e)=>{

        
        if(dropdownRef && 
            dropdownRef.current.contains(e.target)) {
                console.log('close');
                if(props.onClose)   props.onClose()
            }
        }
    useEffect(()=>{
        document.addEventListener('click',handleClick)

        return ()=>{
            document.removeEventListener('click',handleClick)
        }
    })
  return (
    <div ref = {dropdownRef} 
    style={{
        position:"absolute",
        top:"100%",
        right:"0"
    }}
    className='dropdown'>
        {props.children}
    </div>
  )
}

export default Dropdown;