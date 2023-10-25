import { useEffect, useState } from "react";
import { addDays, eachDayOfInterval, format, subDays } from "date-fns";
import { uk } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeIcon, LoginIcon, SearchBottomIcon, SettingsIcon } from "./Icons";
import "swiper/css";
import "react-day-picker/dist/style.css";

export default function DateSlider() {
  const initialSlide = "99";
  const [counter, setCounter] = useState(0);
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [selectedDay, setSelectedDay] = useState();

  useEffect(() => {
    setVisibleCalendar(false);
  }, [selectedDay]);

  const days = eachDayOfInterval({
    start: subDays(selectedDay || new Date(), 100),
    end: addDays(selectedDay || new Date(), counter),
  });

  return (
    <section className="bg-red-100 h-full flex flex-col">
      {visibleCalendar && (
        <>
          <DayPicker
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            showOutsideDays
            locale={uk}
            className="absolute left-0 right-0 w-fit mx-auto bottom-[80px] z-20 bg-slate-200 p-5 rounded-xl shadow-xl capitalize"
          />
          <div
            onClick={() => setVisibleCalendar(false)}
            className="fixed inset-0 bg-black/50 z-10"
          />
        </>
      )}

      <Swiper
        initialSlide={initialSlide}
        spaceBetween={0}
        slidesPerView={1}
        className="bg-slate-300 w-full grow"
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
            <div key={item} className="p-3 flex justify-center items-center">
              <p className="font-medium capitalize select-none text-center">
                {format(selectedDay || new Date(), "EEEE dd.MM.Y", {
                  locale: uk,
                })}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <footer className="h-[60px] flex justify-around bg-gray-500">
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

export function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 10h18M7 3v2m10-2v2M6.2 21h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 5 18.92 5 17.8 5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 6.52 3 7.08 3 8.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21Z"
      />
    </svg>
  );
}
