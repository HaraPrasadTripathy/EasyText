// import React, { useState } from "react";
// import { jsPDF } from "jspdf";
// import "../my-proj1.css";
// import "./Navbar";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function TextForm(props) {
//   const [text, setText] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [utterance, setUtterance] = useState(null); // Track the SpeechSynthesisUtterance instance

//   const isTextPresent = text.trim().length > 0;

//   const UpperCaseEvent = () => {
//     if (text === text.toUpperCase()) {
//       props.alertfn("Text is already in Upper Case");
//     } else {
//       let newText = text.toUpperCase();
//       setText(newText);
//       props.alertfn("Success! Text has been converted to Upper Case");
//     }
//   };

//   const LowerCaseEvent = () => {
//     if (text === text.toLowerCase()) {
//       props.alertfn("Text is already in Lower Case");
//     } else {
//       let newText = text.toLowerCase();
//       setText(newText);
//       props.alertfn("Success! Text has been converted to Lower Case");
//     }
//   };

//   const Extraspc = () => {
//     let newText = text.split(/[ ]+/).join(" ");
//     if (text === newText) {
//       props.alertfn("Text already has no extra spaces");
//     } else {
//       setText(newText);
//       props.alertfn("Success! Extra Spaces have been removed");
//     }
//   };

//   const capitalizeAfterSpace = () => {
//     const newText = text
//       .split(" ")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");
//     if (text === newText) {
//       props.alertfn("Text is already capitalized");
//     } else {
//       setText(newText);
//       props.alertfn("Text has been capitalized!");
//     }
//   };

//   const clearFn = () => {
//     let newText = "";
//     setText(newText);
//     props.alertfn("Success! Text has been cleared");

//   };

//   const CopyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(text);
//       props.alertfn("Text has been copied to clipboard");
//     } catch (error) {
//       console.error("Failed to copy text: ", error);
//       props.alertfn("Failed to copy text to clipboard");
//     }
//   };

//   const speakText = () => {
//     console.log(utterance);
//     if (isSpeaking) {
//       window.speechSynthesis.cancel(); // Stop speaking
//       setIsSpeaking(false);
//     } else {
//       const newUtterance = new SpeechSynthesisUtterance(text);

//       // Event listener for when speech ends
//       newUtterance.onend = () => {
//         setIsSpeaking(false);
//       };

//       setUtterance(newUtterance);
//       window.speechSynthesis.speak(newUtterance);
//       setIsSpeaking(true);
//     }
//   };

//   const printText = () => {
//     window.print();
//   };

//   const handleDownload = (format) => {
//     if (format === "txt") {
//       const element = document.createElement("a");
//       const file = new Blob([text], { type: "text/plain" });
//       element.href = URL.createObjectURL(file);
//       element.download = "myText.txt";
//       document.body.appendChild(element); // Required for this to work in FireFox
//       element.click();
//       toast.success("Download Started");
//     } else if (format === "pdf") {
//       const doc = new jsPDF();
//       doc.text(text, 10, 10);
//       doc.save("myText.pdf");
//       toast.success("Download Started");
//     } else if (format === "doc") {
//       const element = document.createElement("a");
//       const file = new Blob([text], { type: "application/msword" });
//       element.href = URL.createObjectURL(file);
//       element.download = "myText.doc";
//       document.body.appendChild(element);
//       element.click();
//       toast.success("Download Started");
//     }

//     setShowDropdown(false); // Close the dropdown after download
//     // props.alertfn(`${format.toUpperCase()} File Downloaded`, "success");
//   };

//   const onchangefn = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <>
//       <div className="formDiv">
//         <h2 style={{ color: props.mode === "dark" ? "black" : "white" }}>
//           {props.heading}
//         </h2>
//         <textarea
//           style={{
//             backgroundColor:
//               props.mode === "dark" ? "white" : "rgb(70, 66, 66)",
//             color: props.mode === "dark" ? "black" : "white",
//           }}
//           className="container"
//           value={text}
//           placeholder={props.placeholder}
//           rows="10"
//           onChange={onchangefn}
//         ></textarea>

