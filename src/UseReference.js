import React,{useRef} from 'react'

export default function UseReference() {
    const userName = useRef(null)
    const Password = useRef(null)

    const HandelforSubmit = (e) =>{
        e.preventDefault()
        console.log(userName.current.value , Password.current.value);
    }
  return (
    <div>
        <form onSubmit = {HandelforSubmit}>
        <input type='text' placeholder='User Name' ref={userName}/>
        <input type='password' placeholder='Password' ref={Password}/>
        <button>submit</button>
        </form>
    </div>
  )
}
