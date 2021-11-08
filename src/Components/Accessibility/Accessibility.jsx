import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccessibility,
  selectAccessibility,
  selectSliderStatus,
} from "../../features/blog/blogSlice";
import MultiSlider from "../MultiSlider/MultiSlider";
import LoadingPage from "../../Pages/LoadingPage/LoadingPage";

const Accessibility = () => {
  const dispatch = useDispatch();
  const Accessibility = useSelector(selectAccessibility);

  useEffect(() => {
    if (Accessibility.length === 0) {
      dispatch(getAccessibility());
    } else {
      return null;
    }
  }, [dispatch]);

  return (
    <>
      {Accessibility.length === 0 ? (
        <LoadingPage />
      ) : (
        <MultiSlider data={Accessibility} />
      )}
    </>
  );
};

export default Accessibility;
