import { useEffect } from "react"
const ScrollBar = () => {
    useEffect(()=>{
        let progressBar = document.querySelector(".progressBar")
        let totalHeight = document.body.scrollHeight - window.innerHeight
        window.onscroll = ()=>{
          let progressHeight = (window.scrollY / totalHeight) *100
          progressBar.style.height = progressHeight + '%'
        }
        console.log(progressBar.style.height)
      })
    return (
        <div className='scrollPath'>
            <div className="progressBar"></div>
        </div>
    )
}

export default ScrollBar