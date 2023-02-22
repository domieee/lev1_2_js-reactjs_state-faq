import { useState } from 'react'
import './Block.css'

const Block = () => {

    const [display, displayStyle] = useState(false)

    const checkState = () => {
        displayStyle(!display)
    }

    return (
        <div className="block">
            <div className='firstBlock'>
                <p className='heading'>Why is React great?</p>
                <button
                    onClick={checkState}>
                    +
                </button>
            </div>
            {display ?
                <div className='toggledBlock'>
                    <p>Fast Learning Curve</p>
                </div>
                :
                <></>
            }

        </div>
    );
}


export default Block;