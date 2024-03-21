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
    if (authModal === "sign-in") {
      dispatch(
        triggerModal({
          children: <AuthForm route="sign-in" />,
          clickToDisable: true,
          show: true,
          cancel: () => setSearchParams({ modal: "false" }),
        })
      );
    } else if (authModal === "register") {
      dispatch(
        triggerModal({
          children: <AuthForm route="register" />,
          clickToDisable: true,
          show: true,
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
