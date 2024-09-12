import { useRef, useEffect } from 'react';
import './newPrompt.css';

const NewPrompt = () => {

    const endRef = useRef(null)

    useEffect(()=>{
        endRef.current.scrollIntoView({behaviour:"smooth"});
    },[]);

    return (
        <>
          testing
            <div className='endChat' ref={endRef}></div>
            <form className='newForm'>
                <label htmlFor="file">
                    <img src="/attachment.png" alt="Attach a file" />
                </label>
                <input id="file" type="file" multiple={false} hidden />
                <input type="text" placeholder='Ask anything....' />
                <button type="submit">
                    <img src="/arrow.png" alt="Submit" />
                </button>
            </form>
        </>
    );
}

export default NewPrompt;
