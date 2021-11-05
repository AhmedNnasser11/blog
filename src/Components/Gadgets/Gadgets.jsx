import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGadgets, selectGadgets } from "../../features/blog/blogSlice";
import MultiSlider from "../MultiSlider/MultiSlider";

const Gadgets = () => {
  const dispatch = useDispatch();
  const Gadgets = useSelector(selectGadgets);

  useEffect(() => {
    dispatch(getGadgets());
  }, [dispatch]);

  return (
    <>
      <MultiSlider data={Gadgets} />
    </>
  );
};

export default Gadgets;
