/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchInstructorCourses } from "../../../services/operations/courseDetailsApi";
import IconBtn from "../../Common/IconBtn";
import CoursesTable from "./CoursesTable";

export default function MyCourses() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token);
      if (result) setCourses(result);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text md:text-2xl font-bold text-richblack-5">
          My Courses
        </h1>
        <IconBtn
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </IconBtn>
      </div>
      {!loading ? (
        <CoursesTable courses={courses} setCourses={setCourses} />
      ) : (
        <div className="flex justify-center">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}
