import { Outlet, useSearchParams } from "react-router-dom";
import { AuthForm, Modal, Notification } from "@/components";
import { closeModal, triggerModal } from "@/store/slices/modal";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/store";

export default function Root() {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const authModal = searchParams.get("modal");

  useEffect(() => {
    if (authModal === "sign-in" || authModal === "register") {
      dispatch(
        triggerModal({
          children: <AuthForm route={authModal} />,
          clickToDisable: true,
          show: true,
          className: "",
          cancel: () => setSearchParams({ modal: "false" }),
        })
      );
    } else {
      dispatch(closeModal());
    }
  }, [authModal, dispatch, setSearchParams]);

  return (
    <>
      <Modal />
      <Notification />
      {/* <MouseTracker /> */}
      <Outlet />
    </>
  );
}
