import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

const TableColors = () => {
    const [color, setcolor] = useState('');
    const [list, setList] = useState(new Values('#0984e3').all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors);
            console.log(colors);
        } catch (error) {
            return;
        }
    }
    return (
        <div>
            <section>
                <h3>color generate</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setcolor(e.target.value)}
                    />
                    <button type="submit">submit</button>
                </form>
            </section>
            <section className="colors">
                {list.map((color, index) => {
                    return (
                        <SingleColor 
                            key={index} 
                            {...color} 
                            hex={color.hex} 
                            index={index}
                        />
                    )
                })}
            </section>
        </div>
    )
}

export default TableColors
