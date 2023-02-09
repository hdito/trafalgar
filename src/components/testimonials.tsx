import Image from "next/image";
import testimonials from "@/styles/testimonials.module.css";
import { GallerySliderButton } from "./GallerySliderButton";
import { ArrowButton } from "./arrowButton";

export const Testimonials = (): JSX.Element => {
  const testimonialIDs = [1, 2, 3, 4];
  return (
    <div>
      <div className={testimonials.testimonials__container}>
        <Image
          className={testimonials["testimonials__outer-grid"]}
          src="/dots grid.svg"
          width="130"
          height="115"
          alt=""
        />
        <div className={testimonials.testimonials}>
          <Image
            className={testimonials["testimonials__inner-grid"]}
            src="/dots grid.svg"
            width="130"
            height="115"
            alt=""
          />
          <h2 className={testimonials.testimonials__header}>
            What our customer are saying
          </h2>
          <div className={testimonials.testimonials__delimiter}></div>
          <div className={testimonials["testimonials__quote-container"]}>
            <div className={testimonials["testimonials__photo-container"]}>
              <Image
                src="/profile.png"
                className={testimonials.testimonials__photo}
                width={133}
                height={133}
                alt="Edward Newgate photo"
              />
              <div>
                <h3 className={testimonials.testimonials__name}>
                  Edward Newgate
                </h3>
                <p className={testimonials.testimonials__position}>
                  Founder Circle
                </p>
              </div>
            </div>
            <blockquote className={testimonials.testimonials__quote}>
              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </blockquote>
          </div>
        </div>
        <div className={testimonials.testimonials__slider__container}>
          <ArrowButton type="back" />
          <div className={testimonials.testimonials__slider}>
            <GallerySliderButton isSelected={true} />
            <GallerySliderButton />
            <GallerySliderButton />
            <GallerySliderButton />
          </div>
          <ArrowButton type="next" />
        </div>
      </div>
    </div>
  );
};
