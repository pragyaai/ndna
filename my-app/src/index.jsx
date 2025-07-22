import { useState } from 'react'
import './index.css'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import ContentCards from './assets/ContentCards/ContentCards';



function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="topBox">          
          <h1 id="top-titleText">Lorem Ipsum</h1>
          <h2 id="top-subText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, corrupti reprehenderit? Facilis odit neque ullam deleniti, debitis voluptates, doloribus placeat repellat exercitationem minima optio suscipit voluptate eos aliquam, ratione aliquid.</h2>
          <div className="scrollIndicator">
            <MdOutlineKeyboardDoubleArrowDown />
          </div>
        </div>
        
        <div className='bottomBox'>
          <div className='flexContainer'>
            <ContentCards
              title="Lorem Ipsum."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, corrupti reprehenderit? Facilis odit neque ullam deleniti, debitis voluptates, doloribus placeat repellat exercitationem minima optio suscipit voluptate eos aliquam, ratione aliquid."
              imageSrc="https://picsum.photos/300/300"
            ></ContentCards>

            <ContentCards
              title="Lorem Ipsum."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, corrupti reprehenderit? Facilis odit neque ullam deleniti, debitis voluptates, doloribus placeat repellat exercitationem minima optio suscipit voluptate eos aliquam, ratione aliquid.
              "
              imageSrc="https://picsum.photos/300/300"
            ></ContentCards>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home