import { useEffect, useState } from "react";
import Footer from "../components/Common/Footer";
import { useParams } from "react-router-dom";
import { getCatalogPageData } from "../services/operations/pageAndComponentData";
import Card from "../components/Catalog/Card";
import { useSelector } from "react-redux";
import Error from "./Error";
import CourseSlider from "../components/Catalog/CourseSlider";

const Catalog = () => {
  const { loading } = useSelector((state) => state.profile);
  const { categoryId } = useParams();
  const [active, setActive] = useState(1);
  const [catalogPageData, setCatalogPageData] = useState(null);


  useEffect(() => {
    const getCategoryDetails = async () => {
      try {
        const res = await getCatalogPageData(categoryId);
        setCatalogPageData(res);
      } catch (error) {
        console.log(error);
      }
    };
    if (categoryId) {
      getCategoryDetails();
    }
  }, [categoryId]);

  if (loading || !catalogPageData) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!loading && !catalogPageData.success) return <Error />;

  return (
    <>
      {/* Hero Section */}
      <div className=" box-content bg-richblack-800 px-4">
        <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
          <p className="text-sm text-richblack-300">
            {`Home / Catalog / `}
            <span className="text-yellow-25">
              {catalogPageData?.data?.selectedCategory?.name}
            </span>
          </p>
          <p className="text-3xl font-semibold text-richblack-5">
            {catalogPageData?.data?.selectedCategory?.name}
          </p>
          <p className="max-w-[870px] text-richblack-200">
            {catalogPageData?.data?.selectedCategory?.description}
          </p>
        </div>
      </div>

      {/* Section 1 - Most Popular */}
      <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="section_heading text-lg">
          Courses to get you started
        </div>
        <div className="my-4 flex border-b border-b-richblack-600 text-sm">
          <p
            className={`px-4 py-2 ${
              active === 1
                ? "border-b border-b-yellow-25 text-yellow-25"
                : "text-richblack-50"
            } cursor-pointer`}
            onClick={() => setActive(1)}
          >
            Most Popular
          </p>
          <p
            className={`px-4 py-2 ${
              active === 2
                ? "border-b border-b-yellow-25 text-yellow-25"
                : "text-richblack-50"
            } cursor-pointer`}
            onClick={() => setActive(2)}
          >
            New
          </p>
        </div>

        <div>
          {catalogPageData?.data?.selectedCategory?.course.length > 3 ? (
            <CourseSlider
              courses={catalogPageData?.data?.selectedCategory?.course}
            />
          ) : (
            <div className=" grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 ">
              {catalogPageData?.data?.selectedCategory?.course.map(
                (course, i) => (
                  <Card
                    course={course}
                    key={i}
                    Height={"h-[200px] md:h-[160px]"}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Section 2 - Top courses*/}
      <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 lg:max-w-maxContent">
        <div className="section_heading text-lg mb-10">
          Top courses in {catalogPageData?.data?.differentCategory[0].name}
        </div>
        <div>
          {catalogPageData?.data?.differentCategory[0].course.length > 3 ? (
            <CourseSlider
              courses={catalogPageData?.data?.differentCategory[0]?.course}
            />
          ) : (
            <div className=" grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 ">
              {catalogPageData?.data?.differentCategory[0]?.course?.map(
                (course, i) => (
                  <Card
                    course={course}
                    key={i}
                    Height={"h-[200px] md:h-[160px]"}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Section 3 - Frequently Bought*/}
      <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="section_heading text-lg">Frequently Bought</div>
        <div className="py-8">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {catalogPageData?.data?.mostSellingCourses
              .map((course, i) => (
                <Card course={course} key={i} Height={"h-[200px] md:h-[160px]"} />
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Catalog;
