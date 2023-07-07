import React, { useEffect, useMemo, useState } from "react";
import "./signUp.scss";
import Dropzone from "react-dropzone";
import starimg from "../assets/Images/Starimg.png";
import cameraimg from "../assets/Images/cameraimg.png";
import axios from "axios";
import { BASE_URL } from "../constants/axios";
import thankyou from "../assets/Images/thankyou.png";
import countryList from "react-select-country-list";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import loadingimg from "../assets/videos/Loading.gif";

const SignUp = () => {
  const [Info, setInfo] = useState();
  const [error, setError] = useState(false);
  const [previewSource, setPreviewSource] = useState([]);
  const [mediafiles, setMediaFiles] = useState([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const search = useLocation().search;
  const rcode = new URLSearchParams(search)?.get("rcode");
  const params = new URLSearchParams();
  const [platforms, setPlatforms] = useState({
    youtube: false,
    instagram: false,
    facebook: false,
    tiktok: false,
    snapchat: false,
    twitter: false,
    pinterest: false,
  });

  const navigate = useNavigate();
  const options = useMemo(() => countryList().getData(), []);

  useEffect(() => {
    if (rcode) {
      setInfo({ ...Info, referrer: rcode });
    }
  }, [rcode]);

  const imageupload = async (acceptedFiles) => {
    let temp = Object.assign([], previewSource);
    try {
      if (acceptedFiles.length + previewSource.length < 5) {
        setLoading(true);

        let array = Object.assign([], acceptedFiles);
        for (let i = 0; i < array.length; i++) {
          let formData = new FormData();
          formData.append("image", array[i]);
          const res = await axios.post(
            `${BASE_URL}/influencer/image`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(res);
          temp.push(res.data.url);
        }
        setPreviewSource(temp);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setPlatforms((prevPlatforms) => ({
      ...prevPlatforms,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(true);
    let payload = {};
    if (mediafiles?.length > 5) {
      setError(true);
      return;
    }
    payload = {
      firstName: Info?.firstName,
      lastName: Info?.lastName,
      email: Info?.email,
      address: Info?.address,
      password: Info?.password,
      number: Info?.number,
      zipcode: Info?.zipcode,
      city: Info?.city,
      country: Info?.country,
      photos: previewSource,
      referrer: Info?.referrer,
      platform: [
        {
          name: "Facebook",
          profileUrl: Info?.facebook,
        },
        {
          name: "Instagram",
          profileUrl: Info?.instagram,
        },
        {
          name: "Snapchat",
          profileUrl: Info?.snapchat,
        },
        {
          name: "Youtube",
          profileUrl: Info?.youtube,
        },
        {
          name: "Pinterest",
          profileUrl: Info?.pinterest,
        },
        {
          name: "Tiktok",
          profileUrl: Info?.tiktok,
        },
      ],
    };
    console.log(payload);

    axios
      .post(`${BASE_URL}/influencer/signup`, payload)
      .then((res) => {
        setSuccess(true);
        navigate("/successSignUp/" + res.data.referral_code);
        setInfo({
          city: "",
          country: "",
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          zipcode: "",
          number: "",
          address: "",
          photos: [],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (index) => {
    setPreviewSource((prevSource) => prevSource.filter((_, i) => i !== index));
    setMediaFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
  return (
    <React.Fragment>
      <div className="signup-main-div container">
        <div className="row">
          <div className="left  col-lg-6 col-md-12 col-sm-12 mt-4 mt-sm-0">
            <div className="left-center-part mt-sm-5 pt-sm-5 px-3 ps-lg-0">
              <div className="connect-div mt-sm-5 mt-3">
                <div className="d-lg-flex pt-3">
                  <img src={starimg} alt="starimg" className=" d-lg-none" />
                  <h1 className="sign-connect mt-3 mt-lg-0">Connect </h1>
                  <img
                    src={starimg}
                    alt="starimg"
                    className="d-none d-lg-block"
                  />
                </div>
                <h1 className="clb mt-2 mt-lg-0">Collaborate</h1>
              </div>

              <div className="inf1-div mb-3">
                <h1 className="sign-inf">Influence</h1>
              </div>
              <span className="inf2-div fw-semibold" style={{ fontSize: 22 }}>
                Power of AI-driven matching on Vidbling{" "}
              </span>
              <span style={{ fontSize: 18, fontWeight: "normal" }}>
                where creators like you connect with brands that understand and
                appreciate your creative vision
              </span>
            </div>
          </div>
          {success && (
            <div
              className="right  thankyou col-lg-6 col-md-12 col-sm-12 "
              style={{ paddingBottom: 0 }}
            >
              <div className="right-center-part">
                <img
                  src={thankyou}
                  alt=""
                  width={100}
                  style={{ marginBottom: 30, marginTop: 70 }}
                />
                <h2>Thankyou!</h2>
                <p className="text-center">
                  Congratulations on joining the Vidbling revolution! 🎉
                </p>
                <p className="text-center">
                  You've unlocked a world of endless possibilities and boundless
                  opportunities. As a member of our vibrant community, get ready
                  to collaborate with top brands, monetize your passion, and
                  soar to new heights of success. Keep an eye on your email
                  because we'll be sending you exciting updates and
                  notifications about our upcoming launch. Get ready to embark
                  on an exhilarating journey like no other!
                </p>
                <p className="mb-0"> Best wishes, </p>

                <p className="mb-0">The Vidbling Team</p>
              </div>
            </div>
          )}
          {!success && (
            <div className=" right sign-up col-lg-6 col-md-12 col-sm-12">
              <div className="right-center-part">
                <h2>Create Your Page</h2>

                <div className="inputs-div row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs me-0"
                        placeholder="First Name"
                        value={Info?.firstName}
                        onChange={(e) => {
                          setInfo({
                            ...Info,
                            firstName: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !Info?.firstName
                          ? "Please Enter FirstName"
                          : ""}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group inputs ms-md-0">
                      <input
                        type="text"
                        className="form-control inputs"
                        required
                        placeholder="Last Name"
                        value={Info?.lastName}
                        onChange={(e) => {
                          setInfo({
                            ...Info,
                            lastName: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !Info?.lastName
                          ? "Please Enter Last Name"
                          : ""}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group inputs">
                      <input
                        type="email"
                        className="form-control inputs"
                        required
                        placeholder="Email"
                        value={Info?.email}
                        onChange={(e) => {
                          setInfo({
                            ...Info,
                            email: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !Info?.email ? "Please Enter Email" : ""}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs"
                        required
                        placeholder="Address"
                        value={Info?.address}
                        onChange={(e) => {
                          setInfo({
                            ...Info,
                            address: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !Info?.address ? "Please Enter Address" : ""}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs"
                        required
                        placeholder="Contact Number"
                        value={Info?.number}
                        onChange={(e) => {
                          setInfo({
                            ...Info,
                            number: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !Info?.number
                          ? " Please Enter ContactNo"
                          : ""}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group inputs">
                      <select
                        name="country"
                        className="form-select ms-2"
                        aria-label="Default select example"
                        style={{
                          backgroundColor: "transparent",
                          color: "white",
                          padding: 13,
                          paddingLeft: 21,
                        }}
                        value={Info?.country}
                        onChange={(e) =>
                          setInfo({
                            ...Info,
                            country: e.target.value,
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
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs"
                        required
                        placeholder="City"
                        value={Info?.city}
                        onChange={(e) => {
                          setInfo({
                            ...Info,
                            city: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !Info?.city ? "Please Enter city" : ""}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group inputs">
                      <input
                        type="text"
                        className="form-control inputs"
                        required
                        placeholder="ZIP Code"
                        value={Info?.zipcode}
                        onChange={(e) => {
                          setInfo({
                            ...Info,
                            zipcode: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !Info?.zipcode ? "Please Enter zipcode" : ""}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group inputs">
                      <input
                        type="password"
                        className="form-control inputs"
                        required
                        placeholder="Password"
                        value={Info?.password}
                        onChange={(e) => {
                          setInfo({
                            ...Info,
                            password: e.target.value,
                          });
                        }}
                      />
                      <p className="error-class">
                        {error && !Info?.password
                          ? "Please Enter passwordx`"
                          : ""}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group inputs p-3 ">
                      <h6>Select Any Platform</h6>
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
                        <p className="error-class">
                          {error && !Info?.twitter
                            ? "Please Enter Twitter Link"
                            : ""}
                        </p>
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
                        <p className="error-class">
                          {error && !Info?.facebook
                            ? "Please Enter Facebook Link"
                            : ""}
                        </p>
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
                        <p className="error-class">
                          {error && !Info?.tiktok
                            ? "Please Enter Tiktok Link"
                            : ""}
                        </p>
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
                        <p className="error-class">
                          {error && !Info?.youtube
                            ? "Please Enter Youtube Link"
                            : ""}
                        </p>
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
                        <p className="error-class">
                          {error && !Info?.instagram
                            ? "Please Enter Instagram Link"
                            : ""}
                        </p>
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
                        <p className="error-class">
                          {error && !Info?.snapchat
                            ? "Please Enter SnapChat Link"
                            : ""}
                        </p>
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
                        <p className="error-class">
                          {error && !Info?.pinterest
                            ? "Please Enter Pinterest Link"
                            : ""}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="upload-div mb-2">
                    <h6 className="mx-4 mt-3">
                      Upload Your Photographs Or Videos
                    </h6>

                    <div className="u-1 d-flex justify-content-between mx-4">
                      <span>(Up to 5 Images or Videos)</span>
                      <span>Recommended Size: 290x300</span>
                    </div>

                    <div className="img-div row mx-0">
                      <div className="col-12">
                        <div className="img-dropzone m-2">
                          <Dropzone
                            onDrop={(files) => {
                              imageupload(files);
                            }}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <div {...getRootProps({ className: "dropzone" })}>
                                <input {...getInputProps()} />
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                  <img
                                    src={cameraimg}
                                    alt=""
                                    className="ms-0"
                                  />
                                  <p className="mb-0 px-3 text-center text-[#94A3B8]">
                                    Drag and drop files here or click to select
                                    files.
                                  </p>
                                </div>
                              </div>
                            )}
                          </Dropzone>
                        </div>
                      </div>
                      {loading ? (
                        <div className="loading-div mt-3">
                          <img src={loadingimg} />
                        </div>
                      ) : (
                        <div className="pt-2 preview">
                          <p className="text-danger">
                            {error && previewSource.length < 1
                              ? "Minimum 1 Photos Is Required"
                              : ""}
                          </p>

                          {previewSource &&
                            previewSource?.map((val, index) => {
                              if (
                                val.includes(".jpg") ||
                                val.includes(".jpeg") ||
                                val.includes(".png")
                              ) {
                                return (
                                  <div className="d-flex flex-column align-items-center justify-content-center">
                                    <img
                                      src={val}
                                      className="p-2"
                                      width={100}
                                      height={100}
                                      alt="img"
                                    />
                                    <div
                                      className="px-3 py-1"
                                      style={{
                                        border: 1,
                                        borderColor: "white",
                                        cursor: "pointer",

                                        borderStyle: "solid",
                                        fontSize: 12,
                                        width: "fit-content",
                                        borderRadius: 50,
                                      }}
                                      onClick={() => {
                                        console.log(index);
                                        handleDelete(index);
                                      }}
                                    >
                                      Remove
                                    </div>
                                  </div>
                                );
                              } else {
                                return (
                                  <div className="d-flex flex-column align-items-center justify-content-center">
                                    <video
                                      width={"auto"}
                                      height={100}
                                      className="p-2"
                                      autoPlay
                                      loop
                                      playsInline
                                    >
                                      <source src={val} type="video/mp4" />
                                    </video>
                                    <div
                                      className="px-3 py-1"
                                      style={{
                                        border: 1,
                                        borderColor: "white",
                                        cursor: "pointer",
                                        borderStyle: "solid",
                                        fontSize: 12,
                                        width: "fit-content",
                                        borderRadius: 50,
                                      }}
                                      onClick={(index) => handleDelete(index)}
                                    >
                                      Remove
                                    </div>
                                  </div>
                                );
                              }
                            })}
                        </div>
                      )}
                    </div>

                    <div className="footer-btn d-flex justify-content-center mt-3 mb-3 cursor-pointer">
                      <div className="mb-2 mt-4">
                        <div className="box position-relative "></div>
                        <div
                          className="gradient-border1 joinnow-div position-relative"
                          style={{ marginTop: "-70.5px", marginLeft: "6px" }}
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
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="footer-span-div d-flex justify-content-center">
                      <span className="span-1 text-[#94A3B8]">
                        Already have an accoun?
                      </span>
                      <span className="span-2 mx-2">Login</span>
                    </div>

                    <div className="footer-span-div d-sm-flex justify-content-center mb-3">
                      <span className="span-1 text-[#94A3B8]">
                        By signing up, you agree to our{" "}
                      </span>
                      <span className="span-2 mx-2">
                        Terms and Privacy Policy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
