import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useState} from "react";

function ScrollToTop() {

    const scroll_up = () => window.scrollTo(0, 0);

    let [isShowBtn, setIsShowBtn] = useState('');

    window.onscroll = () => {
        window.scrollY > 200
            ? setIsShowBtn('scroll-top')
            :
            setIsShowBtn('')
    }

    return (
        <div>
            <div
                id={isShowBtn}
                onClick={() => scroll_up()}>
                <ExpandLessIcon/>
            </div>
        </div>
    );
}

export default ScrollToTop;