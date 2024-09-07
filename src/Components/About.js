import "../my-proj1.css";

export default function About(props) {
  return (
    <div className="aboutParent">
      <div
        className="accordion"
        id="accordionExample"
        style={{ color: props.mode === "dark" ? "black" : "white" }}
      >
        <h1
          className="my-3"
          style={{ color: props.mode === "dark" ? "black" : "white" }}
        >
          About Us
        </h1>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "white" : "rgb(3,3,24)",
            color: props.mode === "dark" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor:
                  props.mode === "dark" ? "white" : "rgb(77, 72, 72)",
                color: props.mode === "dark" ? "black" : "white",
              }}
            >
              Description
            </button>
          </h2>
          <div
            style={{
              backgroundColor:
                props.mode === "dark" ? "white" : "rgba(44, 41, 41)",
              color: props.mode === "dark" ? "black" : "white",
            }}
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              EasyText is a versatile text editor designed to simplify text
              manipulation tasks. Whether you're editing plain text, formatting
              content, or analyzing word counts, TextUtils provides an intuitive
              interface for all your text processing needs. With a focus on
              efficiency and ease of use, this tool empowers users to enhance
              their writing and streamline everyday text editing tasks. Built
              with modern technologies, it offers seamless performance across
              devices, ensuring a smooth experience for everyone.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "white" : "rgb(1,1,1)",
            color: props.mode === "dark" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor:
                  props.mode === "dark" ? "white" : "rgb(72, 72, 72)",
                color: props.mode === "dark" ? "black" : "white",
              }}
            >
              Our Approach
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.mode === "dark" ? "white" : "rgba(44, 41, 41)",
                color: props.mode === "dark" ? "black" : "white",
              }}
            >
              EasyText is built on the principle of simplicity and efficiency.
              The goal is to provide a powerful yet easy-to-use text editing
              tool that anyone can rely on for everyday tasks. With a
              streamlined design and a focus on functionality, TextUtils ensures
              that users can edit and manage text without any unnecessary
              complexity. Each feature is thoughtfully designed to enhance
              productivity, making text manipulation faster and more intuitive.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "white" : "rgb(3,3,24)",
            color: props.mode === "dark" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor:
                  props.mode === "dark" ? "white" : "rgb(77, 72, 72)",
                color: props.mode === "dark" ? "black" : "white",
              }}
            >
              Our Mission
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.mode === "dark" ? "white" : "rgba(44, 41, 41)",
                color: props.mode === "dark" ? "black" : "white",
              }}
            >
              At EasyText, our mission is to deliver a simple yet powerful text
              editing solution that meets the diverse needs of our users. We
              strive to create a platform that is accessible, efficient, and
              capable of handling everything from basic edits to advanced text
              transformations. By constantly evolving and incorporating user
              feedback, we aim to remain at the forefront of text editing
              technology, providing tools that empower individuals and
              professionals alike.
            </div>
          </div>
        </div>
      </div>

      <div
        className="contact"
        style={{ color: props.mode === "dark" ? "black" : "white" }}
      >
        <h1 className="my-3">Contact Us</h1>
        <p className="mx-1" style={{ display: "inline",fontWeight: "500" }}>Email:</p> support@EasyText.com <br></br>
        <p className="mx-1" style={{ display: "inline",fontWeight: "500" }}>Phone:</p> +1-234-567-8900 <br></br>
        <p className="mx-1" style={{ display: "inline",fontWeight: "500" }}>Address:</p> 123 EasyText Lane, Coding
        City, CodeWorld 56789 <br></br>
        <h5 className="mx-1" style={{fontWeight: "600" }}>Follow Us:</h5>
        <p className="mx-1" style={{ display: "inline",fontWeight: "500" }}>
          Twitter:
        </p>
        <a
          href="https://twitter.com/EasyTextapp"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          @EasyTextApp
        </a>{" "}
        <br></br>
        <p className="mx-1" style={{ display: "inline",fontWeight: "500" }}>
          Facebook:
        </p>
        <a
          href="https://twitter.com/EasyTextsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          facebook.com/EasyText
        </a>
      </div>
    </div>
  );
}
