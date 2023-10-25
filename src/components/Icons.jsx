export function ThemeIcon({ active = false }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
      <path
        className={`${
          active ? "fill-white dark:fill-black" : "fill-white dark:fill-black"
        }`}
        d="M15 10a5 5 0 0 0 0 10V10Z"
      />
      <path
        className={`${
          active ? "fill-white dark:fill-black" : "fill-white dark:fill-black"
        }`}
        fillRule="evenodd"
        d="M15 27.5c6.904 0 12.5-5.596 12.5-12.5 0-6.903-5.596-12.5-12.5-12.5C8.097 2.5 2.5 8.097 2.5 15c0 6.904 5.597 12.5 12.5 12.5Zm0-2.5v-5a5 5 0 0 0 0-10V5C9.477 5 5 9.477 5 15s4.477 10 10 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Loader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 54 20"
    >
      <circle cx="6" cy="10" r="6" className="fill-black dark:fill-yellow">
        <animate
          attributeName="opacity"
          begin=".1"
          dur="1s"
          repeatCount="indefinite"
          values="0;1;0"
        />
      </circle>
      <circle cx="26" cy="10" r="6" className="fill-black dark:fill-yellow">
        <animate
          attributeName="opacity"
          begin=".2"
          dur="1s"
          repeatCount="indefinite"
          values="0;1;0"
        />
      </circle>
      <circle cx="46" cy="10" r="6" className="fill-black dark:fill-yellow">
        <animate
          attributeName="opacity"
          begin=".3"
          dur="1s"
          repeatCount="indefinite"
          values="0;1;0"
        />
      </circle>
    </svg>
  );
}

export function SearchBottomIcon({ active = false }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        className={`${
          active
            ? "stroke-black dark:stroke-yellow"
            : "stroke-gray-300 dark:stroke-gray-300"
        }`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.796 15.811 21 21m-3-10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
      />
    </svg>
  );
}

export function HomeIcon({ active = false }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        className={`${
          active
            ? "stroke-black dark:stroke-yellow"
            : "stroke-gray-300 dark:stroke-gray-300"
        }`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 17h6M3 14.6v-2.47c0-1.149 0-1.723.148-2.252a4 4 0 0 1 .636-1.3c.327-.442.78-.794 1.687-1.5l2.6-2.022c1.405-1.093 2.108-1.64 2.884-1.85a4 4 0 0 1 2.09 0c.776.21 1.479.757 2.884 1.85l2.6 2.022c.907.706 1.36 1.058 1.687 1.5.29.391.505.832.636 1.3.148.53.148 1.104.148 2.252v2.47c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6Z"
      />
    </svg>
  );
}

export function SettingsIcon({ active = false }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none">
      <path
        className={`${
          active
            ? "fill-black dark:fill-yellow"
            : "fill-gray-300 dark:fill-gray-300"
        }`}
        fillRule="evenodd"
        d="M9 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
      <path
        className={`${
          active
            ? "fill-black dark:fill-yellow"
            : "fill-gray-300 dark:fill-gray-300"
        }`}
        fillRule="evenodd"
        d="M15.66 6.155 9 2.309 2.34 6.155v7.69L9 17.691l6.66-3.846v-7.69ZM10 .577a2 2 0 0 0-2 0L1.34 4.423a2 2 0 0 0-1 1.732v7.69a2 2 0 0 0 1 1.732L8 19.423a2 2 0 0 0 2 0l6.66-3.846a2 2 0 0 0 1-1.732v-7.69a2 2 0 0 0-1-1.732L10 .577Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function LoginIcon({ active = false }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        className={`${
          active
            ? "fill-black dark:fill-yellow"
            : "fill-gray-300 dark:fill-gray-300"
        }`}
        fillRule="evenodd"
        d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7Zm1.13 8a2.11 2.11 0 0 0-.338.014 1.421 1.421 0 0 0-.148.018 2 2 0 0 0-1.612 1.612c-.028.154-.032.36-.032 1.04V19.4a8.194 8.194 0 0 0 .011.588l.014.002c.116.01.278.01.575.01h10.8a8.207 8.207 0 0 0 .589-.012v-.013c.01-.116.011-.279.011-.575v-1.721c0-.674-.004-.88-.032-1.032a2 2 0 0 0-1.614-1.615 1.443 1.443 0 0 0-.146-.018 2.114 2.114 0 0 0-.337-.014.97.97 0 0 0-.1.01m-.096.024-.045.017a4.473 4.473 0 0 0-.154.064c-.139.06-.325.144-.59.264-.881.4-1.86.621-2.886.621a6.978 6.978 0 0 1-2.886-.62c-.265-.12-.451-.205-.59-.265a4.47 4.47 0 0 0-.154-.064l-.045-.017h.002a1.008 1.008 0 0 0-.098-.023 1.024 1.024 0 0 0-.1-.011m-.459-1.982c.2-.016.381-.03.608-.013.223.017.376.044.591.105.221.062.544.209.962.398l.108.05A4.98 4.98 0 0 0 12 14a4.979 4.979 0 0 0 2.168-.492c.419-.19.742-.336.962-.398.215-.06.369-.088.592-.105.226-.017.407-.003.608.013l.03.002c.117.009.231.022.347.043a4 4 0 0 1 3.23 3.23c.063.353.063.753.063 1.292v1.847c0 .252 0 .498-.017.706a2.022 2.022 0 0 1-.201.77 2 2 0 0 1-.874.874 2.022 2.022 0 0 1-.77.201c-.208.017-.454.017-.706.017H6.568c-.252 0-.498 0-.706-.017a2.022 2.022 0 0 1-.77-.201 2 2 0 0 1-.874-.874 2.022 2.022 0 0 1-.201-.77C4 19.93 4 19.684 4 19.432V17.59c0-.544 0-.947.064-1.303a4 4 0 0 1 3.223-3.223 3.395 3.395 0 0 1 .383-.046Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        className="stroke-white dark:stroke-black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.796 15.811 21 21m-3-10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
      />
    </svg>
  );
}

export function AddIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <path
        className="fill-white dark:fill-black"
        d="M9 1a1 1 0 0 1 2 0v18a1 1 0 1 1-2 0V1Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M19 9a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h18Z"
      />
    </svg>
  );
}
