import React, { useState } from "react";
import "./requestPage.scss";
import Header from "../../component/Header/Header";
import { MdOutlineWatchLater } from "react-icons/md";
import Footer from "../../component/Footer/Footer";
import thankyou from "../../assets/Images/thankyou.png";
import Branding from "../../component/Branding/Branding";
import axios from "axios";
import { BASE_URL } from "../../constants/axios";
const RequestPage = () => {
  const [requestInfo, setRequestInfo] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [platforms, setPlatforms] = useState({
    youtube: false,
    instagram: false,
    facebook: false,
    tiktok: false,
    snapchat: false,
    twitter: false,
    pinterest: false,
  });

  const [value, onChange] = useState(new Date());
  const [tz, setTz] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setPlatforms((prevPlatforms) => ({
      ...prevPlatforms,
      [name]: checked,
    }));
  };
  const options = [
    { value: "1", label: "Choose Option" },
    { value: "2", label: "$0 - $1,000" },
    { value: "3", label: "$1,000 - $5,000" },
    { value: "4", label: "$5,000 - $10,000" },
    { value: "5", label: "$10,000 - $25,000" },
    { value: "6", label: "$25,000 - $50,000" },
    { value: "7", label: "$50,000 - $250,000" },
    { value: "8", label: "$250,000 +" },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(true);
    let payload = {};
    payload = {
      firstName: requestInfo?.firstName,
      lastName: requestInfo?.lastName,
      company: requestInfo?.company,
      workEmail: requestInfo?.workEmail,
      password: requestInfo?.password,
      revenue: requestInfo?.revenue,
      goals: requestInfo?.goals,
      currentlySelling: requestInfo?.currentlySelling,
      annualInfluencerBudget: requestInfo?.annualInfluencerBudget,
      brandPlatform: [],
    };
    if (platforms?.facebook) {
      payload.brandPlatform.push({ name: "Facebook" });
    }
    if (platforms?.instagram) {
      payload.brandPlatform.push({ name: "Instagram" });
    }
    if (platforms?.snapchat) {
      payload.brandPlatform.push({ name: "Snapchat" });
    }
    if (platforms?.youtube) {
      payload.brandPlatform.push({ name: "Youtube" });
    }
    if (platforms?.pinterest) {
      payload.brandPlatform.push({ name: "Pinterest" });
    }
    if (platforms?.tiktok) {
      payload.brandPlatform.push({ name: "Tiktok" });
    }
    if (platforms?.twitter) {
      payload.brandPlatform.push({ name: "Twitter" });
    }

    console.log(payload, "payloaddd");

    axios.post(`${BASE_URL}/brand/signup`, payload).then((res) => {
      console.log(res, "siiii");
      setIsSuccess(true);
      if (res && res.data.code === 200)
        setRequestInfo({
          firstName: "",
          lastName: "",
          company: "",
          workEmail: "",
          password: "",
          revenue: "",
          goals: "",
          currentlySelling: "",
          annualInfluencerBudget: "",
          brandPlatform: "",
        });
      window.open("https://calendly.com/zalitni-vidbling/30min");
    });
  };
  return (
    <React.Fragment>
      <Header />

      <div className="request-demo-page-div">
        <div className="first-div">
          <div className="container">
            <div className="row pt-2 pb-5">
              <div className="left-part col-lg-6 col-md-12 col-sm-12">
                <div className="content-div mx-5">
                  <h1 className="creator">Creator </h1>
                  <h1 className="marketing">Marketing</h1>
                  <h1 className="drives">That Drives</h1>
                  <h1 className="real">Real Results.</h1>
                  <p className="pe-5 mt-4">
                    <strong>
                      The new standard in creator marketing is here.
                    </strong>{" "}
                    Whether it's activating your next big launch, creating
                    authentic content, or reacting to the latest brand-relevant
                    trend, Vidbling drives real results for the world's best
                    brands. Book a demo to find out more.
                  </p>
                </div>
              </div>
              <div className="right-part col-lg-6 col-md-12 col-sm-12">
                <div className="book-demo mx-3 p-4">
                  <h3>See the Power of Vidbling Today</h3>
                  <div className="inputs-div">
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="First Name"
                        value={requestInfo?.firstName}
                        onChange={(e) => {
                          setRequestInfo({
                            ...requestInfo,
                            firstName: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !requestInfo?.firstName
                          ? "Please Enter First Name"
                          : ""}
                      </p>
                    </div>
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="Last Name"
                        value={requestInfo?.lastName}
                        onChange={(e) => {
                          setRequestInfo({
                            ...requestInfo,
                            lastName: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !requestInfo?.lastName
                          ? "Please Enter Last Name"
                          : ""}
                      </p>
                    </div>
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="Company"
                        value={requestInfo?.company}
                        onChange={(e) => {
                          setRequestInfo({
                            ...requestInfo,
                            company: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !requestInfo?.company
                          ? "Please Enter Company Name"
                          : ""}
                      </p>
                    </div>
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="Work Email Address"
                        value={requestInfo?.workEmail}
                        onChange={(e) => {
                          setRequestInfo({
                            ...requestInfo,
                            workEmail: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !requestInfo?.workEmail
                          ? "Please Enter Email Address"
                          : ""}
                      </p>
                    </div>
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="Password"
                        value={requestInfo?.password}
                        onChange={(e) => {
                          setRequestInfo({
                            ...requestInfo,
                            password: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !requestInfo?.password
                          ? "Please Enter Password"
                          : ""}
                      </p>
                    </div>
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="Current revenue?"
                        value={requestInfo?.revenue}
                        onChange={(e) => {
                          setRequestInfo({
                            ...requestInfo,
                            revenue: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !requestInfo?.revenue
                          ? "Please Enter Current Revenue"
                          : ""}
                      </p>
                    </div>
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="What Goals You Want To Accomplish Through Vidbling?"
                        value={requestInfo?.goals}
                        onChange={(e) => {
                          setRequestInfo({
                            ...requestInfo,
                            goals: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !requestInfo?.goals
                          ? "Please Enter Goals"
                          : ""}
                      </p>
                    </div>
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="where are You Selling Currently?"
                        value={requestInfo?.currentlySelling}
                        onChange={(e) => {
                          setRequestInfo({
                            ...requestInfo,
                            currentlySelling: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !requestInfo?.currentlySelling
                          ? "Please Enter Selling"
                          : ""}
                      </p>
                    </div>
                    <div className="row  inputs">
                      <div className="col-lg-5 col-md-12 col-sm-12 p-0">
                        <p className="mt-2">Annual Influencer Budget:</p>
                      </div>
                      <div className="col-lg-7 col-md-12 col-sm-12 p-0">
                        <select
                          className="annual-budget"
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            width: "100%",
                            border: "1px solid #ced4da",
                            borderRadius: 5,
                            padding: 8,
                            paddingLeft: 10,
                          }}
                          value={requestInfo?.annualInfluencerBudget}
                          onChange={(e) =>
                            setRequestInfo({
                              ...requestInfo,
                              annualInfluencerBudget: e.target.value,
                            })
                          }
                        >
                          {options?.map((i) => (
                            <option
                              style={{ background: "black" }}
                              key={i.value}
                              value={i.label}
                            >
                              {i.label}
                            </option>
                          ))}
                        </select>
                        <p className="error-class">
                          {error && !requestInfo?.annualInfluencerBudget
                            ? "Please Enter Annual Budget"
                            : ""}
                        </p>
                      </div>
                    </div>
                    <div className="form-group inputs p-3">
                      <h6>Preferred Social Channels?</h6>
                      <div className="d-flex">
                        <div className="d-flex  align-items-center col-6 mt-2">
                          <input
                            type="checkbox"
                            className="check-clr youtube"
                            name="youtube"
                            checked={platforms.youtube}
                            onChange={handleCheckboxChange}
                            id="chk-youtube"
                          />

                          <label
                            style={{ width: 100 }}
                            className="mx-2"
                            htmlFor="chk-youtube"
                          >
                            Youtube
                          </label>
                        </div>
                        <div className="d-flex  align-items-center col-6 mt-2">
                          <input
                            type="checkbox"
                            className="check-clr instagram"
                            name="instagram"
                            checked={platforms.instagram}
                            onChange={handleCheckboxChange}
                            id="chk-instagram"
                          />
                          <label
                            style={{ width: 100 }}
                            className="mx-2"
                            htmlFor="chk-instagram"
                          >
                            Instagram
                          </label>
                        </div>
                      </div>

                      <div className="d-flex">
                        <div className="d-flex  align-items-center col-6 mt-2">
                          <input
                            type="checkbox"
                            className="check-clr facebook"
                            name="facebook"
                            checked={platforms.facebook}
                            onChange={handleCheckboxChange}
                            id="chk-facebook"
                          />
                          <label
                            style={{ width: 100 }}
                            className="mx-2"
                            htmlFor="chk-facebook"
                          >
                            Facebook
                          </label>
                        </div>
                        <div className="d-flex  align-items-center col-6 mt-2">
                          <input
                            type="checkbox"
                            className="check-clr tiktok"
                            name="tiktok"
                            checked={platforms.tiktok}
                            onChange={handleCheckboxChange}
                            id="chk-tiktok"
                          />
                          <label
                            style={{ width: 100 }}
                            className="mx-2"
                            htmlFor="chk-tiktok"
                          >
                            Tiktok
                          </label>
                        </div>
                      </div>

                      <div className="d-flex">
                        <div className="d-flex  align-items-center col-6 mt-2">
                          <input
                            type="checkbox"
                            className="check-clr snap"
                            name="snapchat"
                            checked={platforms.snapchat}
                            onChange={handleCheckboxChange}
                            id="chk-snapchat"
                          />
                          <label
                            style={{ width: 100 }}
                            className="mx-2"
                            htmlFor="chk-snapchat"
                          >
                            Snapchat
                          </label>
                        </div>
                        <div className="d-flex  align-items-center col-6 mt-2">
                          <input
                            type="checkbox"
                            className="check-clr twitter "
                            name="twitter"
                            checked={platforms.twitter}
                            onChange={handleCheckboxChange}
                            id="chk-twitter"
                          />
                          <label
                            style={{ width: 100 }}
                            className="mx-2"
                            htmlFor="chk-twitter"
                          >
                            Twitter
                          </label>{" "}
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="d-flex  align-items-center col-6 mt-2">
                          <input
                            type="checkbox"
                            className="check-clr pinterest"
                            name="pinterest"
                            checked={platforms.pinterest}
                            onChange={handleCheckboxChange}
                            id="chk-pinterest"
                          />

                          <label
                            style={{ width: 100 }}
                            className="mx-2"
                            htmlFor="chk-pinterest"
                          >
                            Pinterest
                          </label>
                        </div>
                      </div>
                    </div>

                    <hr />
                    <div className="mt-4 d-flex justify-content-center">
                      <div>
                        <div className="box1 position-relative"></div>
                        <div
                          className="gradient-border position-relative"
                          style={{ marginTop: "-61px", marginLeft: "6px" }}
                        >
                          <button
                            onClick={handleSubmit}
                            style={{
                              fontSize: 24,
                              fontWeight: "600",
                              position: "absolute",
                              paddingTop: 0,
                              cursor: "pointer",
                              background: "none",
                              color: "white",
                              outline: "none",
                              border: "none",
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="privacy-policy mt-4">
                      Vidbling <span> Privacy Policy</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-div mt-4">
          <div className="title-div text-center">The Company We Keep</div>
          <div className="mt-2 py-5 images-div">
            <Branding />
          </div>
          <div className="faq-div container my-5 pb-3">
            <h1 className="faq-title my-3">Frequently Asked Questions</h1>
            <div className="accordion mt-4" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Is my brand a good fit for Vidbling?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Absolutely! We work with month old startups and artists all
                    the way to Fortune 500 companies.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Is my budget big enough for Vidbling?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We have options to fit any budget. Vidbling is performance
                    focused, more budget means more results.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    I work in a specific industry, can I still work with
                    Vidbling creators?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Yes, we have 200,000+ creators of all varieties, and can
                    find ones that create content for your industry.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default RequestPage;
