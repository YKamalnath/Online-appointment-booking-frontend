import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./SuccessStories.css";
import memberImage1 from "../../assets/Images/member-1.jpg";
import memberImage2 from "../../assets/Images/member-2.jpg";
import memberImage3 from "../../assets/Images/member-3.jpg";

import ArrowPrevious from "../../assets/Images/arrow-previous.svg";
import ArrowNext from "../../assets/Images/arrow-next.svg";

const SuccessStories = () => {
  const successStoriesData = [
    {
        name: "James T.",
        designation: "Patient",
        des: "Booking my appointment was seamless! I was able to schedule a consultation with a top cardiologist within minutes. The process was quick, and the doctor provided excellent care. I’m feeling better and confident in my treatment plan!",
        memberImg: memberImage1, // Update with patient image
      },
      {
        name: "Sarah M.",
        designation: "Patient",
        des: "I needed a specialist for my ongoing knee pain, and this platform made it so easy to book an appointment. The healthcare provider was very professional and helped me with my diagnosis and treatment plan.",
        memberImg: memberImage2, // Update with patient image
      },
      {
        name: "Victor W.",
        designation: "Patient",
        des: "The virtual care option was a game changer! I was able to consult a doctor from home about my symptoms, and the follow-up care was just as thorough. I highly recommend this service to anyone looking for quality healthcare online.",
        memberImg: memberImage3, // Update with patient image
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === successStoriesData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? successStoriesData.length - 1 : prevIndex - 1,
    );
  };

  const currentStory = successStoriesData[currentIndex];
  const nextProfile =
    successStoriesData[(currentIndex + 1) % successStoriesData.length];
  const thirdProfile =
    successStoriesData[(currentIndex + 2) % successStoriesData.length];

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
  });

  return (
    <div className="main-success-stories-container">
      <h1 className="services-heading">
      Our Patient <span className="heading-different-color-resume"> Review</span>
      </h1>
      <div className="services-heading-des">
      Hear from patients who have benefited from our seamless appointment
      booking process and expert care.
      </div>
      <div {...handlers} className="main-our-success-stories-container">
        <div>
          <div>
            <div className="success-stories-container">
              <div className="member-privious-button-container">

                <img
                  src={ArrowPrevious}
                  alt="Previous"
                  className="member-privious-next-button"
                  onClick={handlePrevious}
                />
              </div>
              <div>
                <div className="stories-description-container">
                  <div>{currentStory.name}</div>
                  <div>{currentStory.designation}</div>
                  <div>{currentStory.des}</div>
                </div>
                <div className="profile-images-container">
                  <div>
                    <div>
                      <div className="first-member-image-container">
                        <img
                          className="current-member-image"
                          src={currentStory.memberImg}
                          alt="member-image"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="members-image-container">
                        <img
                          className="other-member-image"
                          src={nextProfile.memberImg}
                          alt="member-image"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="members-image-container">
                        <img
                          className="other-member-image"
                          src={thirdProfile.memberImg}
                          alt="member-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-next-button-container">
                {/* <i
                  className="fa-solid fa-greater-than member-privious-next-button"
                  onClick={handleNext}
                ></i> */}

                <img
                  src={ArrowNext}
                  alt="Next"
                  className="member-privious-next-button"
                  onClick={handleNext}
                />
              </div>
            </div>
          </div>
          {/* Circles for indicating current slide */}
          <div className="circles-container">
            {successStoriesData.map((_, index) => (
              <div
                key={index}
                className={`circle ${
                  index === currentIndex ? "active-circle" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
