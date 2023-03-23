import React, {useEffect} from 'react';
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const EditSkill = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/skills/${params.id}`).then(({data})=>{
            setDescription(data.description)
            setTitle(data.title)
        })
    }, [])

    const submitHandler = async () => {
        try {
            const data = {
                title, description
            }


            await axios.put(`http://localhost:4000/api/skills/${params.id}`, data)

            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }

    const cleanForm = () => {
        setDescription('')
        setTitle('')
    }

    return (
        <form
            className={'w-1/3 mx-auto py-10'}
            onSubmit={e => e.preventDefault()}
        >
            {/*<label*/}
            {/*    className={'text-gray-300 py-2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer'}>*/}
            {/*    Прикрепить изображение:*/}
            {/*    <input type="file" className={'hidden'} onChange={e => {*/}

            {/*    }}/>*/}
            {/*</label>*/}
            {/*<div className={'flex object-cover py-2'}>*/}
            {/*    /!*{oldImage && <img src={`http://localhost:3002/uploads/${oldImage}`} alt={oldImage.name}/>}*!/*/}
            {/*    /!*{newImage && <img src={URL.createObjectURL(newImage)} alt={newImage.name}/>}*!/*/}
            {/*</div>*/}

            <label className={'text-xs text-white opacity-70'}>
                Название чебурека:
                <input type="text"
                       value={title}
                       onChange={event => setTitle(event.target.value)}
                       className={'mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'}
                       placeholder={'Название'}/>
            </label>

            <label className={'text-xs text-white opacity-70'}>
                Описание чебурека:
                <textarea
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    className={'mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700 resize-none h-40'}
                    placeholder={'Описание'}/>
            </label>

            <div className="flex gap-8 items-center justify-center mt-4">
                <button
onClick={submitHandler}
                    className={'flex justify-center items-center bg-gray-600 text-xs text-white py-2 px-4 rounded-sm'}>Обновить
                </button>
                <button
onClick={cleanForm}
                    className={'flex justify-center items-center bg-red-500 text-xs text-white py-2 px-4 rounded-sm'}>Очистить
                </button>
            </div>
        </form>
    );
};

export default EditSkill;