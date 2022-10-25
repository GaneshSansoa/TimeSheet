import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import logo from '../components/timesheet.png';

export default function Nav() {
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
  return (
    <>
    <nav className="lg:hidden py-6 px-6 bg-gray-800">
    <div className="flex items-center justify-between">
      <a className="text-2xl text-white font-semibold" href="/">
        <img className="h-10" src={logo} alt="" width="auto"/>
      </a>
      <button className={"navbar-burger flex items-center rounded focus:outline-none"}>
        <svg className="text-white bg-indigo-500 hover:bg-indigo-600 block h-8 w-8 p-2 rounded" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
  </nav>
  <div className="hidden lg:block navbar-menu relative z-50">
    <div className="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10"></div>
    <nav className="dashboard fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-gray-800 overflow-y-auto">
      <div className="flex w-full items-center px-6 pb-6 mb-6 lg:border-b border-gray-700">
        <a className="text-xl text-white font-semibold" href="/">
          <img className="h-8" src={logo} alt="" width="auto"/>
        </a>
      </div>
      <div className="px-4 pb-6">
        <h3 className="mb-2 text-xs uppercase text-gray-500 font-medium">Main</h3>
        <ul className="mb-8 text-sm font-medium">
          <li className='mb-1'>
            <NavLink className={"options flex items-center pl-3 py-3 pr-4 text-gray-50 bg-indigo-500 rounded"} to="/">
              <span className="inline-block mr-3">
                <svg className="text-indigo-100 w-5 h-5" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9066 3.12873C14.9005 3.12223 14.8987 3.11358 14.8923 3.10722C14.8859 3.10086 14.8771 3.09893 14.8706 3.09278C13.3119 1.53907 11.2008 0.666626 8.99996 0.666626C6.79914 0.666626 4.68807 1.53907 3.12935 3.09278C3.12279 3.09893 3.11404 3.10081 3.10763 3.10722C3.10122 3.11363 3.09944 3.12222 3.09334 3.12873C1.93189 4.29575 1.14217 5.78067 0.823851 7.39609C0.505534 9.01151 0.672885 10.685 1.30478 12.2054C1.93668 13.7258 3.00481 15.025 4.37435 15.9389C5.7439 16.8528 7.35348 17.3405 8.99996 17.3405C10.6464 17.3405 12.256 16.8528 13.6256 15.9389C14.9951 15.025 16.0632 13.7258 16.6951 12.2054C17.327 10.685 17.4944 9.01151 17.1761 7.39609C16.8578 5.78067 16.068 4.29575 14.9066 3.12873ZM8.99992 15.6666C8.00181 15.6663 7.01656 15.4414 6.11714 15.0087C5.21773 14.5759 4.42719 13.9464 3.80409 13.1666H7.15015C7.38188 13.4286 7.66662 13.6383 7.98551 13.782C8.3044 13.9257 8.65017 14 8.99992 14C9.34968 14 9.69544 13.9257 10.0143 13.782C10.3332 13.6383 10.618 13.4286 10.8497 13.1666H14.1958C13.5727 13.9464 12.7821 14.5759 11.8827 15.0087C10.9833 15.4414 9.99804 15.6663 8.99992 15.6666ZM8.16659 11.5C8.16659 11.3351 8.21546 11.174 8.30703 11.037C8.3986 10.8999 8.52875 10.7931 8.68102 10.7301C8.83329 10.667 9.00085 10.6505 9.1625 10.6826C9.32415 10.7148 9.47263 10.7942 9.58918 10.9107C9.70572 11.0272 9.78509 11.1757 9.81724 11.3374C9.8494 11.499 9.83289 11.6666 9.76982 11.8189C9.70675 11.9711 9.59994 12.1013 9.4629 12.1929C9.32586 12.2844 9.16474 12.3333 8.99992 12.3333C8.77898 12.3331 8.56714 12.2452 8.41091 12.089C8.25468 11.9327 8.16681 11.7209 8.16659 11.5ZM15.1751 11.5017L15.1665 11.5H11.4999C11.4983 10.9846 11.3373 10.4824 11.0389 10.0623C10.7405 9.64218 10.3193 9.32472 9.83325 9.15352V6.49996C9.83325 6.27894 9.74546 6.06698 9.58918 5.9107C9.4329 5.75442 9.22093 5.66663 8.99992 5.66663C8.77891 5.66663 8.56695 5.75442 8.41067 5.9107C8.25439 6.06698 8.16659 6.27894 8.16659 6.49996V9.15352C7.68054 9.32472 7.25939 9.64218 6.96098 10.0623C6.66256 10.4824 6.50151 10.9846 6.49992 11.5H2.83334L2.82474 11.5017C2.60799 10.9669 2.46221 10.406 2.39114 9.83329H3.16659C3.3876 9.83329 3.59956 9.74549 3.75584 9.58921C3.91212 9.43293 3.99992 9.22097 3.99992 8.99996C3.99992 8.77894 3.91212 8.56698 3.75584 8.4107C3.59956 8.25442 3.3876 8.16663 3.16659 8.16663H2.39114C2.54005 6.9821 3.00621 5.85981 3.74037 4.91838L4.28597 5.46399C4.36335 5.54137 4.4552 5.60274 4.5563 5.64462C4.65739 5.68649 4.76574 5.70804 4.87517 5.70804C4.98459 5.70804 5.09294 5.68649 5.19404 5.64461C5.29513 5.60274 5.38699 5.54136 5.46436 5.46399C5.54173 5.38661 5.60311 5.29476 5.64498 5.19366C5.68686 5.09257 5.70841 4.98422 5.70841 4.87479C5.70841 4.76537 5.68686 4.65702 5.64498 4.55592C5.60311 4.45483 5.54173 4.36297 5.46435 4.2856L4.91881 3.74005C5.86016 3.00613 6.98227 2.5401 8.16659 2.39118V3.16663C8.16659 3.38764 8.25439 3.5996 8.41067 3.75588C8.56695 3.91216 8.77891 3.99996 8.99992 3.99996C9.22093 3.99996 9.4329 3.91216 9.58918 3.75588C9.74546 3.5996 9.83325 3.38764 9.83325 3.16663V2.39118C11.0176 2.5401 12.1397 3.00613 13.081 3.74005L12.5355 4.2856C12.3792 4.44186 12.2914 4.6538 12.2914 4.87479C12.2914 5.09578 12.3792 5.30772 12.5355 5.46399C12.6917 5.62025 12.9037 5.70804 13.1247 5.70804C13.3457 5.70804 13.5576 5.62026 13.7139 5.46399L14.2595 4.91838C14.9936 5.85981 15.4598 6.9821 15.6087 8.16663H14.8333C14.6122 8.16663 14.4003 8.25442 14.244 8.4107C14.0877 8.56698 13.9999 8.77894 13.9999 8.99996C13.9999 9.22097 14.0877 9.43293 14.244 9.58921C14.4003 9.74549 14.6122 9.83329 14.8333 9.83329H15.6087C15.5376 10.406 15.3919 10.9669 15.1751 11.5017Z" fill="currentColor"></path>
                </svg>
              </span>
              <span>Dashboard</span>
              
            </NavLink>
          </li>
          <li className='mb-1'>
            <NavLink className="flex items-center pl-3 py-3 pr-2 text-gray-50 hover:bg-gray-900 rounded" to="/createTimesheet">
              <span className="inline-block mr-3">
                <svg className="text-gray-600 w-5 h-5" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.0002 0.666626C4.41687 0.666626 0.66687 4.41663 0.66687 8.99996C0.66687 13.5833 4.41687 17.3333 9.0002 17.3333C13.5835 17.3333 17.3335 13.5833 17.3335 8.99996C17.3335 4.41663 13.5835 0.666626 9.0002 0.666626ZM2.58354 10.6666C2.41687 10.0833 2.33354 9.58329 2.33354 8.99996C2.33354 8.41663 2.41687 7.91663 2.58354 7.33329H4.16687C4.0002 8.41663 4.0002 9.58329 4.16687 10.6666H2.58354ZM3.2502 12.3333H4.41687C4.58354 13.0833 4.83354 13.8333 5.2502 14.5C4.41687 13.9166 3.7502 13.1666 3.2502 12.3333ZM4.41687 5.66663H3.2502C3.7502 4.83329 4.41687 4.08329 5.2502 3.49996C4.83354 4.16663 4.58354 4.91663 4.41687 5.66663ZM8.16687 15.4166C7.16687 14.6666 6.41687 13.5833 6.16687 12.3333H8.16687V15.4166ZM8.16687 10.6666H5.7502C5.66687 10.0833 5.66687 9.58329 5.66687 8.99996C5.66687 8.41663 5.66687 7.91663 5.7502 7.33329H8.16687V10.6666ZM8.16687 5.66663H6.16687C6.41687 4.41663 7.16687 3.33329 8.16687 2.58329V5.66663ZM14.7502 5.66663H13.5835C13.4169 4.91663 13.1669 4.16663 12.7502 3.49996C13.5835 4.08329 14.2502 4.83329 14.7502 5.66663ZM9.83354 2.58329C10.8335 3.33329 11.5835 4.41663 11.8335 5.66663H9.83354V2.58329ZM9.83354 15.4166V12.3333H11.8335C11.5835 13.5833 10.8335 14.6666 9.83354 15.4166ZM12.2502 10.6666H9.83354V7.33329H12.2502C12.3335 8.41663 12.3335 9.58329 12.2502 10.6666ZM12.8335 14.5C13.1669 13.8333 13.4169 13.0833 13.6669 12.3333H14.8335C14.2502 13.1666 13.5835 13.9166 12.8335 14.5ZM13.9169 10.6666C14.0835 9.58329 14.0835 8.41663 13.9169 7.33329H15.5002C15.8335 8.41663 15.8335 9.58329 15.5002 10.6666H13.9169Z" fill="currentColor"></path>
                </svg>
              </span>
              <span>Create Timesheet</span>
              <span className="options flex justify-center items-center ml-auto bg-indigo-500 w-6 h-6 text-xs rounded-full">4</span>
            </NavLink>
          </li>
          <li className='mb-1'>
            <a className="active flex items-center pl-3 py-3 pr-4 text-gray-50 hover:bg-gray-900 rounded" href="/">
              <span className="inline-block mr-3">
                <svg className="text-gray-600 w-5 h-5" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.3414 9.23329C11.8689 8.66683 12.166 7.92394 12.1747 7.14996C12.1747 6.31453 11.8428 5.51331 11.2521 4.92257C10.6614 4.33183 9.86015 3.99996 9.02472 3.99996C8.18928 3.99996 7.38807 4.33183 6.79733 4.92257C6.20659 5.51331 5.87472 6.31453 5.87472 7.14996C5.88341 7.92394 6.18057 8.66683 6.70805 9.23329C5.97359 9.59902 5.34157 10.1416 4.86881 10.8122C4.39606 11.4827 4.0974 12.2603 3.99972 13.075C3.9754 13.296 4.03989 13.5176 4.17897 13.6911C4.31806 13.8645 4.52037 13.9756 4.74138 14C4.9624 14.0243 5.18401 13.9598 5.35749 13.8207C5.53096 13.6816 5.64207 13.4793 5.66638 13.2583C5.76583 12.4509 6.15709 11.7078 6.76645 11.1688C7.37582 10.6299 8.16123 10.3324 8.97472 10.3324C9.7882 10.3324 10.5736 10.6299 11.183 11.1688C11.7923 11.7078 12.1836 12.4509 12.283 13.2583C12.3062 13.472 12.4111 13.6684 12.5757 13.8066C12.7403 13.9448 12.9519 14.0141 13.1664 14H13.258C13.4765 13.9748 13.6762 13.8644 13.8135 13.6927C13.9509 13.521 14.0148 13.3019 13.9914 13.0833C13.9009 12.2729 13.6117 11.4975 13.1494 10.8258C12.6871 10.1542 12.066 9.60713 11.3414 9.23329ZM8.99972 8.63329C8.70634 8.63329 8.41955 8.5463 8.17562 8.38331C7.93169 8.22031 7.74156 7.98865 7.62929 7.71761C7.51702 7.44656 7.48765 7.14831 7.54488 6.86058C7.60212 6.57284 7.74339 6.30853 7.95084 6.10108C8.15829 5.89364 8.42259 5.75236 8.71033 5.69513C8.99807 5.63789 9.29632 5.66727 9.56736 5.77954C9.83841 5.89181 10.0701 6.08193 10.2331 6.32586C10.3961 6.5698 10.483 6.85658 10.483 7.14996C10.483 7.54336 10.3268 7.92066 10.0486 8.19883C9.77041 8.47701 9.39312 8.63329 8.99972 8.63329ZM14.833 0.666626H3.16638C2.50334 0.666626 1.86746 0.930018 1.39862 1.39886C0.929774 1.8677 0.666382 2.50358 0.666382 3.16663V14.8333C0.666382 15.4963 0.929774 16.1322 1.39862 16.6011C1.86746 17.0699 2.50334 17.3333 3.16638 17.3333H14.833C15.4961 17.3333 16.132 17.0699 16.6008 16.6011C17.0697 16.1322 17.333 15.4963 17.333 14.8333V3.16663C17.333 2.50358 17.0697 1.8677 16.6008 1.39886C16.132 0.930018 15.4961 0.666626 14.833 0.666626ZM15.6664 14.8333C15.6664 15.0543 15.5786 15.2663 15.4223 15.4225C15.266 15.5788 15.0541 15.6666 14.833 15.6666H3.16638C2.94537 15.6666 2.73341 15.5788 2.57713 15.4225C2.42085 15.2663 2.33305 15.0543 2.33305 14.8333V3.16663C2.33305 2.94561 2.42085 2.73365 2.57713 2.57737C2.73341 2.42109 2.94537 2.33329 3.16638 2.33329H14.833C15.0541 2.33329 15.266 2.42109 15.4223 2.57737C15.5786 2.73365 15.6664 2.94561 15.6664 3.16663V14.8333Z" fill="currentColor"></path>
                </svg>
              </span>
              <span>Users</span>
             
            </a>
          </li>
          <li className='mb-1'>
            <a className="active flex items-center pl-3 py-3 pr-4 text-gray-50 hover:bg-gray-900 rounded" href="/">
              <span className="inline-block mr-3">
                <svg className="text-gray-600 w-5 h-5" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6416 1.71669C17.0442 1.6138 16.4394 1.56084 15.8332 1.55835C13.7652 1.55666 11.7403 2.14966 9.99991 3.26669C8.25503 2.16433 6.23045 1.58588 4.16657 1.60002C3.56045 1.6025 2.95558 1.65546 2.35824 1.75835C2.16258 1.79209 1.98539 1.89457 1.85859 2.04735C1.73178 2.20013 1.66369 2.39316 1.66657 2.59169V12.5917C1.66479 12.7141 1.69001 12.8355 1.74045 12.9471C1.79089 13.0586 1.8653 13.1577 1.95839 13.2373C2.05147 13.3169 2.16096 13.3749 2.27904 13.4074C2.39712 13.4398 2.5209 13.4459 2.64157 13.425C3.83576 13.2183 5.05924 13.2526 6.23996 13.5259C7.42068 13.7993 8.53476 14.3061 9.51657 15.0167L9.61657 15.075H9.70824C9.80066 15.1135 9.89979 15.1334 9.99991 15.1334C10.1 15.1334 10.1992 15.1135 10.2916 15.075H10.3832L10.4832 15.0167C11.4582 14.2903 12.5691 13.767 13.75 13.4778C14.931 13.1887 16.158 13.1395 17.3582 13.3334C17.4789 13.3542 17.6027 13.3482 17.7208 13.3157C17.8389 13.2833 17.9483 13.2252 18.0414 13.1456C18.1345 13.0661 18.2089 12.967 18.2594 12.8554C18.3098 12.7438 18.335 12.6225 18.3332 12.5V2.50002C18.3246 2.31015 18.2512 2.12895 18.1254 1.98647C17.9996 1.84399 17.8289 1.7488 17.6416 1.71669ZM9.16657 12.7917C7.62481 11.9806 5.90867 11.5573 4.16657 11.5584C3.89157 11.5584 3.61657 11.5584 3.33324 11.5584V3.22502C3.61079 3.20902 3.88903 3.20902 4.16657 3.22502C5.9444 3.22306 7.68342 3.74476 9.16657 4.72502V12.7917ZM16.6666 11.5917C16.3832 11.5917 16.1082 11.5917 15.8332 11.5917C14.0911 11.5906 12.375 12.0139 10.8332 12.825V4.72502C12.3164 3.74476 14.0554 3.22306 15.8332 3.22502C16.1108 3.20902 16.389 3.20902 16.6666 3.22502V11.5917ZM17.6416 15.05C17.0442 14.9471 16.4394 14.8942 15.8332 14.8917C13.7652 14.89 11.7403 15.483 9.99991 16.6C8.2595 15.483 6.2346 14.89 4.16657 14.8917C3.56045 14.8942 2.95558 14.9471 2.35824 15.05C2.24976 15.0672 2.14576 15.1057 2.05221 15.1633C1.95866 15.2208 1.87741 15.2963 1.81313 15.3854C1.74885 15.4744 1.70281 15.5753 1.67766 15.6822C1.65251 15.7891 1.64874 15.9 1.66657 16.0084C1.70892 16.2248 1.83532 16.4156 2.01807 16.539C2.20082 16.6623 2.42502 16.7083 2.64157 16.6667C3.83576 16.4599 5.05924 16.4942 6.23996 16.7676C7.42068 17.0409 8.53476 17.5478 9.51657 18.2584C9.65771 18.3588 9.82665 18.4128 9.99991 18.4128C10.1732 18.4128 10.3421 18.3588 10.4832 18.2584C11.4651 17.5478 12.5791 17.0409 13.7599 16.7676C14.9406 16.4942 16.1641 16.4599 17.3582 16.6667C17.5748 16.7083 17.799 16.6623 17.9817 16.539C18.1645 16.4156 18.2909 16.2248 18.3332 16.0084C18.3511 15.9 18.3473 15.7891 18.3222 15.6822C18.297 15.5753 18.251 15.4744 18.1867 15.3854C18.1224 15.2963 18.0412 15.2208 17.9476 15.1633C17.8541 15.1057 17.7501 15.0672 17.6416 15.05Z" fill="currentColor"></path>
                </svg>
              </span>
              <span>Documents</span>
              
            </a>
          </li>
          <li className='mb-1'>
            <a className="active flex items-center pl-3 py-3 pr-4 text-gray-50 hover:bg-gray-900 rounded" href="/">
              <span className="inline-block mr-3">
                <svg className="text-gray-600 w-5 h-5" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.33329 9.83329H1.49996C1.27895 9.83329 1.06698 9.92109 0.910704 10.0774C0.754423 10.2337 0.666626 10.4456 0.666626 10.6666V16.5C0.666626 16.721 0.754423 16.9329 0.910704 17.0892C1.06698 17.2455 1.27895 17.3333 1.49996 17.3333H7.33329C7.55431 17.3333 7.76627 17.2455 7.92255 17.0892C8.07883 16.9329 8.16663 16.721 8.16663 16.5V10.6666C8.16663 10.4456 8.07883 10.2337 7.92255 10.0774C7.76627 9.92109 7.55431 9.83329 7.33329 9.83329ZM6.49996 15.6666H2.33329V11.5H6.49996V15.6666ZM16.5 0.666626H10.6666C10.4456 0.666626 10.2337 0.754423 10.0774 0.910704C9.92109 1.06698 9.83329 1.27895 9.83329 1.49996V7.33329C9.83329 7.55431 9.92109 7.76627 10.0774 7.92255C10.2337 8.07883 10.4456 8.16663 10.6666 8.16663H16.5C16.721 8.16663 16.9329 8.07883 17.0892 7.92255C17.2455 7.76627 17.3333 7.55431 17.3333 7.33329V1.49996C17.3333 1.27895 17.2455 1.06698 17.0892 0.910704C16.9329 0.754423 16.721 0.666626 16.5 0.666626ZM15.6666 6.49996H11.5V2.33329H15.6666V6.49996ZM16.5 9.83329H10.6666C10.4456 9.83329 10.2337 9.92109 10.0774 10.0774C9.92109 10.2337 9.83329 10.4456 9.83329 10.6666V16.5C9.83329 16.721 9.92109 16.9329 10.0774 17.0892C10.2337 17.2455 10.4456 17.3333 10.6666 17.3333H16.5C16.721 17.3333 16.9329 17.2455 17.0892 17.0892C17.2455 16.9329 17.3333 16.721 17.3333 16.5V10.6666C17.3333 10.4456 17.2455 10.2337 17.0892 10.0774C16.9329 9.92109 16.721 9.83329 16.5 9.83329ZM15.6666 15.6666H11.5V11.5H15.6666V15.6666ZM7.33329 0.666626H1.49996C1.27895 0.666626 1.06698 0.754423 0.910704 0.910704C0.754423 1.06698 0.666626 1.27895 0.666626 1.49996V7.33329C0.666626 7.55431 0.754423 7.76627 0.910704 7.92255C1.06698 8.07883 1.27895 8.16663 1.49996 8.16663H7.33329C7.55431 8.16663 7.76627 8.07883 7.92255 7.92255C8.07883 7.76627 8.16663 7.55431 8.16663 7.33329V1.49996C8.16663 1.27895 8.07883 1.06698 7.92255 0.910704C7.76627 0.754423 7.55431 0.666626 7.33329 0.666626ZM6.49996 6.49996H2.33329V2.33329H6.49996V6.49996Z" fill="currentColor"></path>
                </svg>
              </span>
              <span>Applications</span>
              
            </a>
          </li>
          <li className='mb-1'>
            <a className="active flex items-center pl-3 py-3 pr-4 text-gray-50 hover:bg-gray-900 rounded" href="/">
              <span className="inline-block mr-3">
                <svg className="text-gray-600 w-5 h-5" viewbox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.6665 6.44996C13.6578 6.3734 13.641 6.29799 13.6165 6.22496V6.14996C13.5764 6.06428 13.5229 5.98551 13.4581 5.91663L8.45813 0.916626C8.38924 0.851806 8.31048 0.79836 8.2248 0.758293H8.1498C8.06514 0.709744 7.97165 0.678579 7.8748 0.666626H2.83313C2.17009 0.666626 1.5342 0.930018 1.06536 1.39886C0.596522 1.8677 0.33313 2.50358 0.33313 3.16663V14.8333C0.33313 15.4963 0.596522 16.1322 1.06536 16.6011C1.5342 17.0699 2.17009 17.3333 2.83313 17.3333H11.1665C11.8295 17.3333 12.4654 17.0699 12.9342 16.6011C13.4031 16.1322 13.6665 15.4963 13.6665 14.8333V6.49996C13.6665 6.49996 13.6665 6.49996 13.6665 6.44996ZM8.66646 3.50829L10.8248 5.66663H9.49979C9.27878 5.66663 9.06682 5.57883 8.91054 5.42255C8.75426 5.26627 8.66646 5.05431 8.66646 4.83329V3.50829ZM11.9998 14.8333C11.9998 15.0543 11.912 15.2663 11.7557 15.4225C11.5994 15.5788 11.3875 15.6666 11.1665 15.6666H2.83313C2.61212 15.6666 2.40015 15.5788 2.24387 15.4225C2.08759 15.2663 1.9998 15.0543 1.9998 14.8333V3.16663C1.9998 2.94561 2.08759 2.73365 2.24387 2.57737C2.40015 2.42109 2.61212 2.33329 2.83313 2.33329H6.9998V4.83329C6.9998 5.49633 7.26319 6.13222 7.73203 6.60106C8.20087 7.0699 8.83675 7.33329 9.49979 7.33329H11.9998V14.8333Z" fill="currentColor"></path>
                </svg>
              </span>
              <span>Pages</span>
              
            </a>
          </li>
        </ul>
       
        <div className="pt-8">
          <a className="mb-1 active flex items-center pl-3 py-3 pr-2 text-gray-50 hover:bg-gray-900 rounded" href="/">
            <span className="inline-block mr-4">
              <svg className="text-gray-600 w-5 h-5" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7666 7.9583L16.1916 7.4333L16.9333 5.94996C17.0085 5.7947 17.0336 5.61993 17.0053 5.44977C16.9769 5.27961 16.8964 5.12245 16.775 4.99996L15 3.22496C14.8768 3.1017 14.7182 3.02013 14.5463 2.99173C14.3743 2.96333 14.1979 2.98953 14.0416 3.06663L12.5583 3.8083L12.0333 2.2333C11.9778 2.06912 11.8726 1.92632 11.7322 1.82475C11.5918 1.72319 11.4232 1.66792 11.25 1.66663H8.74996C8.57526 1.66618 8.40483 1.72064 8.26277 1.82233C8.12071 1.92402 8.0142 2.06778 7.9583 2.2333L7.4333 3.8083L5.94996 3.06663C5.7947 2.99145 5.61993 2.9663 5.44977 2.99466C5.27961 3.02302 5.12245 3.10349 4.99996 3.22496L3.22496 4.99996C3.1017 5.1231 3.02013 5.28177 2.99173 5.45368C2.96333 5.62558 2.98953 5.80205 3.06663 5.9583L3.8083 7.44163L2.2333 7.96663C2.06912 8.02208 1.92632 8.12732 1.82475 8.26772C1.72319 8.40812 1.66792 8.57668 1.66663 8.74996V11.25C1.66618 11.4247 1.72064 11.5951 1.82233 11.7372C1.92402 11.8792 2.06778 11.9857 2.2333 12.0416L3.8083 12.5666L3.06663 14.05C2.99145 14.2052 2.9663 14.38 2.99466 14.5502C3.02302 14.7203 3.10349 14.8775 3.22496 15L4.99996 16.775C5.1231 16.8982 5.28177 16.9798 5.45368 17.0082C5.62558 17.0366 5.80205 17.0104 5.9583 16.9333L7.44163 16.1916L7.96663 17.7666C8.02253 17.9321 8.12904 18.0759 8.2711 18.1776C8.41317 18.2793 8.58359 18.3337 8.7583 18.3333H11.2583C11.433 18.3337 11.6034 18.2793 11.7455 18.1776C11.8875 18.0759 11.9941 17.9321 12.05 17.7666L12.575 16.1916L14.0583 16.9333C14.2126 17.0066 14.3856 17.0307 14.5541 17.0024C14.7225 16.9741 14.8781 16.8947 15 16.775L16.775 15C16.8982 14.8768 16.9798 14.7182 17.0082 14.5463C17.0366 14.3743 17.0104 14.1979 16.9333 14.0416L16.1916 12.5583L17.7666 12.0333C17.9308 11.9778 18.0736 11.8726 18.1752 11.7322C18.2767 11.5918 18.332 11.4232 18.3333 11.25V8.74996C18.3337 8.57526 18.2793 8.40483 18.1776 8.26277C18.0759 8.12071 17.9321 8.0142 17.7666 7.9583ZM16.6666 10.65L15.6666 10.9833C15.4367 11.0579 15.2257 11.1816 15.0483 11.3459C14.871 11.5102 14.7315 11.711 14.6395 11.9346C14.5475 12.1582 14.5053 12.3991 14.5158 12.6406C14.5262 12.8821 14.5891 13.1185 14.7 13.3333L15.175 14.2833L14.2583 15.2L13.3333 14.7C13.1196 14.5935 12.8855 14.5342 12.6469 14.526C12.4083 14.5179 12.1707 14.5611 11.9502 14.6528C11.7298 14.7445 11.5316 14.8824 11.3691 15.0573C11.2066 15.2322 11.0835 15.44 11.0083 15.6666L10.675 16.6666H9.34996L9.01663 15.6666C8.94204 15.4367 8.81832 15.2257 8.65404 15.0483C8.48977 14.871 8.28888 14.7315 8.06531 14.6395C7.84174 14.5475 7.60084 14.5053 7.35932 14.5158C7.11779 14.5262 6.88143 14.5891 6.66663 14.7L5.71663 15.175L4.79996 14.2583L5.29996 13.3333C5.41087 13.1185 5.47373 12.8821 5.48417 12.6406C5.49461 12.3991 5.45238 12.1582 5.36041 11.9346C5.26845 11.711 5.12894 11.5102 4.95158 11.3459C4.77422 11.1816 4.56325 11.0579 4.3333 10.9833L3.3333 10.65V9.34996L4.3333 9.01663C4.56325 8.94204 4.77422 8.81832 4.95158 8.65404C5.12894 8.48977 5.26845 8.28888 5.36041 8.06531C5.45238 7.84174 5.49461 7.60084 5.48417 7.35932C5.47373 7.11779 5.41087 6.88143 5.29996 6.66663L4.82496 5.74163L5.74163 4.82496L6.66663 5.29996C6.88143 5.41087 7.11779 5.47373 7.35932 5.48417C7.60084 5.49461 7.84174 5.45238 8.06531 5.36041C8.28888 5.26845 8.48977 5.12894 8.65404 4.95158C8.81832 4.77422 8.94204 4.56325 9.01663 4.3333L9.34996 3.3333H10.65L10.9833 4.3333C11.0579 4.56325 11.1816 4.77422 11.3459 4.95158C11.5102 5.12894 11.711 5.26845 11.9346 5.36041C12.1582 5.45238 12.3991 5.49461 12.6406 5.48417C12.8821 5.47373 13.1185 5.41087 13.3333 5.29996L14.2833 4.82496L15.2 5.74163L14.7 6.66663C14.5935 6.88033 14.5342 7.11442 14.526 7.35304C14.5179 7.59165 14.5611 7.82924 14.6528 8.0497C14.7445 8.27016 14.8824 8.46835 15.0573 8.63086C15.2322 8.79337 15.44 8.9164 15.6666 8.99163L16.6666 9.32496V10.65ZM9.99996 6.66663C9.34069 6.66663 8.69623 6.86213 8.14806 7.2284C7.5999 7.59467 7.17266 8.11526 6.92036 8.72435C6.66807 9.33344 6.60206 10.0037 6.73068 10.6503C6.8593 11.2969 7.17676 11.8908 7.64294 12.357C8.10911 12.8232 8.70306 13.1406 9.34966 13.2692C9.99626 13.3979 10.6665 13.3319 11.2756 13.0796C11.8847 12.8273 12.4053 12.4 12.7715 11.8519C13.1378 11.3037 13.3333 10.6592 13.3333 9.99996C13.3333 9.11591 12.9821 8.26806 12.357 7.64294C11.7319 7.01782 10.884 6.66663 9.99996 6.66663ZM9.99996 11.6666C9.67033 11.6666 9.34809 11.5689 9.07401 11.3857C8.79993 11.2026 8.58631 10.9423 8.46016 10.6378C8.33402 10.3332 8.30101 9.99811 8.36532 9.67481C8.42963 9.35151 8.58836 9.05454 8.82145 8.82145C9.05454 8.58836 9.35151 8.42963 9.67481 8.36532C9.99811 8.30101 10.3332 8.33402 10.6378 8.46016C10.9423 8.58631 11.2026 8.79993 11.3857 9.07401C11.5689 9.34809 11.6666 9.67033 11.6666 9.99996C11.6666 10.442 11.491 10.8659 11.1785 11.1785C10.8659 11.491 10.442 11.6666 9.99996 11.6666Z" fill="currentColor"></path>
              </svg>
            </span>
            <span>Settings</span>
          </a>
          <a className="active flex items-center pl-3 py-3 pr-2 text-gray-50 hover:bg-gray-900 rounded" href="/">
            <span className="inline-block mr-4">
              <svg className="text-gray-600 w-5 h-5" viewbox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.333618 8.99996C0.333618 9.22097 0.421416 9.43293 0.577696 9.58922C0.733976 9.7455 0.945938 9.83329 1.16695 9.83329H7.49195L5.57528 11.7416C5.49718 11.8191 5.43518 11.9113 5.39287 12.0128C5.35057 12.1144 5.32879 12.2233 5.32879 12.3333C5.32879 12.4433 5.35057 12.5522 5.39287 12.6538C5.43518 12.7553 5.49718 12.8475 5.57528 12.925C5.65275 13.0031 5.74492 13.0651 5.84647 13.1074C5.94802 13.1497 6.05694 13.1715 6.16695 13.1715C6.27696 13.1715 6.38588 13.1497 6.48743 13.1074C6.58898 13.0651 6.68115 13.0031 6.75862 12.925L10.0919 9.59163C10.1678 9.51237 10.2273 9.41892 10.2669 9.31663C10.3503 9.11374 10.3503 8.88618 10.2669 8.68329C10.2273 8.581 10.1678 8.48755 10.0919 8.40829L6.75862 5.07496C6.68092 4.99726 6.58868 4.93563 6.48716 4.89358C6.38564 4.85153 6.27683 4.82988 6.16695 4.82988C6.05707 4.82988 5.94826 4.85153 5.84674 4.89358C5.74522 4.93563 5.65298 4.99726 5.57528 5.07496C5.49759 5.15266 5.43595 5.2449 5.3939 5.34642C5.35185 5.44794 5.33021 5.55674 5.33021 5.66663C5.33021 5.77651 5.35185 5.88532 5.3939 5.98683C5.43595 6.08835 5.49759 6.18059 5.57528 6.25829L7.49195 8.16663H1.16695C0.945938 8.16663 0.733976 8.25442 0.577696 8.4107C0.421416 8.56698 0.333618 8.77895 0.333618 8.99996ZM11.1669 0.666626H2.83362C2.17058 0.666626 1.53469 0.930018 1.06585 1.39886C0.59701 1.8677 0.333618 2.50358 0.333618 3.16663V5.66663C0.333618 5.88764 0.421416 6.0996 0.577696 6.25588C0.733976 6.41216 0.945938 6.49996 1.16695 6.49996C1.38797 6.49996 1.59993 6.41216 1.75621 6.25588C1.91249 6.0996 2.00028 5.88764 2.00028 5.66663V3.16663C2.00028 2.94561 2.08808 2.73365 2.24436 2.57737C2.40064 2.42109 2.6126 2.33329 2.83362 2.33329H11.1669C11.388 2.33329 11.5999 2.42109 11.7562 2.57737C11.9125 2.73365 12.0003 2.94561 12.0003 3.16663V14.8333C12.0003 15.0543 11.9125 15.2663 11.7562 15.4225C11.5999 15.5788 11.388 15.6666 11.1669 15.6666H2.83362C2.6126 15.6666 2.40064 15.5788 2.24436 15.4225C2.08808 15.2663 2.00028 15.0543 2.00028 14.8333V12.3333C2.00028 12.1123 1.91249 11.9003 1.75621 11.744C1.59993 11.5878 1.38797 11.5 1.16695 11.5C0.945938 11.5 0.733976 11.5878 0.577696 11.744C0.421416 11.9003 0.333618 12.1123 0.333618 12.3333V14.8333C0.333618 15.4963 0.59701 16.1322 1.06585 16.6011C1.53469 17.0699 2.17058 17.3333 2.83362 17.3333H11.1669C11.83 17.3333 12.4659 17.0699 12.9347 16.6011C13.4036 16.1322 13.6669 15.4963 13.6669 14.8333V3.16663C13.6669 2.50358 13.4036 1.8677 12.9347 1.39886C12.4659 0.930018 11.83 0.666626 11.1669 0.666626Z" fill="currentColor"></path>
              </svg>
            </span>
            <span>Log Out</span>
          </a>
        </div>
      </div>
    </nav>
    <Outlet/>
  </div>
    </>
  )
}
