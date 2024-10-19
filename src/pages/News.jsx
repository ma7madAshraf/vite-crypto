import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getNews } from "../features/newsSlice";
import { Loading } from "../components";
import NewsCard from "../components/NewsCard";
import Pagination from "../components/Pagination";

export const loader = (store) => async () => {
  const { news } = store.getState().news;
  if (news.length < 1) {
    await store.dispatch(getNews());
  }

  return null;
};
const News = ({ simplified }) => {
  const { isLoading, news } = useSelector((store) => store.news);
  let showedNews = simplified ? news.slice(0, 10) : news;
  const [newsList, setNewsList] = useState(showedNews);
  const [newsPage, setNewsPage] = useState(1);

  if (isLoading) {
    return (
      <section className=" flex flex-wrap  gap-x-2 gap-y-3 justify-evenly items-center my-8">
        <Loading />
      </section>
    );
  }
  return (
    <>
      <section className=" flex flex-wrap   gap-x-2 gap-y-3 justify-evenly items-center my-8">
        {newsList?.slice((newsPage - 1) * 10, newsPage * 10).map((ele) => {
          return <NewsCard key={ele.url} news={ele} />;
        })}
      </section>
      <Pagination
        page={newsPage}
        onChange={(val) => setNewsPage(val)}
        total={Math.ceil(newsList.length / 10)}
      />
    </>
  );
};

export default News;
