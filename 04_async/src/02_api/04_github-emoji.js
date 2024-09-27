import { useState } from "react";

const SearchBox = ({setImgUrl}) => {
    const [emojiName, setEmojiName] = useState('');

    const onChangeHandler = e => setEmojiName(e.target.value);

    const onClickHandler = () => {
        fetch("https://api.github.com/emojis")
            .then(r => r.json())
            .then(result => setImgUrl(result[emojiName]));  // result.emojiName 도 사용 가능하지만 문자열만 가능하다. 편하기 때문에 사용하기도 한다.
    }

    return (
        <>
            <input type="text" onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>검색</button>
        </>
    )
}

const ImageBox = ({imgUrl}) => {
    return !!imgUrl? <img src={imgUrl} alt="이모지"/> : <h1>텅</h1>;
}

const EmojiContainer = () => {
    const [imgUrl, setImgUrl] = useState('');

    return (
        <>
            <SearchBox setImgUrl = {setImgUrl}/>
            <br/>
            <ImageBox imgUrl={imgUrl}/>
        </>
    )
}

export default EmojiContainer;