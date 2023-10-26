import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { addDays, eachDayOfInterval, format, subDays } from "date-fns";
import { uk } from "date-fns/locale";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  CalendarIcon,
  HomeIcon,
  LoginIcon,
  SearchBottomIcon,
  SettingsIcon,
} from "./Icons";
import "swiper/css";
import "react-day-picker/dist/style.css";

export default function DateSlider() {
  const [counter, setCounter] = useState(0);
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [selectedDay, setSelectedDay] = useState();

  useEffect(() => {
    setVisibleCalendar(false);
  }, [selectedDay]);

  const days = eachDayOfInterval({
    start: subDays(selectedDay || new Date(), 30),
    end: addDays(selectedDay || new Date(), counter),
  });

  return (
    <section className="h-full flex flex-col">
      <header className="h-[60px] flex items-center px-5 font-semibold">
        HEADER
      </header>

      {visibleCalendar && (
        <>
          <DayPicker
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            showOutsideDays
            locale={uk}
            className="absolute left-0 right-0 w-fit mx-auto bottom-[80px] z-30 bg-gray-200 p-5 rounded-xl shadow-xl capitalize select-none"
          />
          <div
            onClick={() => setVisibleCalendar(false)}
            className="fixed inset-0 bg-black/50 z-20"
          />
        </>
      )}

      <Swiper
        initialSlide={"29"}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full grow"
        onSlideChange={(swiper) => {
          if (swiper.previousIndex < swiper.activeIndex) {
            swiper.previousIndex !== 0 &&
              setSelectedDay((selectedDay) =>
                addDays(selectedDay || new Date(), 1)
              );
            setCounter(counter + 1);
          } else
            swiper.previousIndex !== 0 &&
              setSelectedDay((selectedDay) =>
                addDays(selectedDay || new Date(), -1)
              );
        }}
      >
        {days.slice(1).map((item) => (
          <SwiperSlide key={item}>
            <div
              key={item}
              className="p-3 flex flex-col justify-center items-center"
            >
              <p className="font-semibold capitalize select-none text-center">
                {format(selectedDay || new Date(), "EEEE dd.MM.yy", {
                  locale: uk,
                })}
              </p>

              <div className="mt-5 rounded-xl bg-gray-200 p-10 w-full">
                CONTENT
              </div>
              <div className="mt-5 rounded-xl bg-yellow-200 p-10 w-full">
                CONTENT
              </div>
              <div className="mt-5 rounded-xl bg-violet-200 p-10 w-full">
                CONTENT
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="w-12 h-12 pb-1 text-green-700 text-4xl rounded-full bg-green-300 fixed bottom-20 right-5 z-10 active:scale-95 transition-all">
        +
      </button>

      <footer className="h-[60px] flex justify-around bg-gray-200">
        <button className="p-4 active:scale-95 transition-all">
          <HomeIcon />
        </button>
        <button className="p-4 active:scale-95 transition-all">
          <LoginIcon />
        </button>
        <button
          className="p-4"
          onClick={() => setVisibleCalendar(!visibleCalendar)}
        >
          <CalendarIcon />
        </button>
        <button className="p-4 active:scale-95 transition-all">
          <SearchBottomIcon />
        </button>
        <button className="p-4 active:scale-95 transition-all">
          <SettingsIcon />
        </button>
      </footer>
    </section>
  );
}
