import { Tag } from '../../types';

interface ProgressBarProps {
  currentTime: number;
  totalDuration: number;
  tags: Tag[];
  onSeek: (time: number) => void;
  onTagClick: (index: number) => void;
}

export function ProgressBar({
  currentTime,
  totalDuration,
  tags,
  onSeek,
  onTagClick,
}: ProgressBarProps) {
  const handlePointerDown = (e: React.PointerEvent) => {
    const target = e.currentTarget.querySelector('[data-progress-bar]') as HTMLElement;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    onSeek((percentage / 100) * totalDuration);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const moveX = moveEvent.clientX - rect.left;
      const movePercentage = Math.max(0, Math.min(100, (moveX / rect.width) * 100));
      onSeek((movePercentage / 100) * totalDuration);
    };

    const handlePointerUp = () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
  };

  return (
    <div className="flex-1 relative px-2">
      {/* Time Labels */}
      <div className="absolute -top-5 left-0 right-0 flex justify-between px-1">
        <span
          style={{
            fontFamily: "SF Pro",
            fontSize: "11px",
            fontWeight: 510,
            color: "white",
          }}
        >
          0:00
        </span>
        <span
          style={{
            fontFamily: "SF Pro",
            fontSize: "11px",
            fontWeight: 510,
            color: "white",
          }}
        >
          2:00
        </span>
      </div>

      {/* Tags on Progress Bar */}
      {tags.map((tag, index) => (
        <div
          key={index}
          className="absolute cursor-pointer"
          style={{
            left: `${tag.position}%`,
            top: "-5px",
            transform: "translateX(-50%)",
            zIndex: 30,
          }}
          onClick={() => onTagClick(index)}
        >
          <svg
            width="21"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 10.5C21 13.9952 19.2923 17.0914 16.6657 19C14.9344 20.258 10.5 23 10.5 23C10.5 23 6.06563 20.258 4.33431 19C1.70773 17.0914 0 13.9952 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5Z"
              fill="#8C00FF"
            />
            <path
              d="M7.26926 8.31886L7.26921 6.17476C7.26925 5.89045 7.38221 5.61779 7.58324 5.41676C7.78428 5.21572 8.05693 5.10277 8.34124 5.10273L12.6302 5.10359C12.9145 5.10364 13.1872 5.2166 13.3882 5.41765C13.5893 5.61869 13.7022 5.89135 13.7023 6.17566L13.7031 8.319L7.27002 8.31961L7.26926 8.31886ZM7.26929 9.39242L6.19724 9.3924C5.91293 9.39244 5.64027 9.50539 5.43924 9.70642C5.2382 9.90746 5.12525 10.1801 5.12521 10.4644L5.12377 13.6791C5.12369 13.82 5.15139 13.9595 5.20528 14.0897C5.25917 14.2199 5.33819 14.3382 5.43783 14.4378C5.53746 14.5375 5.65576 14.6165 5.78596 14.6704C5.91615 14.7243 6.05569 14.752 6.1966 14.7519L9.94953 14.752L9.94884 17.9689C9.94895 18.1111 10.0056 18.2475 10.1062 18.3481C10.2069 18.4486 10.3434 18.505 10.4856 18.5049C10.6279 18.5048 10.7643 18.4482 10.8648 18.3475C10.9653 18.2469 11.0218 18.1104 11.0217 17.9681L11.0216 14.7535L14.7745 14.7521C15.0588 14.752 15.3315 14.6391 15.5325 14.4381C15.7335 14.237 15.8465 13.9644 15.8465 13.6801L15.8465 10.4639C15.8465 10.323 15.8188 10.1835 15.765 10.0533C15.7111 9.92307 15.632 9.80477 15.5324 9.70513C15.4328 9.6055 15.3145 9.52647 15.1843 9.47259C15.0541 9.4187 14.9145 9.391 14.7736 9.39107L13.7016 9.39105L7.27004 9.39166L7.26929 9.39242Z"
              fill="white"
            />
          </svg>
          {/* Progress Dot */}
          <div
            className="absolute w-2 h-2 rounded-full bg-[#8C00FF] border-2 border-white"
            style={{
              left: "50%",
              top: "23px",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      ))}

      {/* Progress Bar Background - Segmented with Extended Touch Area */}
      <div
        className="relative w-full py-4 -my-4 cursor-pointer"
        style={{ touchAction: 'none' }}
        onPointerDown={handlePointerDown}
      >
        <div className="relative w-full h-1" data-progress-bar>
          {(() => {
            const currentProgress =
              (currentTime / totalDuration) * 100;
            const uniqueTags = [
              ...new Set(tags.map((t) => t.position)),
            ].sort((a, b) => a - b);
            const segments: Array<{
              start: number;
              end: number;
              isActive: boolean;
            }> = [];
            let prevPosition = 0;
            uniqueTags.forEach((tagPos) => {
              if (tagPos > 0) {
                segments.push({
                  start: prevPosition,
                  end: tagPos,
                  isActive: tagPos <= currentProgress,
                });
              }
              prevPosition = tagPos;
            });
            if (prevPosition < 100) {
              segments.push({
                start: prevPosition,
                end: 100,
                isActive: prevPosition < currentProgress,
              });
            }
            if (segments.length === 0) {
              segments.push({
                start: 0,
                end: 100,
                isActive: true,
              });
            }

            return segments.map((segment, index) => {
              const segmentWidth =
                segment.end - segment.start;
              const gapWidth = 4;
              const containerWidth = 300;
              const gapPercentage =
                (gapWidth / containerWidth) * 100;

              return (
                <div
                  key={index}
                  className="absolute h-1 rounded-full"
                  style={{
                    left: `${segment.start}%`,
                    width: `calc(${segmentWidth}% - ${gapPercentage}%)`,
                    background: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  {segment.isActive && (
                    <div
                      className="absolute h-1 rounded-full bg-[#8C00FF]"
                      style={{
                        width:
                          segment.end <= currentProgress
                            ? "100%"
                            : `${((currentProgress - segment.start) / segmentWidth) * 100}%`,
                      }}
                    />
                  )}
                </div>
              );
            });
          })()}
        </div>
      </div>
    </div>
  );
}
