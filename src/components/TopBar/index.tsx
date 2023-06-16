import { useState } from "react";
import Lucide from "../../base-components/Lucide";
import Breadcrumb from "../../base-components/Breadcrumb";
import { FormInput } from "../../base-components/Form";
import { Menu, Popover, Dialog } from "../../base-components/Headless";
import fakerData from "../../utils/faker";
import _ from "lodash";
import clsx from "clsx";

function Main(props: { toggleMobileMenu: (event: React.MouseEvent) => void }) {
  const [searchResultModal, setSearchResultModal] = useState(false);

  // Show search result modal
  const showSearchResultModal = () => {
    setSearchResultModal(true);
  };

  // On press event (Ctrl+k)
  document.querySelectorAll("body")[0].onkeydown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.which == 75) {
      setSearchResultModal(true);
    }
  };

  return (
    <>
      {/* BEGIN: Top Bar */}
      <div className="h-[63px] z-[51] flex items-center relative xl:px-5">
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb light className="hidden -intro-x xl:flex">
          <Breadcrumb.Link to="#">App</Breadcrumb.Link>
          <Breadcrumb.Link to="/cv">Online CV</Breadcrumb.Link>
          <Breadcrumb.Link to="/cv" active={true}>
            Dashboard
          </Breadcrumb.Link>
        </Breadcrumb>
        {/* END: Breadcrumb */}
        {/* BEGIN: Mobile Menu */}
        <div className="mr-3 -intro-x xl:hidden sm:mr-6">
          <div
            className="cursor-pointer w-[38px] h-[38px] rounded-full border border-white/20 flex items-center justify-center"
            onClick={props.toggleMobileMenu}
          >
            <Lucide
              icon="BarChart2"
              className="w-5 h-5 text-white transform rotate-90 dark:text-slate-500"
            />
          </div>
        </div>
        {/* END: Mobile Menu */}
        {/* BEGIN: Search */}
        <div className="relative ml-auto intro-x sm:mx-auto">
          <div className="relative hidden mt-1 sm:block">
            <FormInput
              onClick={showSearchResultModal}
              type="text"
              className="w-80 shadow-none rounded-full text-slate-200 border-transparent bg-white/[0.11] pl-3.5 pr-8 transition-[width] duration-300 ease-in-out placeholder:text-slate-400 focus:border-transparent dark:bg-darkmode-400/70"
              placeholder="Quick Search... (Ctrl+k)"
            />
            <Lucide
              icon="Search"
              className="absolute inset-y-0 right-0 w-5 h-5 my-auto mr-3 text-slate-400 dark:text-slate-500"
            />
          </div>
          <a className="relative text-white/70 sm:hidden" href="">
            <Lucide
              icon="Search"
              className="w-5 h-5 mr-5 dark:text-slate-500"
            />
          </a>
        </div>
        {/* END: Search */}
        {/* BEGIN: Search Result */}
        <Dialog
          size="lg"
          open={searchResultModal}
          onClose={() => {
            setSearchResultModal(false);
          }}
          className="flex items-center justify-center"
        >
          <Dialog.Panel className="p-0">
            <div className="relative border-b border-slate-200/60">
              <Lucide
                icon="Search"
                className="absolute inset-y-0 w-5 h-5 my-auto ml-4 text-slate-500"
              />
              <FormInput
                type="text"
                className="px-12 py-5 border-0 shadow-none focus:ring-0"
                placeholder="Quick Search..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center h-6 px-2 my-auto mr-4 text-xs rounded-md bg-slate-200 text-slate-500">
                ESC
              </div>
            </div>
            
          </Dialog.Panel>
        </Dialog>
        {/* END: Search Result */}
        {/* BEGIN: Notifications */}
        <Popover className="mr-5 intro-x sm:mr-6">
          <Popover.Button
            className={clsx([
              "relative text-white/70 outline-none block",
              "before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-white before:opacity-50 before:animate-ping",
              "after:content-[''] after:w-[8px] after:h-[8px] after:rounded-full after:absolute after:top-[-2px] after:right-0 after:bg-danger",
            ])}
          >
            <Lucide icon="Bell" className="w-5 h-5 dark:text-slate-500" />
          </Popover.Button>
          <Popover.Panel className="w-[280px] sm:w-[350px] p-5 mt-2">
            
          </Popover.Panel>
        </Popover>
        {/* END: Notifications */}
        {/* BEGIN: Notifications */}
        <div className="mr-auto intro-x sm:mr-6">
          <div className="relative cursor-pointer text-white/70">
            <Lucide icon="Inbox" className="w-5 h-5 dark:text-slate-500" />
          </div>
        </div>
        {/* END: Notifications */}
        {/* BEGIN: Account Menu */}
        <Menu className="h-10 intro-x">
          <Menu.Button className="flex items-center h-full dropdown-toggle">
            <div className="w-10 h-10 image-fit">
              <img
                alt=""
                className="border-2 border-white rounded-full shadow-lg border-opacity-10"
                src={fakerData[9].photos[0]}
              />
            </div>
            <div className="hidden ml-3 md:block text-slate-200">
              
            </div>
          </Menu.Button>
          <Menu.Items className="w-56 mt-px">
            <Menu.Item>
              <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
            </Menu.Item>
            
            <Menu.Item>
              <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Reset Password
            </Menu.Item>
            <Menu.Item>
              <Lucide icon="HelpCircle" className="w-4 h-4 mr-2" /> Help
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
              <Lucide icon="ToggleRight" className="w-4 h-4 mr-2" /> Logout
            </Menu.Item>
          </Menu.Items>
        </Menu>
        {/* END: Account Menu */}
      </div>
      {/* END: Top Bar */}
    </>
  );
}

export default Main;
