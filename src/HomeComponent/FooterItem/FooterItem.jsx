import React from 'react'
import { Link } from 'react-router-dom';

const FooterItem = ({AllItem = ["One","Two","Three"],Title}) => {

  console.log(AllItem);
  
  return (
    <>
      <div>
        <div>
          <h2 className="font-DM_Sans font-bold text-base text-Btn_Color">{Title ? Title : "Title Is Missing"}</h2>
        </div>
        <div className="mt-3">
          <ul>
            {AllItem?.map((item, index) => (
              <li key={item} className="flex flex-col font-DM_Sans font-normal text-sm py-1">
                <Link to={"/item"}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FooterItem
