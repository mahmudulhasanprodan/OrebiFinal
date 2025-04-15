import React from 'react'
import Flex from '../../CommonComponent/Flex/Flex';

const SignForm = ({LabelTitle,InputType,InputId,InputName,InputPlaceHolder,className,OnchangeItem,OnvalueItem}) => {
  return (
    <>
      <div>
        <Flex className={"flex-col gap-y-4"}>
          <label
            htmlFor="LabelTitle"
            className="font-DM_Sans text-lg font-bold text-Btn_Color"
          >
            {LabelTitle ? LabelTitle : "Label Title is Missing"}
          </label>
          <input
            type={InputType}
            id={InputId}
            name={InputName}
            placeholder={InputPlaceHolder}
            className={className}
            onChange={OnchangeItem}
            value={OnvalueItem}
          />
        </Flex>
      </div>
    </>
  );
}

export default SignForm