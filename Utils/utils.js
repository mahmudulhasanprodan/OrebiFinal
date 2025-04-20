import { toast,Bounce} from 'react-toastify';


function CheckEmail(email="mahmudulhasan8627@gnail.com") {
   const regexPattern =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   let Isvalidate = regexPattern.test(email.toLocaleLowerCase());
   return Isvalidate;
};


function Message(userMessage) {
   return userMessage.length >= 100 ? false : true;
};


function SuccessMessage(Message, position = "top-right", time = "4000") {
  toast.success(Message, {
    position: position,
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}


function ErrorMessage(Message, position = "top-right", time = "4000") {
  toast.error(Message, {
    position: position,
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}






export {CheckEmail,Message,SuccessMessage,ErrorMessage};

