import React, {useState} from "react";
import ImagesSlider from "./components/ImagesSlider";


function App() {
    const [index, setIndex] = useState(0);

    function handlePrevBtnClick() {
        setIndex(index - 1);
        if (index < 1) {
            setIndex(images.length - 1);
        }
    }

    function handleNextBtnClick() {
        setIndex(index + 1);
        if (index > images.length - 2) {
            setIndex(0);
        }
    }

    const images = [
        {url: "https://wallpapers.com/images/featured/dark-abstract-bsid6neh0qavpfd1.webp", title: "Dark Abstract"},
        {
            url: "https://wallpapers.com/images/hd/abstract-glowing-doodles-artwork-lznh8031fnphe9w7.webp",
            title: "Abstract Glowing Doodles"
        },
        {
            url: "https://wallpapers.com/images/high/blue-and-black-abstract-paint-zmpep7arfzw0ihfi.webp",
            title: "Blue and Black Abstract"
        },
        {
            url: "https://wallpapers.com/images/high/mobile-phone-and-other-gadgets-rkexmmj1bc7tvryz.webp",
            title: "Mobile Phone And Other Gadgets"
        }
    ];


    return (
        <div className="App">
            <ImagesSlider
                images={images}
                handlePrevBtnClick={handlePrevBtnClick}
                handleNextBtnClick={handleNextBtnClick}
                index={index}
            />
            <span className="title">{images[index].title}</span>
        </div>
    );
}

export default App;
