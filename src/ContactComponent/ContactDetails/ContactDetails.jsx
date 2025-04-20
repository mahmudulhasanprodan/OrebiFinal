import React, { useState } from 'react'
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb';
import { CheckEmail,Message,SuccessMessage,ErrorMessage } from '../../../Utils/utils';
import { collection, addDoc } from "firebase/firestore"; 
import {db}from "../../../Firebase/FirebaseSDK"



const ContactDetails = ({Title}) => {
const[contactInfo,setcontactInfo] = useState({
  PostName: "",
  PostEmail: "",
  MessageText: "",
})

const[loading,setloading] = useState(false);

// HandlePost Function start Here
const HandlePost = (e) => {  
  setcontactInfo({
      ...contactInfo,
      [e.target.id] : e.target.value,
    });
};

// HandlePostDetails Function start Here
const HandlePostDetails = () => {
  const{PostName,PostEmail,MessageText} = contactInfo;
  if(!PostName){   
    ErrorMessage("Name Missing")
  }else if(!PostEmail || !CheckEmail(PostEmail)){
    ErrorMessage("User are not valid");
  }else if(!MessageText || !Message(MessageText)){
    ErrorMessage("Message is Not Valid Text");
  }else{
    setloading(true);
    const FromRef = collection(db, "From Post")
    addDoc(FromRef, contactInfo).then((fromCredent) => {
      console.log(fromCredent);
      SuccessMessage("Everything is Ok", "top-center");
    }).catch((error) => {
      console.log(error);   
    }).finally(() => {
      setloading(false);
      setcontactInfo({
        PostName: "",
        PostEmail: "",
        MessageText: "",
      })
    })   
  }
};

  return (
    <>
      <div>
        <div className="container">
          <div className="px-4 2xl:px-0">
            <div className="pb-28 py-14">
              <div>
                <h2 className="font-DM_Sans text-4xl font-bold text-Btn_Color">
                  {Title ? Title : "Title Missing"}
                </h2>
              </div>
              <div>
                <BreadCrumb />
              </div>
            </div>
            <div>
              <div>
                <h2 className="font-DM_Sans font-bold text-2xl text-Btn_Color">
                  Get More Touch
                </h2>
              </div>
              <form action="#" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <div className="flex flex-col mt-6">
                    <label
                      htmlFor="#"
                      className="font-DM_Sans font-bold text-lg text-Btn_Color"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="PostName"
                      name="PostName"
                      placeholder="Enter Your Name Here"
                      className="w-full md:w-[400px] py-1 border-b-[1px] border-b-slate-300"
                      onChange={HandlePost}
                      value={contactInfo.PostName}
                    />
                  </div>
                  <div className="flex flex-col mt-6">
                    <label
                      htmlFor="#"
                      className="font-DM_Sans font-bold text-lg text-Btn_Color"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="PostEmail"
                      name="PostEmail"
                      placeholder="Enter Your Email Here"
                      className="w-full md:w-[400px] py-1 border-b-[1px] border-b-slate-300"
                      onChange={HandlePost}
                      value={contactInfo.PostEmail}
                    />
                  </div>
                  <div className="flex flex-col mt-6">
                    <label
                      htmlFor="#"
                      className="font-DM_Sans font-bold text-lg text-Btn_Color pb-1"
                    >
                      Message
                    </label>
                    <textarea
                      name="MessageText"
                      id="MessageText"
                      className="w-full md:w-[400px] min-h-24 border-[1px] border-slate-300"
                      onChange={HandlePost}
                      value={contactInfo.MessageText}
                    ></textarea>
                  </div>
                  <div>
                    <p className="w-[400px] flex justify-end pr-2 font-DM_Sans font-bold text-base">
                      0/100
                    </p>
                  </div>
                  <div className="mt-10">
                    {loading ? (
                      <button
                        type="button"
                        className="bg-indigo-500 px-2 mt-10 py-2 flex items-center justify-center text-Common_Color font-DM_Sans font-bold"
                      >
                        <svg
                          className="animate-spin h-5 w-5 mr-3 border-4 border-gray-50 border-b-4 border-b-green-500  rounded-full"
                          viewBox="0 0 24 24"
                        ></svg>
                        Processing...
                      </button>
                    ) : (
                      <button
                        className="px-8 py-2 bg-Btn_Color text-Common_Color hover:bg-green-500"
                        onClick={HandlePostDetails}
                      >
                        Post Here
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
            <div className="py-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.658421623364!2d90.4121301!3d24.1486311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756762b51c4ac8d%3A0xdfdf9f4d8f5fc047!2sBhabanipur%20High%20School!5e0!3m2!1sen!2sbd!4v1738391875532!5m2!1sen!2sbd"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails