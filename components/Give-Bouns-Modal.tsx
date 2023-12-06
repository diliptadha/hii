import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface GiveBounsModalProps {
  onCloseModal: () => void;
  showmodal: boolean;
  Fragment: any;
}

export const GiveBounsModal: React.FC<GiveBounsModalProps> = ({
  onCloseModal,
  showmodal,
  Fragment,
}) => {
  // export const GiveBounsModal = () => {
  const [modal10, setModal10] = useState(false);

  return (
    <Transition appear show={showmodal} as={Fragment}>
      <Dialog as="div" open={showmodal} onClose={onCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0" />
        </Transition.Child>
        <div
          id="slideIn_down_modal"
          className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60"
        >
          <div className="flex min-h-screen items-start justify-center px-4">
            <Dialog.Panel className="panel animate__animated animate__slideInDown my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
              <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                <h5 className="text-lg font-bold">Modal Title</h5>
              </div>
              <div className="p-5">
                <p>
                  Mauris mi tellus, pharetra vel mattis sed, tempus ultrices
                  eros. Phasellus egestas sit amet velit sed luctus. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna
                  ac pulvinar. Ut sit amet ullamcorper mi.
                </p>
                <div className="mt-8 flex items-center justify-end">
                  <button
                    onClick={onCloseModal}
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Discard
                  </button>
                  <button
                    onClick={() => {}}
                    type="button"
                    className="btn btn-primary ltr:ml-4 rtl:mr-4"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
