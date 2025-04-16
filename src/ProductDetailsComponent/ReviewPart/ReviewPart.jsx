import React, { useState } from 'react'
import { IoIosStar } from "react-icons/io";
import img from "../../assets/HomeComponentImage/Image.png"


const ReviewPart = () => {

const [showdescription, setshowdescription] = useState("");

  return (
    <>
      <div className="py-2 mt-10">
        <div className="flex items-center gap-x-10">
          <h1
            className="cursor-pointer font-DMsans text-xl text-MenuTextColor active:text-blue-300"
            onClick={() => setshowdescription("Description")}
          >
            Description
          </h1>
          <h1
            className="cursor-pointer font-DMsans text-xl font-bold text-MainfontColor"
            onClick={() => setshowdescription("")}
          >
            Reviews (1)
          </h1>
        </div>
        {showdescription === "Description" ? (
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center justify-between pt-5">
              <div className="pt-3">
                <p className="text-justify font-DMsans text-base text-MenuTextColor">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <hr className="mt-3" />
              </div>
            </div>
          </div>
        ) : (
          <div>
            {[...new Array(2)].map((_, index) => (
              <div className="flex flex-col gap-y-2">
                <div
                  className="flex w-1/2 items-center gap-x-6 py-4 pt-5"
                  key={index}
                >
                  <div>
                    <picture>
                      <img
                        src={img}
                        alt={img}
                        className="h-[40px] w-[40px] rounded-full"
                      />
                    </picture>
                  </div>
                  <div>
                    <h2 className="font-DMsans text-base font-bold">
                      John Doe
                    </h2>
                    <p className="font-DMsans text-xs font-normal">
                      johndoe@gmail.com
                    </p>
                  </div>
                </div>
                <div className="w-[60%]">
                  <p className="font-DM_Sans text-base text-Text_Color text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione, dolorem illum? Adipisci dolores fugiat nam
                    voluptates perferendis, suscipit iure doloribus!
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Post Review */}
      <div className="mt-8">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-DMsans text-xl font-bold text-green-700">
            Add a Review
          </h1>
          <div className="flex flex-col gap-y-8 pt-5">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-md font-DMsans font-bold text-BtnColor"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name Here"
                id="name"
                name="name"
                className="w-1/2 border-b-[1px] border-b-gray-300 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-md font-DMsans font-bold text-BtnColor"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email Here"
                id="email"
                name="email"
                className="w-1/2 border-b-[1px] border-b-gray-300 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="review"
                className="text-md font-DMsans font-bold text-BtnColor mb-2"
              >
                Review
              </label>
              <textarea
                className="w-1/2 border-[1px] border-b-gray-300 pl-2 py-2"
                placeholder="Your Review Here"
                id="review"
                name="review"
              />
            </div>
            <button className="w-[15%] bg-black px-10 py-2 font-DMsans font-semibold text-white">
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ReviewPart
