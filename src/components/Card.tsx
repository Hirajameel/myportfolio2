import React from 'react';
import Image from 'next/image';
import '../app/styles/card.css';





interface propstype {
    title: string;
    desc: string;
    img: string;
    tags: string[]; // Change to string[] to allow an array of strings
}

const Card:React.FC<propstype> = ({title,desc,img,tags}) => {
  return (
    <div className='custom-container'>
    <div className={`card-image ${window.innerWidth>=640? `card-sm` : ``}`}data-aos="zoom-in-left">
        <div>
           <Image className={`card-image ${window.innerWidth>=640? `card-sm` : ``}`}
           src={img}
           width={350}
           height={350}
           alt={title}
           />
        </div>

        <div className="card-container">
            <div className="card-title">{title}</div>
            <div className="card-desc">{desc}</div>
            <div>
                {tags.map((el) =>(
                    <div className="card-tags" key={el}>
                        {el}
                    </div>))}
            </div>
        </div>

    </div>
    </div>
  )
}

export default Card