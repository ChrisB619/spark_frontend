import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import copy from "clipboard-copy";

const Clipboard = () => {

  const inputCopyRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (inputCopyRef.current) {
      copy(inputCopyRef.current.value);
      setIsCopied(true);

      // Reset the copied state after a certain period (e.g., 2 seconds)
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };
  const handleCut = () => {
    if (inputCopyRef.current) {
      copy(inputCopyRef.current.value);
      inputCopyRef.current.value = ""; // Clear the input
      setIsCopied(true);

      // Reset the copied state after a certain period (e.g., 2 seconds)
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  const textareaCopyRef = useRef(null);
  const [isCopied1, setIsCopied1] = useState(false);

  const handleCopyTextArea = () => {
    if (textareaCopyRef.current) {
      copy(textareaCopyRef.current.value);
      setIsCopied1(true);
      // Reset the copied state after a certain period (e.g., 2 seconds)
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  const handleCutTextArea = () => {
    if (textareaCopyRef.current) {
      copy(textareaCopyRef.current.value);
      textareaCopyRef.current.value = "";
      setIsCopied(true);
      // Reset the copied state after a certain period (e.g., 2 seconds)
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };
  const [isCopied2] = useState(false);

  const handleCopyOTP = () => {
    const otpElement = document.getElementById("paragraph-copy1");

    if (otpElement) {
      const otpValue = otpElement.innerText;
      copy(otpValue);
    }
  };

  const advancedParagraphRef = useRef(null);
  const [copiedLink, setCopiedLink] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [copiedHiddenCode, setCopiedHiddenCode] = useState(null);

  const handleCopyLink = () => {
    if (advancedParagraphRef.current) {
      const linkToCopy = advancedParagraphRef.current.innerText;
      copy(linkToCopy);
      setCopiedLink(linkToCopy);
      clearSelection();
    }
  };

  const handleCopyHiddenCode = () => {
    const hiddenCode = "2291";
    copy(hiddenCode);
    setCopiedHiddenCode(hiddenCode);
    clearSelection();
  };

  const clearSelection = () => {
    if (window.getSelection) {
      const selection = window.getSelection();
      selection.removeAllRanges();
    }
  };
  return (
    <div>
      <div className="page-wrapper cardhead">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Clipboard</h3>
               
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            {/* Drag Card */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Copy from input</h5>
                </div>
                <div className="card-body">
                  <div className="clipboard">
                    <form className="form-horizontal">
                      <input
                        type="text"
                        className={`form-control mb-4 ${isCopied ? "clipboardcopyedvalue" : ""
                          }`}
                        id="input-copy"
                        defaultValue="http://www.admin-dashboard.com"
                        ref={inputCopyRef}
                      />
                      <button
                        className="mb-1 btn clip-btn btn-primary me-1"
                        type="button"
                        onClick={handleCopy}
                      >
                        <i className="far fa-copy" /> Copy from Input
                      </button>
                      <Link
                        onClick={handleCut}
                        className="mb-1 btn clip-btn btn-dark"
                        to="#"
                        data-clipboard-action="cut"
                        data-clipboard-target="#input-copy"
                      >
                        <i className="fas fa-cut" /> Cut from Input
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Copy from Text Area</h5>
                </div>
                <div className="card-body">
                  <div className="clipboard">
                    <form className="form-horizontal">
                      <textarea
                        className={`form-control mb-4 ${isCopied1 ? "clipboardcopyedvalue" : ""
                          }`}
                        rows={3}
                        id="textarea-copy"
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                        ref={textareaCopyRef}
                      />
                      <Link
                        className="mb-1 btn clip-btn btn-primary me-1"
                        to="#"
                        data-clipboard-action="copy"
                        data-clipboard-target="#textarea-copy"
                        onClick={handleCopyTextArea}
                      >
                        <i className="far fa-copy" /> Copy from Input
                      </Link>
                      <Link
                        className="mb-1 btn clip-btn btn-dark"
                        to="#"
                        data-clipboard-action="cut"
                        data-clipboard-target="#textarea-copy"
                        onClick={handleCutTextArea}
                      >
                        <i className="fas fa-cut" /> Cut from Input
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Copy Text from Paragraph</h5>
                </div>
                <div className="card-body">
                  <div className="clipboard copy-txt">
                    <p className="otp-pass">
                      Here is your OTP{" "}
                      <span
                        id="paragraph-copy1"
                        className={isCopied2 ? "orange-text" : ""}
                      >
                        22991
                      </span>
                      .
                    </p>
                    <p className="mb-4">Please do not share it to anyone</p>
                    <Link
                      className="mb-1 btn clip-btn btn-primary"
                      to="#"
                      data-clipboard-action="copy"
                      data-clipboard-target="#paragraph-copy1"
                      onClick={handleCopyOTP}
                    >
                      <i className="far fa-copy" /> Copy from Input
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Copy Hidden Text (Advanced)</h5>
                </div>
                <div className="card-body">
                  <div className="clipboard copy-txt">
                    <p
                      className={`mb-4 ${copiedLink ? "clipboardcopyedvalue" : ""
                        }`}
                    >
                      Link -&gt;{" "}
                      <span ref={advancedParagraphRef}>
                        {copiedLink || "http://www.example.com/example"}
                      </span>
                    </p>
                    <Link
                      className="mb-1 btn clip-btn btn-primary me-1"
                      to="#"
                      data-clipboard-action="copy"
                      data-clipboard-target="#advanced-paragraph"
                      onClick={handleCopyLink}
                    >
                      <i className="far fa-copy" /> Copy Link
                    </Link>
                    <Link
                      className={`mb-1 btn clip-btn btn-warning ${copiedLink ? "black-text" : ""
                        }`}
                      to="#"
                      data-clipboard-action="copy"
                      data-clipboard-text={2291}
                      onClick={handleCopyHiddenCode}
                    >
                      <i className="far fa-copy" /> Copy Hidden Code
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Drag Card */}
          </div>
        </div>
      </div>
      <div className="row">
        {/* Drag Card */}
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Copy from input</h5>
            </div>
            <div className="card-body">
              <div className="clipboard">
                <form className="form-horizontal">
                  <input
                    type="text"
                    className={`form-control mb-4 ${isCopied ? "clipboardcopyedvalue" : ""
                      }`}
                    id="input-copy"
                    defaultValue="http://www.admin-dashboard.com"
                    ref={inputCopyRef}
                  />
                  <button
                    className="mb-1 btn clip-btn btn-primary me-1"
                    type="button"
                    onClick={handleCopy}
                  >
                    <i className="far fa-copy" /> Copy from Input
                  </button>
                  <Link
                    onClick={handleCut}
                    className="mb-1 btn clip-btn btn-dark"
                    to="#"
                    data-clipboard-action="cut"
                    data-clipboard-target="#input-copy"
                  >
                    <i className="fas fa-cut" /> Cut from Input
                  </Link>
                </form>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Copy from Text Area</h5>
            </div>
            <div className="card-body">
              <div className="clipboard">
                <form className="form-horizontal">
                  <textarea
                    className={`form-control mb-4 ${isCopied1 ? "clipboardcopyedvalue" : ""
                      }`}
                    rows={3}
                    id="textarea-copy"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    ref={textareaCopyRef}
                  />
                  <Link
                    className="mb-1 btn clip-btn btn-primary me-1"
                    to="#"
                    data-clipboard-action="copy"
                    data-clipboard-target="#textarea-copy"
                    onClick={handleCopyTextArea}
                  >
                    <i className="far fa-copy" /> Copy from Input
                  </Link>
                  <Link
                    className="mb-1 btn clip-btn btn-dark"
                    to="#"
                    data-clipboard-action="cut"
                    data-clipboard-target="#textarea-copy"
                    onClick={handleCutTextArea}
                  >
                    <i className="fas fa-cut" /> Cut from Input
                  </Link>
                </form>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Copy Text from Paragraph</h5>
            </div>
            <div className="card-body">
              <div className="clipboard copy-txt">
                <p className="otp-pass">
                  Here is your OTP{" "}
                  <span
                    id="paragraph-copy1"
                    className={isCopied2 ? "orange-text" : ""}
                  >
                    22991
                  </span>
                  .
                </p>
                <p className="mb-4">Please do not share it to anyone</p>
                <Link
                  className="mb-1 btn clip-btn btn-primary"
                  to="#"
                  data-clipboard-action="copy"
                  data-clipboard-target="#paragraph-copy1"
                  onClick={handleCopyOTP}
                >
                  <i className="far fa-copy" /> Copy from Input
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Copy Hidden Text (Advanced)</h5>
            </div>
            <div className="card-body">
              <div className="clipboard copy-txt">
                <p
                  className={`mb-4 ${copiedLink ? "clipboardcopyedvalue" : ""}`}
                >
                  Link -&gt;{" "}
                  <span ref={advancedParagraphRef}>
                    {copiedLink || "http://www.example.com/example"}
                  </span>
                </p>
                <Link
                  className="mb-1 btn clip-btn btn-primary me-1"
                  to="#"
                  data-clipboard-action="copy"
                  data-clipboard-target="#advanced-paragraph"
                  onClick={handleCopyLink}
                >
                  <i className="far fa-copy" /> Copy Link
                </Link>
                <Link
                  className={`mb-1 btn clip-btn btn-warning ${copiedLink ? "black-text" : ""
                    }`}
                  to="#"
                  data-clipboard-action="copy"
                  data-clipboard-text={2291}
                  onClick={handleCopyHiddenCode}
                >
                  <i className="far fa-copy" /> Copy Hidden Code
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Drag Card */}
      </div>
    </div>
  );
};

export default Clipboard;