//         <button
//           className={`my-4 mx-1 ${
//             props.mode === "dark" ? "btnClassLight" : "btnClassDark"
//           }`}
//           onClick={UpperCaseEvent}
//           disabled={!isTextPresent}
//         >
//           UpperCase
//         </button>
//         <button
//           className={`my-4 mx-1 ${
//             props.mode === "dark" ? "btnClassLight" : "btnClassDark"
//           }`}
//           onClick={LowerCaseEvent}
//           disabled={!isTextPresent}
//         >
//           LowerCase
//         </button>
//         <button
//           className={`my-4 mx-1 ${
//             props.mode === "dark" ? "btnClassLight" : "btnClassDark"
//           }`}
//           onClick={capitalizeAfterSpace}
//           disabled={!isTextPresent}
//         >
//           Capitalize
//         </button>
//         <button
//           className={`my-4 mx-1 ${
//             props.mode === "dark" ? "btnClass1Light" : "btnClass1Dark"
//           }`}
//           onClick={Extraspc}
//           disabled={!isTextPresent}
//         >
//           Remove Spaces
//         </button>
//         <button
//           className={`my-4 mx-1 ${
//             props.mode === "dark" ? "btnClassLight" : "btnClassDark"
//           }`}
//           onClick={CopyToClipboard}
//           disabled={!isTextPresent}
//         >
//           Copy
//         </button>
//         <button
//           className={`my-4 mx-1 ${
//             props.mode === "dark" ? "btnClassLight" : "btnClassDark"
//           }`}
//           onClick={clearFn}
//           disabled={!isTextPresent}
//         >
//           Clear
//         </button>
//         <button
//           className={`my-4 mx-1 ${
//             props.mode === "dark" ? "btnClassLight" : "btnClassDark"
//           }`}
//           onClick={speakText}
//           disabled={!isTextPresent}
//         >
//           <i className={`fas fa-volume-${isSpeaking ? "mute" : "up"}`}></i>
//         </button>
//         <button
//           className={`my-4 mx-1 ${
//             props.mode === "dark" ? "btnClassLight" : "btnClassDark"
//           }`}
//           onClick={printText}
//           disabled={!isTextPresent}
//         >
//           <i className="fas fa-print"></i> Print
//         </button>

//         <button
//           className={`my-4 mx-1 ${
//             props.mode === "dark" ? "btnClassLight" : "btnClassDark"
//           }`}
//           onClick={() => setShowDropdown(!showDropdown)}
//           disabled={!isTextPresent}
//         >
//           Download
//         </button>

//         {showDropdown && (
//           <div
//             className={`dropdown mt-1 ${
//               props.mode === "dark" ? "dark-mode" : "light-mode"
//             }`}
//           >
//             <button
//               className="dropdown-item"
//               onClick={() => handleDownload("txt")}
//             >
//               Download as TXT
//             </button>
//             <button
//               className="dropdown-item"
//               onClick={() => handleDownload("pdf")}
//             >
//               Download as PDF
//             </button>
//             <button
//               className="dropdown-item"
//               onClick={() => handleDownload("doc")}
//             >
//               Download as DOC
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="container  my-2">
//         <h2 style={{ color: props.mode === "dark" ? "black" : "white" }}>
//           Your text Summary
//         </h2>
//         <p style={{ color: props.mode === "dark" ? "black" : "white" }}>
//           {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
//           words and {text.length} characters
//         </p>
//       </div>
//       <ToastContainer
//       position="bottom-right"
//       autoClose={1200}
//       theme="colored"
//       />
//     </>
//   );
// }














import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "../my-proj1.css";
import "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { franc } from "franc-min";
import axios from "axios";
import { langMap, langMap1, languageOptions, languageOptions1 } from "../languageMappings";


const getTextLanguageCode = (text) => {
  const langCode = franc(text);
  return langMap[langCode] || "en-US"; // Default to English if not found
};

