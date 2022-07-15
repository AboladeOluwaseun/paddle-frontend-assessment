import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="w-[20rem] h-[10rem] absolute top-[10%] blur-sm b  z-[0] bg-white opacity-10"></div>
      <div className="min-h-[100vh] z-[2] text-center relative max-w-[100%]">
        <div className="py-10  max-w-[90%] mx-auto flex flex-col items-center justify-center space-y-8">
          <div>
            <p className="mt-10 ">
              <span className="border-b-2 border-b-white border-b-solid "></span>{" "}
              ABOUT US
            </p>
            <p>Built for Saas and E-commerce</p>
            <p>
              Our tools are easy to set up and use with a user friendly
              dashboard that enables you to set up, launch, automate and manage
              multi-affiliate campaigns in 5 minutes.
            </p>
          </div>
          <h2>
            Metricks was developed because just like you, we needed a product
            that could give us good value
          </h2>

          <div className="">
            <div>
              <p>Why us?</p>
              <p>
                We pride ourselves in our ability to innovate and create
                world-class tools that provide reliable and efficient
                touchpoints between advertisers and affiliates.
              </p>
            </div>
            <div>
              <p>Growing with you</p>
              <p>
                Leveraging the best technology, we have developed an all-in-one
                affiliate marketing tracking software, a genius tool to help you
                track, automate and optimize your influencer campaigns, all from
                one dashboard.
              </p>
              <p>
                Our team of experts are constantly brainstorming, testing and
                developing new solutions with only one thing in mind - your
                business growth. Your success is our success and by giving you
                the tools you need to scale, we grow as well.
              </p>
            </div>
          </div>

          <div>
            <p>Got a Question?</p>
            <p>
              See how Metricks can help your business grow with best Affiliate
              Marketing Tracking Software.
            </p>
            <p>Contact us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
