import React, { useState, useEffect } from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
const axios = require("axios").default;

const Feed = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/people");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingData();
  }, []);
  return (
    <>
      <div className="flex-1">
        {data.people?.map((peoples) => {
          return (
            <div
              className="bg-[#202020] w-[400px] ml-10 mt-4 p-4 "
              key={peoples._id}
            >
              <div className="flex items-center justify-between text-lg">
                <h1>{peoples.name}</h1>
                <h1>{peoples.job}</h1>
              </div>
              <div className="flex flex-col gap-32 justify-evenly">
                <p className="mt-3 text-[14.2px]">{peoples.descriptions}</p>
                <div className="flex items-center justify-between ">
                  <a
                    href={peoples?.twitterUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <p>
                        <FaTwitter />
                      </p>
                      <p>Twitter</p>
                    </span>
                  </a>
                  <a
                    href={peoples?.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <p>
                        <FaLinkedin />
                      </p>
                      <p>Linkedin</p>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Feed;
