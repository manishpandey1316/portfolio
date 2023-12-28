import React from "react";
import { CodeBracketIcon,EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export default function ProjectCard({ image, title, description,gitUrl,previewUrl}) {

  return (
    <div>
      <div
        className="h-52 md:h-72  rounded-t-xl relative group "
        style={{ background: `url(${image})`, backgroundSize: "cover"}}
      >
        <div className="flex items-center gap-4 justify-center overlay absolute w-full h-full top-0 left-0 bg-[#181818] opacity-0 group-hover:flex group-hover:opacity-80 transition-all duration-500">
          <Link href={gitUrl} className="h-12 w-12 sm:h-14 sm:w-14 relative border-2 rounded-full border-[#ABD7BE] hover:border-white group/link">
            <CodeBracketIcon className="h-6 w-6 sm:h-8 sm:w-8 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 trnasform -translate-x-1/2 -translate-y-1/2"/>
          </Link>
          <Link href={previewUrl} className="h-12 w-12 sm:h-14 sm:w-14 relative border-2 rounded-full border-[#ABD7BE] hover:border-white group/link">
            <EyeIcon className="h-6 w-6 sm:h-8 sm:w-8 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 trnasform -translate-x-1/2 -translate-y-1/2"/>
          </Link>
        </div>
      </div>
      <div className="text-white border-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
}
