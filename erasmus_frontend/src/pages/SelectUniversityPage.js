import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectUniversityPage = (props) => {

    const {setSelectedUniversity, selectedUniversity, universities} = {...props};
    const navigate = useNavigate();
    const [universityName, setUniversityName] = useState("");
    const [scores, setScores] = useState();
    

    function updateUniversity(id) {
        document.getElementById(selectedUniversity).classList.remove("bg-blue-500");
        document.getElementById(selectedUniversity).classList.add("bg-white");

        setSelectedUniversity(id);

        document.getElementById(id).classList.add("bg-blue-500");
        document.getElementById(id).classList.remove("bg-white");
    }

    function showScores() {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch("https://erasmusanketa-default-rtdb.europe-west1.firebasedatabase.app/UserData.json", options)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((response) => {
                console.log(response);
                let tmpUniversities = [];
                Object.entries(response).forEach(([key, value]) => {
                    if (value.university.trim() === universityName.trim()) {
                        tmpUniversities.push(value);
                    }
                });
                
                let tmpScores = [];
                tmpUniversities.forEach((university) => {
                    let score = university.averageGrade * 1000;
                    if (university.certificate !== "B2") 
                        score += 100;
                    tmpScores.push(score);
                })
                
                setScores(tmpScores.sort((a, b) => b-a));
            });
    }

    return (
        <div>
            <div className='h-16 text-center bg-slate-700 flex justify-center items-center'>
                <p className='text-3xl font-semibold text-white'>Erasmus Anketa</p>
            </div>

            <div className='w-[800px] mx-auto my-16'>
                <p className='font-sembold text-center text-2xl pb-4'>Pregled rezultata se sveučilište</p>
                <label htmlFor='university-name' className='text-lg font-semibold'>Unesite ime sveučilišta (kopirajte iz donje liste): </label>
                <input 
                    value={universityName}
                    onChange={(event) => {setUniversityName(event.target.value);}}
                    type='text' id='university-name' name='university-name' className='focus:outline-none py-2 px-4 shadow-md'/>
                <button onClick={showScores} className='bg-green-500 ml-4 text-white font-semibold rounded-md py-2 px-4 text-md'>Prikaži</button>
                {scores && scores.length > 0 && <div className='flex gap-4 flex-col'>
                    {scores.map((score, index) => {
                        return (
                            <div key={index}>
                                <p>{index+1}. {score}</p>
                            </div>
                        );
                    })}
                </div>}
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