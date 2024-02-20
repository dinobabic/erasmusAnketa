import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectUniversityPage = (props) => {

    const {setSelectedUniversity, selectedUniversity, universities} = {...props};
    const navigate = useNavigate();
    

    function updateUniversity(id) {
        document.getElementById(selectedUniversity).classList.remove("bg-blue-500");
        document.getElementById(selectedUniversity).classList.add("bg-white");

        setSelectedUniversity(id);

        document.getElementById(id).classList.add("bg-blue-500");
        document.getElementById(id).classList.remove("bg-white");
    }

    return (
        <div>
            <div className='h-16 text-center bg-slate-700 flex justify-center items-center'>
                <p className='text-3xl font-semibold text-white'>Erasmus Anketa</p>
            </div>

            <div className='w-[800px] mx-auto shadow-lg pb-4 mt-16'>
                <p className='text-2xl font-semibold text-center py-8'>Izaberite jedno od sveučilišta:</p>
                <div className='flex justify-end mx-8'>
                    <button className='text-xl font-semibold text-white bg-green-500 rounded-md py-2 px-4' onClick={() => navigate("/certification-selcet")}>Nastavi</button>
                </div>
                <div className='flex flex-col gap-4 mx-4 py-4 px-8'>
                    {Object.entries(universities).map(([key, value]) => (
                        <div key={key} className='shadow-md px-4 py-2 flex gap-4 items-center cursor-pointer'
                            onClick={() => updateUniversity(key)}>
                            <div key={key} className={`w-4 h-4 rounded-full border-2 ${key==selectedUniversity ? "bg-blue-500" : "bg-white"}`} id={key}></div>
                            <p>{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelectUniversityPage;