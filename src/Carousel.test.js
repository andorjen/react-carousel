import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it('renders carousel without crashing', function(){
  render( <Carousel photos= {TEST_IMAGES} title="test" />)
})


it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});


it("works when you click on the left arrow", function() {
  const { container, debug } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);
  // debug();
  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

   // move back in the carousel
  const leftArrow = container.querySelector(".fa-chevron-circle-left");
  fireEvent.click(leftArrow);
  // debug();
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();

});


it("left arrow doesn't show on first image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the right arrow to show, but not the left
  expect(
    container.querySelector(".fa-chevron-circle-left")
  ).not.toBeInTheDocument();
  expect(
    container.querySelector(".fa-chevron-circle-right")
  ).toBeInTheDocument();
});


it("right arrow doesn't show on last image", function() {
  const { container, debug } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // move forward in the carousel to img 2
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);
  // move forward in the carousel to img 3
  fireEvent.click(rightArrow);

  // expect the third image to show, but not the first or second
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // expect the left arrow to show, but not the right
  expect(
    container.querySelector(".fa-chevron-circle-left")
  ).toBeInTheDocument();
  expect(
    container.querySelector(".fa-chevron-circle-right")
  ).not.toBeInTheDocument();

  // setCurrCardIdx(2);
  // debug();
  
});


it("matches snapshot", function(){
  const {container} = render( <Carousel photos= {TEST_IMAGES} title="test" />);
  expect(container).toMatchSnapshot();
})