export function StatusBar() {
  return (
    <div className="flex justify-between items-center px-4 py-[11px] h-[47px]">
      {/* Time */}
      <div className="flex items-center">
        <span
          className="text-white"
          style={{
            fontFamily: "SF Pro",
            fontSize: "17px",
            fontWeight: 590,
            lineHeight: "22px",
          }}
        >
          9:41
        </span>
      </div>

      {/* Right Side - Signal, WiFi, Battery */}
      <div className="flex items-center gap-[7px]">
        {/* Mobile Signal */}
        <svg
          width="19"
          height="12"
          viewBox="0 0 19 12"
          fill="none"
        >
          <rect
            x="0"
            y="8"
            width="4"
            height="4"
            rx="0.5"
            fill="white"
          />
          <rect
            x="5"
            y="6"
            width="4"
            height="6"
            rx="0.5"
            fill="white"
          />
          <rect
            x="10"
            y="3"
            width="4"
            height="9"
            rx="0.5"
            fill="white"
          />
          <rect
            x="15"
            y="0"
            width="4"
            height="12"
            rx="0.5"
            fill="white"
          />
        </svg>

        {/* WiFi */}
        <svg
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
        >
          <path
            d="M8.5 12C9.163 12 9.7 11.463 9.7 10.8C9.7 10.137 9.163 9.6 8.5 9.6C7.837 9.6 7.3 10.137 7.3 10.8C7.3 11.463 7.837 12 8.5 12Z"
            fill="white"
          />
          <path
            d="M8.5 7.2C10.433 7.2 12.1 8.867 12.1 10.8"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8.5 3.6C12.642 3.6 16 6.958 16 11.1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Battery */}
        <div className="relative w-[27.33px] h-[13px]">
          <div
            className="absolute inset-0 border border-white/35 rounded-[4.3px]"
            style={{ width: "25px", height: "13px" }}
          />
          <div className="absolute right-0 top-[4.5px] w-[1.33px] h-[4px] bg-white/40 rounded-r-sm" />
          <div className="absolute left-[2px] top-[2px] w-[21px] h-[9px] bg-white rounded-[2.5px]" />
        </div>
      </div>
    </div>
  );
}
