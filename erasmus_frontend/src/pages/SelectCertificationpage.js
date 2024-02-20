import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectCertificationpage = (props) => {
    const {setSelectedCertificate, selectedCertificate} = {...props};
    const navigate = useNavigate();
    
    function updateCertficate(certificate) {
        setSelectedCertificate(certificate);

        if (certificate === "B2") {
            document.getElementById(1).classList.add("bg-blue-500");
            document.getElementById(1).classList.remove("bg-white");

            document.getElementById(2).classList.remove("bg-blue-500");
            document.getElementById(2).classList.add("bg-white");
        }
        else {
            document.getElementById(2).classList.add("bg-blue-500");
            document.getElementById(2).classList.remove("bg-white");

            document.getElementById(1).classList.remove("bg-blue-500");
            document.getElementById(1).classList.add("bg-white");
        }
    }

    return (
        <div>
            <div className='h-16 text-center bg-slate-700 flex justify-center items-center'>
                <p className='text-3xl font-semibold text-white'>Erasmus Anketa</p>
            </div>

            <div className='w-[800px] mx-auto shadow-lg pb-4 mt-16'>
                <p className='text-2xl font-semibold text-center py-8'>Izaberite certifikat:</p>
                <div className='flex justify-end mx-8'>
                    <button className='text-xl font-semibold text-white bg-green-500 rounded-md py-2 px-4' onClick={() => navigate("/average-grade-selcet")}>Nastavi</button>
                </div>

                <div className='flex flex-col gap-4 mx-4 py-4 px-8'>
                    <div className='shadow-md px-4 py-2 flex gap-4 items-center cursor-pointer'
                        onClick={() => updateCertficate("B2")}>
                        <div className={`w-4 h-4 rounded-full border-2 bg-blue-500`} id="1"></div>
                        <p>B2</p>
                    </div>

                    <div className='shadow-md px-4 py-2 flex gap-4 items-center cursor-pointer'
                        onClick={() => updateCertficate("C1/C2")}>
                        <div className={`w-4 h-4 rounded-full border-2 text-white`} id="2"></div>
                        <p>C1/C2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectCertificationpage;