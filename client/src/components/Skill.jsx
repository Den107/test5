import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Skill = ({item}) => {

    const removeItem = async (id)=>{
        let res = window.confirm('Точно удалить?')

       if(res) {
          await axios.delete(`http://localhost:4000/api/skills/${id}`)
       }

    }

    return (

            <div className={'bg-white rounded flex justify-between flex-col'}>
                <div>
                    <h3 className={'text-xl font-bold p-2'}>{item.title}</h3>
                    <div className={'p-3 w-full'}>{item.description}</div>
                </div>

                <div className={'m-2'}>
                    <Link to={`/edit/${item._id}`} className={'text-green-500 mr-3'}>Редактировать</Link>
                    <Link onClick={()=>removeItem(item._id)} className={'text-red-500'}>Удалить</Link>
                </div>
            </div>


    );
};

export default Skill;