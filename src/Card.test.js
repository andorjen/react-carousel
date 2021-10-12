import React from "react";
import {render} from "@testing-library/react";
import Card from "./Card";

it('renders card without crashing', function(){
    render( <Card caption="test" src="http://localhost:3000/static/media/image1.08e1519e.jpg" currNum={1} totalNum={3} />)
})

it("matches snapshot", function(){
    const {container} = render( <Card caption="test" src="http://localhost:3000/static/media/image1.08e1519e.jpg" currNum={1} totalNum={3} />);
    expect(container).toMatchSnapshot();
})