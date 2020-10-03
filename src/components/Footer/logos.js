import { ReactComponent as LogCall } from "../../assets/icons/001-call.svg";
import { ReactComponent as LogoWhatsApp } from "../../assets/icons/004-whatsapp.svg";
import { ReactComponent as LogoEmail } from "../../assets/icons/003-gmail.svg";
import { ReactComponent as LogoFacebook } from "../../assets/icons/001-facebook.svg";
import { ReactComponent as LogoInstagram } from "../../assets/icons/002-instagram.svg";


 const logoComponents = [
   {
     id: "1",
     name: "LogoCall",
     component: LogCall,
     href: "tel:+972522222222",
   },
   {
     id: "2",
     name: "LogoWhatsApp",
     component: LogoWhatsApp,
     href: "https://wa.me/972545698242",
   },
   {
     id: "3",
     name: "LogoEmail",
     component: LogoEmail,
     href: "mailTo:taya@gmail.com",
   },
   {
     id: "4",
     name: "LogoFacebook",
     component: LogoFacebook,
     href:
       "https://www.facebook.com/%D7%98%D7%90%D7%99%D7%94-%D7%91%D7%A7%D7%A9%D7%99%D7%99%D7%91-%D7%A2%D7%99%D7%A1%D7%95%D7%99-%D7%A8%D7%A4%D7%95%D7%90%D7%99-100342331749731",
   },
   {
     id: "5",
     name: "LogoInstagram",
     component: LogoInstagram,
     href: "https://www.instagram.com/taya.therapy/",
   },
 ];

 export default logoComponents;