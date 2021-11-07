import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGadgets,
  selectGadgets,
  selectSliderStatus,
} from "../../features/blog/blogSlice";
import MultiSlider from "../MultiSlider/MultiSlider";
import LoadingPage from "../../Pages/LoadingPage/LoadingPage";

const Gadgets = () => {
  const dispatch = useDispatch();
  const Gadgets = useSelector(selectGadgets);
  const status = useSelector(selectSliderStatus);

  useEffect(() => {
    if (Gadgets.length === 0) {
      dispatch(getGadgets());
    } else {
      return null;
    }
  }, [dispatch]);

  return (
    <>
      {status === "loading" ? <LoadingPage /> : <MultiSlider data={Gadgets} />}
    </>
  );
};

export default Gadgets;
