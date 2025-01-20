import React from 'react'
import { Link,useLocation} from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";


const BreadCrumb = () => {
  const Location = useLocation();
  let BreadcrumbPathName = Location.pathname.split("/").filter((x) => x)
  let BreadCrumb = "";

   
  return (
    <>
      <div className="flex items-center gap-x-2 py-4">
        <li>
          <Link
            to={"/"}
            className="font-DM_Sans text-md font-normal rounded-md bg-green-500 px-3 py-1 text-Common_Color"
          >
            Home
          </Link>
        </li>
        <span>
          <FaAngleRight />
        </span>
        {BreadcrumbPathName?.map((path, index) => {
          const LastIndex = index === BreadcrumbPathName.length - 1;
          BreadCrumb += path;

          return (
            <li key={path}>
              {LastIndex ? (
                <Link
                  className={`${LastIndex ? "font-DM_Sans text-md font-normal rounded-md bg-yellow-600 px-3 py-1 text-Common_Color" : null}`}
                >
                  {path}
                </Link>
              ) : (
                <Link
                  to={`/${BreadCrumb}`}
                  className={`${LastIndex ? "font-DM_Sans text-md font-normal rounded-md bg-yellow-600 px-3 py-1 text-Common_Color" : null}`}
                >
                  {path}
                </Link>
              )}
            </li>
          );
        })}
      </div>
    </>
  );
}

export default BreadCrumb
