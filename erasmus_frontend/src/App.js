import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SelectUniversityPage from "./pages/SelectUniversityPage";
import SelectCertificationpage from "./pages/SelectCertificationpage";
import SelectAverageGradePage from "./pages/SelectAverageGradePage";
import ResultsPage from "./pages/ResultsPage";
import { useState } from "react";


function App() {
  const [shouldSave, setShouldSave] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState(1);
  const universities = {
    "1": "Technische Universität Graz - E",
    "2": "Technische Universität Graz - R",
    "3": "Fachhochschule Salzburg",
    "4": "Technische Universität Wien - E",
    "5": "Technische Universität Wien - R",
    "6": "KU Leuven",
    "7": "Ceské Vysoké Uceni Technické v Praze",
    "8": "Aalborg Universitet - E",
    "9": "Aalborg Universitet - R",
    "10": "Tallinn University of Technology - R",
    "11": "Tallinn University of Technology - E-713",
    "12": "Tallinn University of Technology - E-714",
    "13": "Eurecom",
    "14": "École spéciale de mécanique et d’électricité (ESME)",
    "15": "Institut d'Ingénierie Informatique de Limoges (3Il)",
    "16": "Université Claude Bernard Lyon 1",
    "17": "Université de Lorraine - E",
    "18": "Université de Lorraine - R",
    "19": "Nantes Université - E",
    "20": "Nantes Université - R",
    "21": "TELECOM Paris",
    "22": "IPSA - Institut Polytechnique des Sciences Avancées",
    "23": "ISEP École d’ingénieurs du numérique - R",
    "24": "Université Toulouse III – Paul Sabatier - R",
    "25": "Université Toulouse III – Paul Sabatier - E-713",
    "26": "Université Toulouse III – Paul Sabatier - E-714",
    "27": "Institut National des Sciences Appliquees de Toulouse",
    "28": "Université de Tours - R",
    "29": "Université de Tours - E",
    "30": "Rheinisch-Westfälische Technische Hochschule Aachen",
    "31": "Humboldt-Universität zu Berlin",
    "32": "Ruhr-Universität Bochum",
    "33": "Technische Universität Braunschweig",
    "34": "Karlsruher Institut für Technologie - E",
    "35": "Karlsruher Institut für Technologie - R",
    "36": "Hochschule Konstanz",
    "37": "Universität Leipzig",
    "38": "Technische Universität München (TUM)",
    "39": "Panepistimio Pireos - F",
    "40": "Panepistimio Pireos - S",
    "41": "Panepistimio Pireos - T",
    "42": "Debreceni Egyetem",
    "43": "Università degli Studi di Firenze",
    "44": "Politecnico di Milano",
    "45": "Università degli Studi di Salerno",
    "46": "Kauno Technologijos Universitetas",
    "47": "Universiteit Twente - R",
    "48": "Universiteit Twente - E",
    "49": "Radboud Universiteit Nijmegen",
    "50": "Ss. Cyril and Methodius University",
    "51": "Politechnika Poznanska - R",
    "52": "Politechnika Poznanska - E-0713",
    "53": "Politechnika Poznanska - R-0714",
    "54": "Politechnika Warszawska - R",
    "55": "Politechnika Wroclawska - E-0713",
    "56": "Politechnika Wroclawska - R-0714",
    "58": "Universidade de Aveiro",
    "59": "Instituto Politécnico de Bragança",
    "60": "Universidade de Coimbra",
    "61": "Universidade do Porto - R",
    "62": "Universidade do Porto - E",
    "63": "Slovenská Technická Univerzita v Bratislave (STU) - R",
    "64": "Slovenská Technická Univerzita v Bratislave (STU) - E",
    "65": "Technická Univerzita v Kosiciach",
    "66": "Zilinská Univerzita v Ziline - R",
    "67": "Zilinská Univerzita v Ziline - E",
    "68": "Univerza v Ljubljani - R",
    "69": "Univerza v Ljubljani - E",
    "70": "Univerza v Mariboru",
    "71": "Universidad de Alcalá",
    "72": "Universitat Politècnica de Catalunya - R",
    "73": "Universitat Politècnica de Catalunya - E",
    "74": "Universitat Pompeu Fabra - R",
    "75": "Universitat Pompeu Fabra - E",
    "76": "Universidad Miguel Hernandez de Elche - R",
    "77": "Universidad Miguel Hernandez de Elche - E-0713",
    "78": "Universidad Miguel Hernandez de Elche - E-0714",
    "79": "Universidad Pontificia Comillas, Madrid",
    "80": "Universidad Complutense de Madrid",
    "81": "Universidad Politécnica de Madrid -R",
    "82": "Universidad Politécnica de Madrid - E-0713",
    "83": "Universidad Politécnica de Madrid - E-0713,0714",
    "84": "Universidad Rey Juan Carlos",
    "85": "Universidad Politécnica de Cartagena - R",
    "86": "Universidad Politécnica de Cartagena - E-0713",
    "87": "Universidad Politécnica de Cartagena - E-0714",
    "88": "Universidad de Salamanca",
    "89": "Universidad Pablo de Olavide",
    "90": "Universitat Politècnica de València",
    "91": "Universidad de Vigo",
    "92": "Chalmers tekniska högskola",
    "93": "Luleå tekniska universitet",
    "94": "Kungliga Tekniska högskolan (KTH)",
    "95": "Mälardalens universitet - R",
    "96": "Mälardalens universitet - E",
    "97": "Ankara Üniversitesi - R",
    "98": "Ankara Üniversitesi - E",
    "99": "Istanbul Teknik Üniversitesi"
  };

  const [selectedCertificate, setSelectedCertificate] = useState("B2");
  const [averageGrade, setAverageGrade] = useState("1.0");


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/university-selcet"}/>}/>
        <Route path="/university-selcet" element={<SelectUniversityPage universities={universities} setSelectedUniversity={setSelectedUniversity} selectedUniversity={selectedUniversity}/>}/>
        <Route path="/certification-selcet" element={<SelectCertificationpage setSelectedCertificate={setSelectedCertificate} selectedCertificate={selectedCertificate}/>}/>
        <Route path="/average-grade-selcet" element={<SelectAverageGradePage setShouldSave={setShouldSave} setAverageGrade={setAverageGrade} averageGrade={averageGrade}/>}/>
        <Route path="/results" element={<ResultsPage shouldSave={shouldSave} university={universities[selectedUniversity]} certificate={selectedCertificate} averageGrade={averageGrade}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
