import { motion } from 'motion/react';
import svgPaths from "../imports/svg-gr04iezp3r";

export function AuroraBackground() {
  return (
    <>
      {/* Base Purple Gradient */}
      <div className="absolute flex items-center justify-center left-[-5px] size-[396px] top-[-65px]">
        <div className="flex-none rotate-[180deg]">
          <div className="bg-gradient-to-b from-[#4d0090] size-[396px] to-[#ffffff]" />
        </div>
      </div>
      
      {/* Cyan Ellipse - Animated */}
      <motion.div 
        className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6560276746749878)+(var(--transform-inner-height)*0.7547368407249451)))] items-center justify-center left-[20.01px] mix-blend-color-burn top-[-235.03px] w-[calc(1px*((var(--transform-inner-height)*0.6560276746749878)+(var(--transform-inner-width)*0.7547368407249451)))]" 
        style={{ "--transform-inner-width": "645.140625", "--transform-inner-height": "203.046875" } as React.CSSProperties}
        animate={{
          x: [0, -40, -20, 35, 50, 15, -25, 0],
          y: [0, 45, 65, 40, -10, -30, 10, 0],
          scale: [1, 1.15, 0.92, 1.25, 1.08, 0.88, 1.12, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
        }}
      >
        <div className="flex-none rotate-[220.998deg]">
          <div className="h-[203.048px] relative w-[645.153px]">
            <div className="absolute inset-[-98.5%_-31%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1046 604">
                <g filter="url(#filter0_fn_cyan)" style={{ mixBlendMode: "color-burn" }}>
                  <ellipse cx="522.576" cy="301.524" fill="#81EAFF" rx="322.576" ry="101.524" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="603.048" id="filter0_fn_cyan" width="1045.15" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="100" />
                    <feTurbulence baseFrequency="2 2" numOctaves="3" result="noise" seed="4012" stitchTiles="stitch" type="fractalNoise">
                      <animate attributeName="baseFrequency" values="0 0; 0.5 0.5; 1 1; 0.5 0.5; 0 0" dur="12s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                      <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
                    </feComponentTransfer>
                    <feComposite in="coloredNoise1" in2="effect1_foregroundBlur" operator="in" result="noise1Clipped" />
                    <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                    <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
                    <feMerge result="effect2_noise">
                      <feMergeNode in="effect1_foregroundBlur" />
                      <feMergeNode in="color1" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* White Small Ellipse - Animated */}
      <motion.div 
        className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6560276746749878)+(var(--transform-inner-height)*0.7547368407249451)))] items-center justify-center left-[-121.41px] mix-blend-color-burn top-[-147.43px] w-[calc(1px*((var(--transform-inner-height)*0.6560276746749878)+(var(--transform-inner-width)*0.7547368407249451)))]" 
        style={{ "--transform-inner-width": "131.140625", "--transform-inner-height": "115.828125" } as React.CSSProperties}
        animate={{
          x: [0, 30, 45, 20, -15, -35, -10, 0],
          y: [0, -25, 5, 35, 50, 20, -10, 0],
          scale: [1, 1.25, 1.08, 0.88, 1.18, 0.95, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
          delay: 1.5
        }}
      >
        <div className="flex-none rotate-[220.998deg]">
          <div className="h-[115.83px] relative w-[131.151px]">
            <div className="absolute inset-[-172.67%_-152.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 532 516">
                <g filter="url(#filter0_fn_white_small)" style={{ mixBlendMode: "color-burn" }}>
                  <ellipse cx="265.576" cy="257.915" fill="white" rx="65.5755" ry="57.9149" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="515.83" id="filter0_fn_white_small" width="531.151" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="100" />
                    <feTurbulence baseFrequency="1.5 1.5" numOctaves="3" result="noise" seed="2056" stitchTiles="stitch" type="fractalNoise">
                      <animate attributeName="baseFrequency" values="0 0; 0.3 0.3; 0.8 0.8; 0.4 0.4; 0 0" dur="10s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                      <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
                    </feComponentTransfer>
                    <feComposite in="coloredNoise1" in2="effect1_foregroundBlur" operator="in" result="noise1Clipped" />
                    <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                    <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
                    <feMerge result="effect2_noise">
                      <feMergeNode in="effect1_foregroundBlur" />
                      <feMergeNode in="color1" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* White Large Ellipse - Animated */}
      <motion.div 
        className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6560276746749878)+(var(--transform-inner-height)*0.7547368407249451)))] items-center justify-center left-[68px] mix-blend-color-burn top-[95.7px] w-[calc(1px*((var(--transform-inner-height)*0.6560276746749878)+(var(--transform-inner-width)*0.7547368407249451)))]" 
        style={{ "--transform-inner-width": "230.625", "--transform-inner-height": "283.53125" } as React.CSSProperties}
        animate={{
          x: [0, -35, -50, -25, 20, 40, 10, 0],
          y: [0, 30, 10, -20, -40, -15, 15, 0],
          scale: [1, 0.88, 1.18, 1.25, 1.05, 0.92, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: [0.65, 0, 0.35, 1],
          delay: 2
        }}
      >
        <div className="flex-none rotate-[220.998deg]">
          <div className="h-[283.533px] relative w-[230.637px]">
            <div className="absolute inset-[-70.54%_-86.72%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 631 684">
                <g filter="url(#filter0_fn_white_large)" style={{ mixBlendMode: "color-burn" }}>
                  <ellipse cx="315.319" cy="341.767" fill="#FDFFFC" rx="115.319" ry="141.767" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="683.533" id="filter0_fn_white_large" width="630.637" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="100" />
                    <feTurbulence baseFrequency="2.5 2.5" numOctaves="3" result="noise" seed="7890" stitchTiles="stitch" type="fractalNoise">
                      <animate attributeName="baseFrequency" values="0 0; 0.4 0.4; 0.9 0.9; 0.5 0.5; 0 0" dur="14s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                      <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
                    </feComponentTransfer>
                    <feComposite in="coloredNoise1" in2="effect1_foregroundBlur" operator="in" result="noise1Clipped" />
                    <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                    <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
                    <feMerge result="effect2_noise">
                      <feMergeNode in="effect1_foregroundBlur" />
                      <feMergeNode in="color1" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Pink Gradient Ellipse - Animated */}
      <motion.div 
        className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.46023234724998474)+(var(--transform-inner-height)*0.8352011442184448)))] items-center justify-center left-[-170px] mix-blend-color-burn top-[-150.66px] w-[calc(1px*((var(--transform-inner-height)*0.5499446392059326)+(var(--transform-inner-width)*0.8877984881401062)))]" 
        style={{ "--transform-inner-width": "174.515625", "--transform-inner-height": "527.21875" } as React.CSSProperties}
        animate={{
          x: [0, 35, 55, 30, -10, -40, -20, 0],
          y: [0, -35, -10, 20, 50, 35, 5, 0],
          scale: [1, 1.18, 0.88, 1.22, 1.05, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: [0.43, 0.13, 0.23, 0.96],
          delay: 3
        }}
      >
        <div className="flex-none rotate-[152.598deg] skew-x-[5.929deg]">
          <div className="h-[527.227px] relative w-[174.526px]">
            <div className="absolute inset-[-18.97%_-57.3%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 728">
                <g filter="url(#filter0_fn_pink)" style={{ mixBlendMode: "color-burn" }}>
                  <ellipse cx="187.263" cy="363.613" fill="url(#paint0_linear_pink)" rx="87.2628" ry="263.613" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="727.227" id="filter0_fn_pink" width="374.526" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="50" />
                    <feTurbulence baseFrequency="1.8 1.8" numOctaves="3" result="noise" seed="3456" stitchTiles="stitch" type="fractalNoise">
                      <animate attributeName="baseFrequency" values="0 0; 0.35 0.35; 0.75 0.75; 0.45 0.45; 0 0" dur="13s" repeatCount="indefinite" />
                      <animate attributeName="seed" values="3456; 5678; 8901; 4321; 3456" dur="13s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                      <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
                    </feComponentTransfer>
                    <feComposite in="coloredNoise1" in2="effect1_foregroundBlur" operator="in" result="noise1Clipped" />
                    <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                    <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
                    <feMerge result="effect2_noise">
                      <feMergeNode in="effect1_foregroundBlur" />
                      <feMergeNode in="color1" />
                    </feMerge>
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_pink" x1="187.263" x2="187.263" y1="100" y2="627.227">
                    <stop offset="0.0817308" stopColor="white" />
                    <stop offset="0.524038" stopColor="#FF52EC" />
                    <stop offset="1" stopColor="#FFFEFC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Orange Gradient Ellipse - Animated */}
      <motion.div 
        className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.5835411548614502)+(var(--transform-inner-height)*0.7470895648002625)))] items-center justify-center left-[-82.82px] mix-blend-color-burn top-[-238.26px] w-[calc(1px*((var(--transform-inner-height)*0.6647233963012695)+(var(--transform-inner-width)*0.8120835423469543)))]" 
        style={{ "--transform-inner-width": "117.09375", "--transform-inner-height": "527.21875" } as React.CSSProperties}
        animate={{
          x: [0, -35, -45, -20, 15, 45, 25, 0],
          y: [0, 35, 55, 45, 10, -25, -5, 0],
          scale: [1, 1.25, 1.05, 0.85, 1.18, 0.92, 1.12, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.5
        }}
      >
        <div className="flex-none rotate-[144.3deg] skew-x-[5.929deg]">
          <div className="h-[527.227px] relative w-[117.094px]">
            <div className="absolute inset-[-18.97%_-85.4%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 318 728">
                <g filter="url(#filter0_fn_orange)" style={{ mixBlendMode: "color-burn" }}>
                  <ellipse cx="158.547" cy="363.613" fill="url(#paint0_linear_orange)" rx="58.5469" ry="263.613" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="727.227" id="filter0_fn_orange" width="317.094" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="50" />
                    <feTurbulence baseFrequency="2.2 2.2" numOctaves="3" result="noise" seed="6789" stitchTiles="stitch" type="fractalNoise">
                      <animate attributeName="baseFrequency" values="0 0; 0.5 0.5; 1.2 1.2; 0.6 0.6; 0 0" dur="11s" repeatCount="indefinite" />
                      <animate attributeName="seed" values="6789; 1234; 9876; 5432; 6789" dur="11s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                      <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
                    </feComponentTransfer>
                    <feComposite in="coloredNoise1" in2="effect1_foregroundBlur" operator="in" result="noise1Clipped" />
                    <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                    <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
                    <feMerge result="effect2_noise">
                      <feMergeNode in="effect1_foregroundBlur" />
                      <feMergeNode in="color1" />
                    </feMerge>
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_orange" x1="158.547" x2="158.547" y1="100" y2="627.227">
                    <stop offset="0.0817308" stopColor="white" />
                    <stop offset="0.524038" stopColor="#FF8400" />
                    <stop offset="1" stopColor="#FFFEFC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* White Gradient Ellipse - Animated */}
      <motion.div 
        className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.8113777041435242)+(var(--transform-inner-height)*0.49709710478782654)))] items-center justify-center left-[-7px] mix-blend-color-burn top-[-121.69px] w-[calc(1px*((var(--transform-inner-height)*0.8676949143409729)+(var(--transform-inner-width)*0.5845221877098083)))]" 
        style={{ "--transform-inner-width": "63.71875", "--transform-inner-height": "527.21875" } as React.CSSProperties}
        animate={{
          x: [0, 25, 40, 30, -5, -30, -15, 0],
          y: [0, -20, 10, 35, 45, 25, -5, 0],
          scale: [1, 1.12, 0.92, 1.15, 1.05, 0.88, 1.08, 1],
        }}
        transition={{
          duration: 10.5,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
          delay: 4
        }}
      >
        <div className="flex-none rotate-[125.769deg] skew-x-[5.929deg]">
          <div className="h-[527.227px] relative w-[63.721px]">
            <div className="absolute inset-[-18.97%_-156.93%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 728">
                <g filter="url(#filter0_fn_white_gradient)" style={{ mixBlendMode: "color-burn" }}>
                  <ellipse cx="131.86" cy="363.613" fill="url(#paint0_linear_white_gradient)" rx="31.8605" ry="263.613" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="727.227" id="filter0_fn_white_gradient" width="263.721" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="50" />
                    <feTurbulence baseFrequency="1.2 1.2" numOctaves="3" result="noise" seed="9012" stitchTiles="stitch" type="fractalNoise">
                      <animate attributeName="baseFrequency" values="0 0; 0.25 0.25; 0.6 0.6; 0.35 0.35; 0 0" dur="10.5s" repeatCount="indefinite" />
                      <animate attributeName="seed" values="9012; 3456; 7890; 2345; 9012" dur="10.5s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                      <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
                    </feComponentTransfer>
                    <feComposite in="coloredNoise1" in2="effect1_foregroundBlur" operator="in" result="noise1Clipped" />
                    <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                    <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
                    <feMerge result="effect2_noise">
                      <feMergeNode in="effect1_foregroundBlur" />
                      <feMergeNode in="color1" />
                    </feMerge>
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_white_gradient" x1="131.86" x2="131.86" y1="100" y2="627.227">
                    <stop offset="0.0817308" stopColor="white" />
                    <stop offset="0.524038" stopColor="white" />
                    <stop offset="1" stopColor="#FFFEFC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Orange Color Dodge Layer - Animated */}
      <motion.div 
        className="absolute flex h-[348px] items-center justify-center left-[-45.33px] mix-blend-color-dodge top-[-70px] w-[473px]"
        animate={{
          x: [0, -30, -45, -30, 10, 35, 20, 0],
          y: [0, 25, 45, 55, 40, 10, -10, 0],
          scale: [1, 1.2, 0.9, 1.22, 1.08, 0.88, 1.15, 1],
          rotate: [180, 185, 192, 188, 175, 170, 178, 180],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: [0.37, 0, 0.63, 1],
          delay: 1
        }}
      >
        <div className="flex-none">
          <div className="h-[348px] relative w-[473px]">
            <div className="absolute inset-[-28.74%_-21.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 673 548">
                <g filter="url(#filter0_fn_color_dodge)" opacity="0.6" style={{ mixBlendMode: "color-dodge" }}>
                  <path clipRule="evenodd" d={svgPaths.pa1d0900} fill="url(#paint0_linear_color_dodge)" fillRule="evenodd" />
                  <path d={svgPaths.p35a1e300} fill="url(#paint1_linear_color_dodge)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="548" id="filter0_fn_color_dodge" width="673" x="-1.75969e-07" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="50" />
                    <feTurbulence baseFrequency="3 3" numOctaves="3" result="noise" seed="1357" stitchTiles="stitch" type="fractalNoise">
                      <animate attributeName="baseFrequency" values="0 0; 0.6 0.6; 1.5 1.5; 0.8 0.8; 0 0" dur="15s" repeatCount="indefinite" />
                      <animate attributeName="seed" values="1357; 8642; 2468; 9753; 1357" dur="15s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                      <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
                    </feComponentTransfer>
                    <feComposite in="coloredNoise1" in2="effect1_foregroundBlur" operator="in" result="noise1Clipped" />
                    <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                    <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
                    <feMerge result="effect2_noise">
                      <feMergeNode in="effect1_foregroundBlur" />
                      <feMergeNode in="color1" />
                    </feMerge>
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_color_dodge" x1="202.952" x2="476.437" y1="271.938" y2="46.9774">
                    <stop offset="0.365385" stopColor="#FF8C00" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_color_dodge" x1="202.952" x2="476.437" y1="271.938" y2="46.9774">
                    <stop offset="0.365385" stopColor="#FF8C00" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
