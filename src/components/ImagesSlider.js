import React from "react";

function ImagesSlider(props) {



    return (
        <div className="images">
            <button className="prevBtn navBtn" onClick={props.handlePrevBtnClick}>{"<"}</button>
            <button className="nextBtn navBtn" onClick={props.handleNextBtnClick}>{">"}</button>

            <img src={props.images[props.index].url} alt=""/>
        </div>
    )
}

export default ImagesSlider;