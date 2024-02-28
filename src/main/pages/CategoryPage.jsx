import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

export default function CategoryPage() {
  return (
    <div className="flex bg-bgColorMain text-textMain p-[20px] gap-[3%]">
			<SideBar />
			<div className="w-full h-full flex flex-col gap-y-4">
				<NavBar />
				<div className=" bg-bgColorBlock rounded-lg h-[calc(100vh-136px)]">
					<p>Category Page</p>					
				</div>
			</div>
		</div>
  );
}
