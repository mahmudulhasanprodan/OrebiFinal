import React from "react";

const Loading = ({className}) => {
  return (
    <>
      <div className={className}>
        <div className="animate-pulse flex space-x-4">
          {/* <div className="rounded-pulse bg-slate-200 h-10 w-10"></div> */}
          {/* <div className="flex flex-col space-y-6 py-1"> */}
            {/* <div className="h-2 bg-slate-200 rounded"></div> */}
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              {/* <div className="h-2 bg-slate-200 rounded"></div> */}
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Loading;
