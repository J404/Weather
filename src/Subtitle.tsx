import React from 'react';

interface Props {
    message: string;
}

const Subtitle: React.FC<Props> = props => {
    return (
        <div className='Subtitle italic text-left ml-24'>
            <h4 className='font-cursive text-2xl'>{ props.message }</h4>
        </div>
    );
}
export default Subtitle;