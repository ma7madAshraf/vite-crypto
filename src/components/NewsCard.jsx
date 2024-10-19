import React from "react";
import moment from "moment";
import coinDesk from "../images/coinDesk.png";
const NewsCard = ({ news }) => {
  return (
    <div className="card card-compact bg-base-300 w-80 md:w-96 shadow-xl hover:shadow-2xl h-[400px] md:h-[500px]">
      <figure className="hidden sm:flex max-h-[288px] ">
        <img
          src={news.thumbnail}
          alt="news"
          className="h-[180px] md:h-[288px] w-full "
        />
      </figure>
      <div className="card-body">
        <h2
          className={`card-title text-base md:text-xl ${
            news.title.length > 60 && `md:text-lg leading-5`
          }`}
        >
          {news.title}
        </h2>
        <p>
          {news.description.length > 100
            ? `${news.description.substring(0, 100)}...`
            : news.description}
        </p>
        <div className="card-actions justify-between items-center mt-4 ">
          <div className="avatar placeholder items-center gap-x-1 md:gap-x-2">
            <div className="bg-neutral text-neutral-content w-6 md:w-8 rounded-full">
              <img src={coinDesk} alt="coin desk" />
            </div>{" "}
            <span> {moment(news.createdAt).startOf("ss").fromNow()}</span>
          </div>
          <a
            href={news.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm md:btn-md capitalize"
          >
            see more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
