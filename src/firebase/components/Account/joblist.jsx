import React from 'react';
import {info} from "../HomePage/file"

const Joblist = () => {
    return (
        <div className='joblist'>
           <h1 className='joblist__header'>Jobs You Might be interested in</h1>

           <div className='joblist__listing'>
            {info.map(item=>{
                const { prize, imgUrl,info} = item
                return (
                    <div className='wrapper'>
                       
                        <img src={imgUrl} className='photo' srcset="" />
                        <h1 className='name'>{prize}</h1>
                    </div>
                )
            })}

           </div>
        </div>
    );
}

export default Joblist;
