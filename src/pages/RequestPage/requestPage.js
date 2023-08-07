import React, { useState } from "react";
import "./requestPage.scss";
import Header from "../../component/Header/Header";
import universal from "../../assets/Images/universal.svg"
import amazon from "../../assets/Images/amazon.svg"
import chipote from "../../assets/Images/chipotle.svg"
import beyong from "../../assets/Images/beyong.svg"
import netflix from "../../assets/Images/netflix.svg"
import rakuten from "../../assets/Images/rakuten.svg"

const RequestPage = () => {
  const [Info, setInfo] = useState();

  const [platforms, setPlatforms] = useState({
    youtube: false,
    instagram: false,
    facebook: false,
    tiktok: false,
    snapchat: false,
    twitter: false,
    pinterest: false,
  });
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
  return (
    <React.Fragment>
      <Header />
      <div className="request-demo-page-div">
        <div className="first-div">
          <div className="container">
            <div className="row py-5">
              <div className="left-part col-lg-6 col-md-12 col-sm-12">
                <div className="content-div mx-5">
                  <h1 className="">
                    Creator Marketing <br />
                    That Drives <br />
                    Real Results.
                  </h1>
                  <p className="pe-5 mt-4">
                    <strong>
                      The new standard in creator marketing is here.
                    </strong>{" "}
                    Whether it's activating your next big launch, creating
                    authentic content, or reacting to the latest brand-relevant
                    trend, Pearpop drives real results for the world's best
                    brands. Book a demo to find out more.
                  </p>
                </div>
              </div>
              <div className="right-part col-lg-6 col-md-12 col-sm-12">
                <div className="book-demo mx-5">
                  <h4>See the Power of Pearpop Today</h4>
                  <div className="inputs-div">
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="First Name"
                        // value={Info?.firstName}
                        // onChange={(e) => {
                        //   setInfo({
                        //     ...Info,
                        //     firstName: e.target.value,
                        //   });
                        // }}
                      />
                      {/* <p className="error-class">
                        {error && !Info?.firstName
                          ? "Please Enter FirstName"
                          : ""}
                      </p> */}
                    </div>
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="Last Name"
                        // value={Info?.firstName}
                        // onChange={(e) => {
                        //   setInfo({
                        //     ...Info,
                        //     firstName: e.target.value,
                        //   });
                        // }}
                      />
                      {/* <p className="error-class">
                        {error && !Info?.firstName
                          ? "Please Enter FirstName"
                          : ""}
                      </p> */}
                    </div>
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="Company"
                        // value={Info?.firstName}
                        // onChange={(e) => {
                        //   setInfo({
                        //     ...Info,
                        //     firstName: e.target.value,
                        //   });
                        // }}
                      />
                      {/* <p className="error-class">
                        {error && !Info?.firstName
                          ? "Please Enter FirstName"
                          : ""}
                      </p> */}
                    </div>
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="Work Email Address"
                        // value={Info?.firstName}
                        // onChange={(e) => {
                        //   setInfo({
                        //     ...Info,
                        //     firstName: e.target.value,
                        //   });
                        // }}
                      />
                      {/* <p className="error-class">
                        {error && !Info?.firstName
                          ? "Please Enter FirstName"
                          : ""}
                      </p> */}
                    </div>
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="Current revenue?"
                        // value={Info?.firstName}
                        // onChange={(e) => {
                        //   setInfo({
                        //     ...Info,
                        //     firstName: e.target.value,
                        //   });
                        // }}
                      />
                      {/* <p className="error-class">
                        {error && !Info?.firstName
                          ? "Please Enter FirstName"
                          : ""}
                      </p> */}
                    </div>
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="What Goals You Want To Accomplish Through Vidbling?"
                        // value={Info?.firstName}
                        // onChange={(e) => {
                        //   setInfo({
                        //     ...Info,
                        //     firstName: e.target.value,
                        //   });
                        // }}
                      />
                      {/* <p className="error-class">
                        {error && !Info?.firstName
                          ? "Please Enter FirstName"
                          : ""}
                      </p> */}
                    </div>{" "}
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="where are You Selling Currently?"
                        // value={Info?.firstName}
                        // onChange={(e) => {
                        //   setInfo({
                        //     ...Info,
                        //     firstName: e.target.value,
                        //   });
                        // }}
                      />
                      {/* <p className="error-class">
                        {error && !Info?.firstName
                          ? "Please Enter FirstName"
                          : ""}
                      </p> */}
                    </div>
                    <div className="d-flex ms-3">
                      <span className="mt-2">Annual Influencer Budget:</span>
                      <select
                        className="annual-budget ms-4"
                        style={{
                          backgroundColor: "transparent",
                          color: "white",
                          width: 150,
                          borderRadius: 5,
                          padding: 8,
                          paddingLeft: 10,
                        }}
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
                    </div>
                    <div className="form-group inputs p-3 ">
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
                    {platforms.twitter && (
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group inputs">
                          <input
                            type="text"
                            className="form-control inputs"
                            required
                            placeholder="Twitter Profile Link"
                            value={Info?.twitter}
                            onChange={(e) => {
                              setInfo({
                                ...Info,
                                twitter: e.target.value,
                              });
                            }}
                          />
                          {/* <p className="error-class">
                          {error && !Info?.twitter
                            ? "Please Enter Twitter Link"
                            : ""}
                        </p> */}
                        </div>
                      </div>
                    )}
                    {platforms.facebook && (
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group inputs">
                          <input
                            type="text"
                            className="form-control inputs"
                            required
                            placeholder="FaceBook Profile Link"
                            value={Info?.facebook}
                            onChange={(e) => {
                              setInfo({
                                ...Info,
                                facebook: e.target.value,
                              });
                            }}
                          />
                          {/* <p className="error-class">
                          {error && !Info?.facebook
                            ? "Please Enter Facebook Link"
                            : ""}
                        </p> */}
                        </div>
                      </div>
                    )}
                    {platforms.tiktok && (
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group inputs">
                          <input
                            type="text"
                            className="form-control inputs"
                            required
                            placeholder="TikTok Profile Link"
                            value={Info?.tiktok}
                            onChange={(e) => {
                              setInfo({
                                ...Info,
                                tiktok: e.target.value,
                              });
                            }}
                          />
                          {/* <p className="error-class">
                          {error && !Info?.tiktok
                            ? "Please Enter Tiktok Link"
                            : ""}
                        </p> */}
                        </div>
                      </div>
                    )}
                    {platforms.youtube && (
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group inputs">
                          <input
                            type="text"
                            className="form-control inputs"
                            required
                            placeholder="YouTube Profile Link"
                            value={Info?.youtube}
                            onChange={(e) => {
                              setInfo({
                                ...Info,
                                youtube: e.target.value,
                              });
                            }}
                          />
                          {/* <p className="error-class">
                          {error && !Info?.youtube
                            ? "Please Enter Youtube Link"
                            : ""}
                        </p> */}
                        </div>
                      </div>
                    )}
                    {platforms.instagram && (
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group inputs">
                          <input
                            type="text"
                            className="form-control inputs"
                            required
                            placeholder="Instagram Profile Link"
                            value={Info?.instagram}
                            onChange={(e) => {
                              setInfo({
                                ...Info,
                                instagram: e.target.value,
                              });
                            }}
                          />
                          {/* <p className="error-class">
                          {error && !Info?.instagram
                            ? "Please Enter Instagram Link"
                            : ""}
                        </p> */}
                        </div>
                      </div>
                    )}
                    {platforms.snapchat && (
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group inputs">
                          <input
                            type="text"
                            className="form-control inputs"
                            required
                            placeholder="Snapchat Profile Link"
                            value={Info?.snapchat}
                            onChange={(e) => {
                              setInfo({
                                ...Info,
                                snapchat: e.target.value,
                              });
                            }}
                          />
                          {/* <p className="error-class">
                          {error && !Info?.snapchat
                            ? "Please Enter SnapChat Link"
                            : ""}
                        </p> */}
                        </div>
                      </div>
                    )}
                    {platforms.pinterest && (
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group inputs">
                          <input
                            type="text"
                            className="form-control inputs"
                            required
                            placeholder="Pinterest Profile Link"
                            value={Info?.pinterest}
                            onChange={(e) => {
                              setInfo({
                                ...Info,
                                pinterest: e.target.value,
                              });
                            }}
                          />
                          {/* <p className="error-class">
                          {error && !Info?.pinterest
                            ? "Please Enter Pinterest Link"
                            : ""}
                        </p> */}
                        </div>
                      </div>
                    )}
                    <hr />
                 
                    <div className="mt-5 d-flex justify-content-center">
                      <div>
                        <div className="box1 position-relative"></div>
                        <div
                          className="gradient-border position-relative"
                          style={{ marginTop: "-61px", marginLeft: "6px" }}
                        >
                          <button
                            // onClick={handleSubmit}
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
        <div className="second-div container">
          <div className="title-div text-center">The Company We Keep</div>
          <div className="row mt-5 images-div">
            <div className="col-lg-2 col-md-3 col-sm-6 d-flex justify-content-center">
                <img src={netflix} alt="netflix"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 d-flex justify-content-center">
            <img src={chipote} alt="chipote"/>

            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 d-flex justify-content-center">
                <img src={amazon} alt="amazon" className="mt-3"/>

            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 d-flex justify-content-center">
                <img src={beyong} alt="beyong"/>


            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 d-flex justify-content-center">
            <img src={universal} alt="universal"/>


            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 d-flex justify-content-center">
                <img src={rakuten} alt="rakuten"/>

            </div>
          </div>

          <div className="faq-div my-5 mb-5">
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
                    Is my brand a good fit for Pearpop?
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
                    Is my budget big enough for Pearpop?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We have options to fit any budget. Pearpop is performance
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
                    I work in a specific industry, can I still work with Pearpop
                    creators?
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
      </div>
    </React.Fragment>
  );
};

export default RequestPage;
