export function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient rectangle */}
      <div 
        className="absolute w-[396px] h-[396px] -left-[5px] -top-[65px]"
        style={{
          background: 'linear-gradient(180deg, #4D0090 0%, #FFFFFF 100%)',
          transform: 'rotate(180deg)'
        }}
      />
      
      {/* Ellipse 1 - cyan */}
      <div 
        className="absolute w-[645.15px] h-[203.05px] left-[20.01px] -top-[235.03px]"
        style={{
          background: '#81EAFF',
          mixBlendMode: 'color-burn',
          filter: 'blur(100px)',
          transform: 'rotate(-139deg)'
        }}
      />
      
      {/* Ellipse 6 - white */}
      <div 
        className="absolute w-[131.15px] h-[115.83px] -left-[121.41px] -top-[147.43px]"
        style={{
          background: '#FFFFFF',
          mixBlendMode: 'color-burn',
          filter: 'blur(100px)',
          transform: 'rotate(-139deg)'
        }}
      />
      
      {/* Ellipse 5 - white */}
      <div 
        className="absolute w-[230.64px] h-[283.53px] left-[68px] top-[95.7px]"
        style={{
          background: '#FDFFFC',
          mixBlendMode: 'color-burn',
          filter: 'blur(100px)',
          transform: 'rotate(-139deg)'
        }}
      />
      
      {/* Ellipse 3 - pink gradient */}
      <div 
        className="absolute w-[174.53px] h-[527.23px] -left-[170px] -top-[150.66px]"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 8.17%, #FF52EC 52.4%, #FFFEFC 100%)',
          mixBlendMode: 'color-burn',
          filter: 'blur(50px)',
          transform: 'matrix(-0.89, 0.46, -0.55, -0.84, 0, 0)'
        }}
      />
      
      {/* Ellipse 4 - orange gradient */}
      <div 
        className="absolute w-[117.09px] h-[527.23px] -left-[82.82px] -top-[238.26px]"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 8.17%, #FF8400 52.4%, #FFFEFC 100%)',
          mixBlendMode: 'color-burn',
          filter: 'blur(50px)',
          transform: 'matrix(-0.81, 0.58, -0.66, -0.75, 0, 0)'
        }}
      />
      
      {/* Ellipse 7 - white gradient */}
      <div 
        className="absolute w-[63.72px] h-[527.23px] -left-[7px] -top-[121.69px]"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 8.17%, #FFFFFF 52.4%, #FFFEFC 100%)',
          mixBlendMode: 'color-burn',
          filter: 'blur(50px)',
          transform: 'matrix(-0.58, 0.81, -0.87, -0.5, 0, 0)'
        }}
      />
      
      {/* Ellipse 2 - orange gradient overlay */}
      <div 
        className="absolute w-[473px] h-[348px] -left-[45.33px] -top-[70px]"
        style={{
          background: 'linear-gradient(58.82deg, #FF8C00 54.7%, #FFFFFF 93.03%)',
          mixBlendMode: 'color-dodge',
          opacity: 0.6,
          filter: 'blur(50px)',
          transform: 'rotate(180deg)'
        }}
      />
    </div>
  );
}
