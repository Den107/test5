import React, {useEffect, useState} from 'react';
import axios from "axios";
import Skill from "../components/Skill";

const Main = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/api/skills').then(({data}) => setItems(data))
    }, [items])

    return (
        <div className={'flex flex-wrap gap-[40px]'}>
            {!items ? <div>Нет чебуреков</div> : items.map(item => <Skill key={item._id} item={item}/>)}
        </div>
    );
};

export default Main;