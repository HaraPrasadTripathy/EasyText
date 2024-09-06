import React, { useState } from "react";
import { jsPDF } from "jspdf"; 
import "../my-proj1.css";
import "./Navbar";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); // For showing format options
  const [isSpeaking, setIsSpeaking] = useState(false); // Track speaking state
  const [utterance, setUtterance] = useState(null); // Track the SpeechSynthesisUtterance instance

  const UpperCaseEvent = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alertfn("Success! Text has been converted to Upper Case");
    if (newText === "")
      props.alertfn("TextField is Empty, enter some text first");
  };

  const LowerCaseEvent = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alertfn("Success! Text has been converted to Lower Case");
    if (newText === "")
      props.alertfn("TextField is Empty, enter some text first");
  };

  const Extraspc = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alertfn("Success! Extra Spaces have been removed");
    if (text === "") props.alertfn("TextField is Empty, enter some text first");
  };

  const clearFn = () => {
    let newText = "";
    setText(newText);
    props.alertfn("Success! Text has been cleared");
    if (text === "") props.alertfn("TextField is already empty");
  };

  const capitalizeAfterSpace = () => {
    const newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.alertfn("Text has been capitalized!");
    if (newText === "")
      props.alertfn("TextField is Empty, enter some text first");
  };

  const CopyToClipboard = async () => {
    if (!text) {
      props.alertfn("TextField is empty, nothing to copy");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      props.alertfn("Text has been copied to clipboard");
    } catch (error) {
      console.error("Failed to copy text: ", error);
      props.alertfn("Failed to copy text to clipboard");
    }
  };

  const speakText = () => {
    console.log(utterance)
    if (!text) {
      props.alertfn("TextField is empty, nothing to speak");
      return;
    }
  
    if (isSpeaking) {
      window.speechSynthesis.cancel(); // Stop speaking
      setIsSpeaking(false);
    } else {
      const newUtterance = new SpeechSynthesisUtterance(text);
  
      // Event listener for when speech ends
      newUtterance.onend = () => {
        setIsSpeaking(false);
      };
  
      setUtterance(newUtterance);
      window.speechSynthesis.speak(newUtterance);
      setIsSpeaking(true);
    }
  };
  

  const printText = () => {
    window.print();
  };

  const handleDownload = (format) => {
    if (text === "") {
      props.alertfn("Please enter some text first", "danger");
      return;
    }

    if (format === "txt") {
      const element = document.createElement("a");
      const file = new Blob([text], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "myText.txt";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    } else if (format === "pdf") {
      const doc = new jsPDF();
      doc.text(text, 10, 10);
      doc.save("myText.pdf");
    } else if (format === "doc") {
      const element = document.createElement("a");
      const file = new Blob([text], { type: "application/msword" });
      element.href = URL.createObjectURL(file);
      element.download = "myText.doc";
      document.body.appendChild(element);
      element.click();
    }

    setShowDropdown(false); // Close the dropdown after download
    props.alertfn(`${format.toUpperCase()} File Downloaded`, "success");
  };

  const onchangefn = (event) => {
    setText(event.target.value);
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
          rows="11"
          onChange={onchangefn}
        ></textarea>

        <button className="btnClass my-4 mx-1" onClick={UpperCaseEvent}>
          UpperCase
        </button>
        <button className="btnClass my-4 mx-2" onClick={LowerCaseEvent}>
          LowerCase
        </button>
        <button className="btnClass my-4 mx-2" onClick={capitalizeAfterSpace}>
          Capitalize
        </button>
        <button className="btnClass1 my-4 mx-2" onClick={Extraspc}>
          Remove Spaces
        </button>
        <button className="btnClass my-4 mx-2" onClick={CopyToClipboard}>
          Copy
        </button>
        <button className="btnClass my-4 mx-2" onClick={clearFn}>
          Clear
        </button>
        <button className="btnClass my-4 mx-2" onClick={speakText}>
           <i className={`fas fa-volume-${isSpeaking ? 'mute' : 'up'}`}></i>  
        </button>
        <button className="btnClass my-4 mx-2" onClick={printText}>
          <i className="fas fa-print"></i> Print
        </button>

        {/* Download button */}
        <button
          className="btnClass my-4 mx-2"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Download
        </button>

        {/* Dropdown for selecting format */}
        {showDropdown && (
          <div className="dropdown mt-2">
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

      <div className="container">
        <h2 style={{ color: props.mode === "dark" ? "black" : "white" }}>
          Your text Summary
        </h2>
        <p style={{ color: props.mode === "dark" ? "black" : "white" }}>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          words and {text.length} characters
        </p>
      </div>
    </>
  );
}
