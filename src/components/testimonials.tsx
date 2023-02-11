import Image from "next/image";
import testimonialsStyles from "@/styles/testimonials.module.css";
import barStyles from "@/styles/bar.module.css";
import { GallerySliderButton } from "./GallerySliderButton";
import { ArrowButton } from "./arrowButton";

export const Testimonials = (): JSX.Element => {
  return (
    <div className={testimonialsStyles.testimonials__container}>
      <Image
        className={testimonialsStyles["testimonials__outer-grid"]}
        src="/dots grid.svg"
        width="130"
        height="115"
        alt=""
      />
      <div className={testimonialsStyles.testimonials}>
        <Image
          className={testimonialsStyles["testimonials__inner-grid"]}
          src="/dots grid.svg"
          width="130"
          height="115"
          alt=""
        />
        <h2 className={testimonialsStyles.testimonials__header}>
          What our customer are saying
        </h2>
        <div
          className={`${barStyles.bar} ${barStyles["bar--white"]} ${testimonialsStyles.testimonials__bar}`}
        ></div>
        <div className={testimonialsStyles["testimonials__quote-container"]}>
          <div className={testimonialsStyles["testimonials__photo-container"]}>
            <Image
              src="/profile.png"
              className={testimonialsStyles.testimonials__photo}
              width={133}
              height={133}
              alt="Edward Newgate photo"
            />
            <div>
              <h3 className={testimonialsStyles.testimonials__name}>
                Edward Newgate
              </h3>
              <p className={testimonialsStyles.testimonials__position}>
                Founder Circle
              </p>
            </div>
          </div>
          <blockquote className={testimonialsStyles.testimonials__quote}>
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </blockquote>
        </div>
      </div>
      <div className={testimonialsStyles.testimonials__slider__container}>
        <ArrowButton type="back" />
        <div className={testimonialsStyles.testimonials__slider}>
          <GallerySliderButton isSelected={true} />
          <GallerySliderButton />
          <GallerySliderButton />
          <GallerySliderButton />
        </div>
        <ArrowButton type="next" />
      </div>
    </div>
  );
};
