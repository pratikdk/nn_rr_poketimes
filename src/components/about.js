import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = (props) => {
    // setTimeout(() => {
    //     props.history.push("/");
    // }, 2000)
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis lobortis nibh. Curabitur tempus justo sed sollicitudin commodo. Phasellus vel feugiat odio. Ut dictum, ex ut pulvinar molestie, nibh orci vehicula nisl, in aliquet tellus arcu sit amet libero. Quisque rhoncus pellentesque est. Vivamus sodales auctor elit in facilisis. Pellentesque euismod turpis a lorem faucibus, sed faucibus turpis sodales. Praesent vitae commodo est. Suspendisse potenti. Etiam nisi nisl, luctus a urna sed, feugiat iaculis augue. Praesent consequat ultrices turpis, feugiat rhoncus metus hendrerit id. Maecenas vel dapibus augue, nec gravida purus. Pellentesque faucibus tempus tincidunt. Vivamus ut felis vel purus accumsan faucibus. Praesent ultricies eros ac magna interdum luctus. Sed suscipit sed neque ut eleifend. Sed a erat nulla. Cras pellentesque eget nunc eget aliquet. Sed felis neque, congue ac leo eu, mattis porttitor neque. Vivamus viverra mauris eget aliquam aliquet. Sed pulvinar orci non tortor feugiat lacinia. Vestibulum consequat non urna non posuere. Nunc efficitur nulla dapibus elit sodales feugiat sit amet non sapien. Curabitur et orci ac nunc molestie dictum. Etiam et congue ipsum. Nulla rhoncus eleifend arcu non lobortis.</p>
        </div>
    );
}
export default Rainbow(About);