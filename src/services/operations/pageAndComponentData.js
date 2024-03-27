import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { catalogData } from "../api";

export const getCatalogPageData = async (categoryId) => {
  const toastId = toast.loading("Loading...");
  let result = [];

  try {
    const res = await apiConnector("POST", catalogData.CATALOGPAGEDATA_API, {
      categoryId: categoryId,
    });

    if (!res?.data?.success) {
      throw new Error("Could not Fetch Category page data");
    }

    result = res?.data;
  } catch (error) {
    console.log("CATALOG PAGE DATA API ERROR....", error);

    toast.error(error.message);
    result = error.response?.data;
  }
  toast.dismiss(toastId);
  return result;
};
