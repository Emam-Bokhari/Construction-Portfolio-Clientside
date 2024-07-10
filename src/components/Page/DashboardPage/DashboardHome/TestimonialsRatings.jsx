import { Fragment } from "react";
import { FaStar } from "react-icons/fa";

export default function Star({ ratings}) {
  const converts=Number(ratings)
  const stars=new Array(converts).fill(null)
  return (
    <Fragment>
        <div className="flex items-center gap-1" >
            {stars.map((_,index)=>(
                <FaStar className="text-base text-[#FFC700]" key={index} />
            ))}
        </div>
    </Fragment>
  )
}
