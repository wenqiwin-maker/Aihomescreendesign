interface StatusBarProps {
  variant?: 'light' | 'dark';
  className?: string;
  time?: string;
}

export function StatusBar({
  variant = 'dark',
  className = '',
  time = '9:41',
}: StatusBarProps) {
  const colorClass = variant === 'dark' ? 'text-black' : 'text-white';

  return (
    <div
      className={`flex justify-between items-center w-full px-4 pt-[21px] pb-[19px] h-[62px] ${className}`}
    >
      <span
        className={`text-[17px] font-semibold leading-[22px] tracking-[-0.43px] ${colorClass}`}
      >
        {time}
      </span>

      <div className="flex items-center justify-end gap-[7px]">
        {/* Mobile Signal */}
        <svg
          width="19"
          height="12"
          viewBox="0 0 19 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={colorClass}
          aria-hidden="true"
        >
          <rect x="0" y="8" width="4" height="4" rx="0.5" fill="currentColor" />
          <rect x="5" y="6" width="4" height="6" rx="0.5" fill="currentColor" />
          <rect x="10" y="3" width="4" height="9" rx="0.5" fill="currentColor" />
          <rect x="15" y="0" width="4" height="12" rx="0.5" fill="currentColor" />
        </svg>

        {/* WiFi */}
        <svg
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={colorClass}
          aria-hidden="true"
        >
          <path
            d="M5.45377 8.89482C6.72935 7.75247 8.59815 7.75247 9.87373 8.89482C9.93773 8.95623 9.97547 9.04269 9.97727 9.13408C9.97897 9.22567 9.94427 9.31405 9.88247 9.37822L7.88547 11.512C7.82687 11.5747 7.74707 11.6106 7.66377 11.6106C7.58047 11.6106 7.50067 11.5747 7.44207 11.512L5.44407 9.37822C5.38247 9.31402 5.34847 9.22557 5.35027 9.13408C5.35207 9.04267 5.38977 8.95619 5.45377 8.89482ZM2.78877 6.04716C5.53687 3.34048 9.79247 3.34057 12.5407 6.04716C12.6028 6.11064 12.6385 6.19801 12.6394 6.28935C12.6402 6.38061 12.6064 6.46875 12.5456 6.53349L11.3913 7.76884C11.2724 7.89487 11.0798 7.89735 10.9577 7.7747C10.0553 6.90944 8.88127 6.42991 7.66377 6.42998C6.44707 6.43051 5.27367 6.90999 4.37177 7.7747C4.24987 7.8971 4.05807 7.89447 3.93917 7.76884L2.78487 6.53349C2.72397 6.46883 2.68937 6.38066 2.69017 6.28935C2.69097 6.19798 2.72667 6.11063 2.78877 6.04716ZM0.12367 3.2083C4.33877 -1.06887 10.9887 -1.06887 15.2038 3.2083C15.2645 3.27176 15.299 3.3582 15.2995 3.44853C15.3 3.53914 15.2661 3.62642 15.2058 3.69072L14.0495 4.92607C13.9305 5.05244 13.7378 5.05434 13.6169 4.92998C12.011 3.31339 9.87957 2.41155 7.66377 2.41142C5.44767 2.41141 3.31577 3.31326 1.70967 4.92998C1.58887 5.0545 1.39597 5.05266 1.27707 4.92607L0.12077 3.69072C0.06057 3.62638 0.02647 3.53914 0.02707 3.44853C0.02767 3.35796 0.06267 3.27177 0.12367 3.2083Z"
            fill="currentColor"
          />
        </svg>

        {/* Battery */}
        <svg
          width="27"
          height="13"
          viewBox="0 0 27 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={colorClass}
          aria-hidden="true"
        >
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="12"
            rx="2.5"
            stroke="currentColor"
            strokeOpacity="0.35"
          />
          <path
            d="M25 4V9C26 8.5 26.5 7.5 26.5 6.5C26.5 5.5 26 4.5 25 4Z"
            fill="currentColor"
            fillOpacity="0.4"
          />
          <rect x="2" y="2" width="20" height="9" rx="1.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