// Function to translate text
const translateText = async (text, targetLang) => {
  const srcLang = langMap1[franc(text)]
  console.log(franc(text));
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    text
  )}&langpair=${srcLang}|${targetLang}`;
  try {
    const response = await axios.get(url);
    toast.success(`Successfully translated`);
    return response.data.responseData.translatedText;
  } catch (error) {
    toast.error(error);
    console.error("Translation error:", error);
    return text;
  }
};

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [targetLang, setTargetLang] = useState("en-US"); // Default target language for translation

  const isTextPresent = text.trim().length > 0;

   // Load text from local storage on mount
   useEffect(() => {
    const storedText = localStorage.getItem("text");
    if (storedText) {
      setText(storedText);
    }
  }, []);

  // Save text to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  useEffect(() => {
    const fetchVoices = () => {
      const synth = window.speechSynthesis;
      const voices = synth.getVoices();
      setVoices(voices);

      // Listen for voice changes
      synth.onvoiceschanged = () => {
        setVoices(synth.getVoices());
      };
    };

    fetchVoices();
  }, []);

  const checkVoiceAvailability = (languageCode) => {
    return voices.some((voice) => voice.lang === languageCode);
  };

  const UpperCaseEvent = () => {
    if (text === text.toUpperCase()) {
      props.alertfn("Text is already in Upper Case");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.alertfn("Success! Text has been converted to Upper Case");
    }
  };

  const LowerCaseEvent = () => {
    if (text === text.toLowerCase()) {
      props.alertfn("Text is already in Lower Case");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.alertfn("Success! Text has been converted to Lower Case");
    }
  };

  const Extraspc = () => {
    let newText = text.split(/[ ]+/).join(" ");
    if (text === newText) {
      props.alertfn("Text already has no extra spaces");
    } else {
      setText(newText);
      props.alertfn("Success! Extra Spaces have been removed");
    }
  };

  const capitalizeAfterSpace = () => {
    const newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    if (text === newText) {
      props.alertfn("Text is already capitalized");
    } else {
      setText(newText);
      props.alertfn("Text has been capitalized!");
    }
  };

  const clearFn = () => {
    let newText = "";
    setText(newText);
    props.alertfn("Success! Text has been cleared");
  };

  const CopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      props.alertfn("Text has been copied to clipboard");
    } catch (error) {
      console.error("Failed to copy text: ", error);
      props.alertfn("Failed to copy text to clipboard");
    }
  };

  const speakText = () => {
    const textLangCode = getTextLanguageCode(text);

    if (!text.trim()) {
      toast.error("Text is empty!");
      return;
    }

    // Check if the text language is English and if so, bypass the compatibility check
    const isTextEnglish = textLangCode === "en-US" || textLangCode === "en-GB";

    // If the text is English, skip the compatibility check
    if (!isTextEnglish && textLangCode !== language) {
      toast.error(
        "The selected language does not match the language of the text."
      );
      return;
    }

    if (!checkVoiceAvailability(language)) {
      toast.error("Selected language voice not available!");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const onchangefn = (event) => {
    setText(event.target.value);
  };

  const printText = () => {
    window.print();
  };

  const handleDownload = (format) => {
    if (format === "txt") {
      const element = document.createElement("a");
      const file = new Blob([text], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "myText.txt";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
      toast.success("Download Started");
    } else if (format === "pdf") {
      const doc = new jsPDF();
      doc.text(text, 10, 10);
      doc.save("myText.pdf");
      toast.success("Download Started");
    } else if (format === "doc") {
      const element = document.createElement("a");
      const file = new Blob([text], { type: "application/msword" });
      element.href = URL.createObjectURL(file);
      element.download = "myText.doc";
      document.body.appendChild(element);
      element.click();
      toast.success("Download Started");
    }

    setShowDropdown(false); // Close the dropdown after download
    // props.alertfn(`${format.toUpperCase()} File Downloaded`, "success");
  };

  const handleTargetLanguageChange = (e) => {
    setTargetLang(e.target.value);
  };

  const handleTranslate = async () => {
    const result = await translateText(text, targetLang);
    setText(result); // Update text area with translated text
  };

  return (
    <>
      <div className="formDiv">
        <h2 style={{ color: props.mode === "dark" ? "black" : "white" }}>
          {props.heading}
        </h2>
        <textarea
          style={{
            backgroundColor:
              props.mode === "dark" ? "white" : "rgb(70, 66, 66)",
            color: props.mode === "dark" ? "black" : "white",
          }}
          className="container"
          value={text}
          placeholder={props.placeholder}
          rows="10"
          onChange={onchangefn}
        ></textarea>

        <button
          className={`my-4 mx-1 ${
            props.mode === "dark" ? "btnClassLight" : "btnClassDark"
          }`}
          onClick={UpperCaseEvent}
          disabled={!isTextPresent}
        >
          UpperCase
        </button>
        <button
          className={`my-4 mx-1 ${
            props.mode === "dark" ? "btnClassLight" : "btnClassDark"
          }`}
          onClick={LowerCaseEvent}
          disabled={!isTextPresent}
        >
          LowerCase
        </button>
        <button
          className={`my-4 mx-1 ${
            props.mode === "dark" ? "btnClassLight" : "btnClassDark"
          }`}
          onClick={capitalizeAfterSpace}
          disabled={!isTextPresent}
        >
          Capitalize
        </button>
        <button
          className={`my-4 mx-1 ${
            props.mode === "dark" ? "btnClass1Light" : "btnClass1Dark"
          }`}
          onClick={Extraspc}
          disabled={!isTextPresent}
        >
          Remove Spaces
        </button>
        <button
          className={`my-4 mx-1 ${
            props.mode === "dark" ? "btnClassLight" : "btnClassDark"
          }`}
          onClick={CopyToClipboard}
          disabled={!isTextPresent}
        >
          Copy
        </button>
        <button
          className={`my-4 mx-1 ${
            props.mode === "dark" ? "btnClassLight" : "btnClassDark"
          }`}
          onClick={clearFn}
          disabled={!isTextPresent}
        >
          Clear
        </button>
        <button
          className={`my-4 mx-1 ${
            props.mode === "dark" ? "btnClassLight" : "btnClassDark"
          }`}
          onClick={speakText}
          disabled={!isTextPresent}
        >
          <i className={`fas fa-volume-${isSpeaking ? "mute" : "up"}`}></i>
        </button>
        <button
          className={`my-4 mx-1 ${
            props.mode === "dark" ? "btnClassLight" : "btnClassDark"
          }`}
          onClick={printText}
          disabled={!isTextPresent}
        >
          <i className="fas fa-print"></i> Print
        </button>

        <button
          className={`my-4 mx-1 ${
            props.mode === "dark" ? "btnClassLight" : "btnClassDark"
          }`}
          onClick={() => setShowDropdown(!showDropdown)}
          disabled={!isTextPresent}
        >
          Download
        </button>

        <select
          id="language-select"
          onChange={handleLanguageChange}
          className="my-4 mx-1"
        >
          {languageOptions.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>

        {showDropdown && (
          <div
            className={`dropdown mt-1 ${
              props.mode === "dark" ? "dark-mode" : "light-mode"
            }`}
          >
            <button
              className="dropdown-item"
              onClick={() => handleDownload("txt")}
            >
              Download as TXT
            </button>
            <button
              className="dropdown-item"
              onClick={() => handleDownload("pdf")}
            >
              Download as PDF
            </button>
            <button
              className="dropdown-item"
              onClick={() => handleDownload("doc")}
            >
              Download as DOC
            </button>
          </div>
        )}
      </div>

        <select value={targetLang} onChange={handleTargetLanguageChange}>
          {languageOptions1.map((options)=>(
            <option key={options.code} value={options.code} > {options.label} </option>
          ))}
        </select>

      <button
        className={`my-4 mx-1 ${
          props.mode === "dark" ? "btnClassLight" : "btnClassDark"
        }`}
        onClick={handleTranslate}
        disabled={!isTextPresent}
      >
        Translate
      </button>

      <div className="container  my-2">
        <h2 style={{ color: props.mode === "dark" ? "black" : "white" }}>
          Your text Summary
        </h2>
        <p style={{ color: props.mode === "dark" ? "black" : "white" }}>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          words and {text.length} characters
        </p>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        theme="colored"
      />
    </>
  );
}