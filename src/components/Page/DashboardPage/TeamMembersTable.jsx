import { Fragment } from "react";

export default function TeamMembersTable(){
    return(
        <Fragment>
            <div
          className="p-5 w-full 2xl:w-[30%] h-auto  bg-white rounded-xl "
        >

        <div className="flex items-center justify-between mb-5" >
          <h2 className="text-[#111111] font-[inter] font-[700] text-xl">Team Members</h2>

        <button className="text-[#BDC9DB] font-[inter] font-[500] text-sm" >
          View All
        </button>
        </div>

          <div className="overflow-auto">
            {/* card 01  */}
            <div className="pb-3  w-full">
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-4">
                <div className="flex items-center gap-3 " >
                  <img className="w-14 h-14 object-cover rounded-full" src="./assets/profile.jpg" alt=""/>
                  <p className="text-sm font-[inter] font-[500]" >Emam Bokhari</p>
                  </div>
                  <div className="flex justify-end " >
                    <p className="text-[12px] font-[inter] font-[500] text-[#7EC653] mt-2 bg-[#DFFFEA] p-1 rounded-lg" >Site Manager</p>
                  </div>
              </div>
          </div>
            {/* card 01  */}
            <div className="pb-3  w-full">
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-4">
                <div className="flex items-center gap-3 " >
                  <img className="w-14 h-14 object-cover rounded-full" src="./assets/profile.jpg" alt=""/>
                  <p className="text-sm font-[inter] font-[500]" >Emam Bokhari</p>
                  </div>
                  <div className="flex justify-end " >
                    <p className="text-[12px] font-[inter] font-[500] text-[#7EC653] mt-2 bg-[#DFFFEA] p-1 rounded-lg" >Site Manager</p>
                  </div>
              </div>
          </div>
            {/* card 01  */}
            <div className="pb-3  w-full">
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-4">
                <div className="flex items-center gap-3 " >
                  <img className="w-14 h-14 object-cover rounded-full" src="./assets/profile.jpg" alt=""/>
                  <p className="text-sm font-[inter] font-[500]" >Emam Bokhari</p>
                  </div>
                  <div className="flex justify-end " >
                    <p className="text-[12px] font-[inter] font-[500] text-[#7EC653] mt-2 bg-[#DFFFEA] p-1 rounded-lg" >Site Manager</p>
                  </div>
              </div>
          </div>
           
            

          </div>
   
        </div>
        </Fragment>
    )
}