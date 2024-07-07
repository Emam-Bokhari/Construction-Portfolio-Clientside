import { Fragment } from "react";
import loadingSpinner from "../animation/loading-spinner.json";
import Lottie from "lottie-react";

export default function LoadingAnimation() {
  return (
    <Fragment>
        <div className="min-h-[100vh] flex justify-center mt-56" >
        <Lottie className="w-[300px] h-[150px]" animationData={loadingSpinner} />
        </div>
    </Fragment>
  )
}
