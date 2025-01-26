import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../app/styles/card.css';

interface Propstype {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<Propstype> = ({ title, desc, img, tags }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check window size on the client side
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="custom-container">
      <div
        className={`card-image ${!isSmallScreen ? `card-sm` : ``}`}
        data-aos="zoom-in-left"
      >
        <div>
          <Image
            className={`card-image ${!isSmallScreen ? `card-sm` : ``}`}
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
            {tags.map((el) => (
              <div className="card-tags" key={el}>
                {el}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
