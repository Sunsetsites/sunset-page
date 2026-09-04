
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


export const Lottie = () => {
  return (
    <div className="h-20 w-40">
      <DotLottieReact
        src="/swiper.json"
        loop
        autoplay
      />
    </div>
  );
};