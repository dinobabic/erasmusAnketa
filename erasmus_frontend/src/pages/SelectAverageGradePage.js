import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectAverageGradePage = (props) => {
    const {setAverageGrade, averageGrade, setShouldSave} = {...props};
    const navigate = useNavigate();

    return (
        <div>
            <div className='h-16 text-center bg-slate-700 flex justify-center items-center'>
                <p className='text-3xl font-semibold text-white'>Erasmus Anketa</p>
            </div>

            <div className='w-[800px] mx-auto shadow-lg mt-16 pb-4'>
                <p className='text-2xl font-semibold text-center py-8'>Unesite težinski prosjek ocjena:</p>
                <div className='flex justify-end mx-8'>
                    <button className='text-xl font-semibold text-white bg-green-500 rounded-md py-2 px-4' onClick={() => {
                        const num = Number(averageGrade);
                        if (!isNaN(num) && num > 1 && num < 5) {
                            setShouldSave(true);
                            navigate("/results");
                        }
                    }}>Nastavi</button>
                </div>
                <div className='mx-8 shadow-md px-8 py-2 flex flex-row gap-4 items-center mt-4'>
                    <label className='font-semibold text-md' htmlFor='average-grade'>Težinska prosječna ocjena</label>
                    <input onChange={(event) => setAverageGrade(event.target.value)} className='focus:outline-none py-2 px-6 font-xl shadow-md rounded-md w-2/4' name='average-grade' id='average-grade' value={averageGrade}/>
                </div>
            </div>
        </div>
    );
};

export default SelectAverageGradePage;