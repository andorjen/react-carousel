import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them,
 * if at beginning of carousel, hide left arrow, if at end, hide right arrow.
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //Decrements currCardIdx state by 1
  function goBackward(){
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {
          currCardIdx!==0 &&      //make variables to be true/false
          <i
          className="fas fa-chevron-circle-left fa-2x"
          onClick={goBackward}
          />
        }
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {
          currCardIdx!==photos.length-1 && 
          <i
          className="fas fa-chevron-circle-right fa-2x"
          onClick={goForward}
          />
        }
      </div>
    </div>
  );
}

export default Carousel;
