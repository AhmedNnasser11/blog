import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../ListItem/ListItem";
import {
  AccessibilityContainer,
  UList,
} from "../Accessibility/AccessibilityStyle";
import {
  selectGadgets,
  selectUser,
  getGadgets,
  selectSliderStatus,
} from "../../../features/blog/blogSlice";
import LoadingPage from "../../../Pages/LoadingPage/LoadingPage";

const Gadgets = () => {
  const Gadgets = useSelector(selectGadgets);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
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
      {status === "loading" ? (
        <LoadingPage />
      ) : (
        <AccessibilityContainer>
          <UList>
            {Gadgets.map((item) => (
              <ListItem
                key={item.id}
                title={item.title}
                image={item.bg}
                user={user[0]?.name}
              />
            ))}
          </UList>
        </AccessibilityContainer>
      )}
    </>
  );
};

export default Gadgets;
