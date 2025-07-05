// import { Button } from "@/components/ui/button";
// import { FaWhatsapp } from "react-icons/fa";
// import { useEffect } from "react";
// import gsap from "gsap";

// const ViewMenu = () => {
//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.from(".table-button", {
//       opacity: 0,
//       scale: 0.5,
//       duration: 1,
//       ease: "power3.out",
//     });

//     tl.to(".table-button", {
//       rotation: 360,
//       duration: 10,
//       ease: "linear",
//       repeat: -1,
//     });
//   }, []);

//   const phoneNumber = "919567867986";
//   const message = encodeURIComponent(
//     "Hi, I'm interested in learning more about FinNext. Please share the details.",
//   );
//   const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

//   return (
//     <Button
//       asChild
//       className="table-button z-50 flex aspect-square h-20 w-20 flex-col items-center justify-center rounded-full bg-[#25D366] px-0 py-0 text-white hover:bg-[#1ebe5d]"
//     >
//       <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//         <FaWhatsapp className="mb-1 text-[20px]" />
//         <span className="text-center text-[10px] font-semibold leading-tight">
//           WhatsApp
//           <br />
//           Enquiry
//         </span>
//       </a>
//     </Button>
//   );
// };

// export default ViewMenu;

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phoneNumber = "919567867986";
  const message = encodeURIComponent(
    "Hi, I'm interested in learning more about FinNext. Please share the details.",
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-900 shadow-lg">
        <FaWhatsapp className="text-[28px] text-[#25D366]" />
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
          1
        </span>
      </div>
    </Link>
  );
};

export default FloatingWhatsApp;
