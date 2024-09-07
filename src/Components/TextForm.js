import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "../my-proj1.css";
import "./Navbar";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); 
  const [isSpeaking, setIsSpeaking] = useState(false); 
  const [utterance, setUtterance] = useState(null); // Track the SpeechSynthesisUtterance instance

  const isTextPresent = text.trim().length > 0;

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
    console.log(utterance);
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

      <div className="container  my-2">
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
