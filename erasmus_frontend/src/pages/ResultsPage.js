import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResultsPage = (props) => {
    const {university, certificate, averageGrade, shouldSave} = {...props};
    const [results, setResults] = useState(null);
    const [postId, setPostId] = useState(null);
    const saved = useRef();
    const [myResult, setMyResult] = useState(null);
    const navigate = useNavigate();
    const [finalResults, setFinalResults] = useState();

    useEffect(() => {
        if (!shouldSave) {
            setMyResult(localStorage.getItem("myResult"));
            setFinalResults(JSON.parse(localStorage.getItem("finalResults")))
        }
        else if (!saved.current) {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    university: university,
                    certificate: certificate,
                    averageGrade: averageGrade
                })
            }
    
            fetch("https://erasmusanketa-default-rtdb.europe-west1.firebasedatabase.app/UserData.json", options)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((response) => {
                    setPostId(response.name);
                    let score = averageGrade * 1000;
                    if (certificate !== "B2") 
                        score += 100;
                    setMyResult(score);
                    localStorage.setItem("myResult", score);
                });

            saved.current = true;        
        }
    }, []);

    useEffect(() => {
        if (postId) {
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
                    let tmpResults = [];
                    Object.entries(response).forEach(([key, value]) => {
                        if (value.university === university && key !== postId) 
                            tmpResults.push(value);
                    });
                    setResults(tmpResults);
                });
         }
    }, [postId]);

    useEffect(() => {
        if (results) {
            let tmpFinalResults = [];
            results.forEach((result) => {
                let score = 0;
                
                if (result.certificate !== "B2") 
                    score += 100;

                score += result.averageGrade * 1000;

                tmpFinalResults.push(score);
            });

            setFinalResults(tmpFinalResults.sort((a, b) => b-a));
            localStorage.setItem("finalResults", JSON.stringify(tmpFinalResults));
        }
    }, [results]);

    return (
        <div>
            <div className='h-16 text-center bg-slate-700 flex justify-center items-center'>
                <p className='text-3xl font-semibold text-white'>Erasmus Anketa</p>
            </div>

            <div className='w-[800px] mx-auto shadow-lg mt-16 pb-4'>
                <p className='text-2xl font-semibold text-center py-8'>Rezultati</p>

                <div className='flex flex-col gap-2 shadow-md mx-4 my-6 p-6'>
                    {finalResults && finalResults.map((result, index) => {
                        return (
                            <div key={index+1}>
                                <p>{index+1}. {result}</p>
                            </div>
                        );
                    })}
                    {finalResults && finalResults.length === 0 && <p>Nema drugij prijava.</p>}
                </div>

                <p className='text-xl ml-8'>Vaš rezultat je <span className='font-semibold'>{myResult}</span></p>
            </div>
        </div>
    );
};

export default ResultsPage;