/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import RatingStars from "../Common/RatingStars";
import GetAvgRating from "../../utils/avgRating";
import { Link } from "react-router-dom";

const Card = ({ course, Height }) => {
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews);
    setAvgReviewCount(count);
  }, [course]);

  return (
    <>
      <Link to={`/courses/${course._id}`}>
        <div className="mr-4">
          <div className="rounded-lg">
            <img
              src={course?.thumbnail}
              alt="course thumnail"
              className={`${Height} w-full rounded-lg object-cover `}
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className="md:text-lg text-richblack-5">{course?.courseName}</p>
            <p className="text-sm text-richblack-50">
              
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <span className="text-yellow-5"> {avgReviewCount || 0} </span>
              <RatingStars Review_Count={avgReviewCount} />
              <span className="text-richblack-400">
                
                {course?.ratingAndReviews?.length} Ratings
              </span>
            </div>
            <p className="md:text-lg font-semibold text-richblack-5"> Rs. {course?.price} </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
