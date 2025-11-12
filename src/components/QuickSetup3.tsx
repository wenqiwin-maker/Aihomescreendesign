import { Sparkles, Plus, AlertCircle } from 'lucide-react';
import { StatusBar } from './StatusBar';
import { useState } from 'react';
import { Textarea } from './ui/textarea';

interface QuickSetup3Props {
  onClose: () => void;
  onBack: () => void;
  onStartPractice: () => void;
}

export function QuickSetup3({ onClose, onBack, onStartPractice }: QuickSetup3Props) {
  const [selectedGoalType, setSelectedGoalType] = useState<string | null>(null);
  const [customGoal, setCustomGoal] = useState('');
  const [selectedConstraint, setSelectedConstraint] = useState<string | null>(null);
  const [evidence, setEvidence] = useState('');
  const [directness, setDirectness] = useState(50);
  const [supportiveness, setSupportiveness] = useState(50);
  const [timePressure, setTimePressure] = useState(50);
  const [relationshipState, setRelationshipState] = useState<string>('neutral');
  const [avatarChoice, setAvatarChoice] = useState<string>('default');

  const goalTypes = ['Promotion', 'Compensation', 'Resources', 'Priority', 'Annual Review', 'Repair Relationship'];
  const constraints = ['Preserve the relationship', 'Preserve trust', 'Address issues, not people', 'No public pressure'];

  return (
    <div className="relative w-[390px] h-[844px] bg-white overflow-hidden">
      {/* Status Bar */}
      <div className="flex justify-center items-center px-4 pt-[21px] pb-[19px] gap-[154px] h-[62px]">
        <div className="flex-1 flex justify-center items-center">
          <span 
            className="text-black text-center"
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '17px', 
              fontWeight: 590, 
              lineHeight: '22px' 
            }}
          >
            9:41
          </span>
        </div>
        <StatusBar />
      </div>

      {/* Sheet Container */}
      <div 
        className="absolute left-0 right-0 bg-white overflow-y-auto"
        style={{
          top: '62px',
          bottom: '0px',
          boxShadow: '0px 15px 75px rgba(0, 0, 0, 0.18)',
          borderRadius: '38px 38px 0px 0px'
        }}
      >
        {/* Toolbar */}
        <div className="flex flex-col items-center pb-2.5 w-full">
          {/* Grabber */}
          <div className="flex flex-col items-start pt-[5px] w-9 h-4">
            <div 
              className="w-9 h-[5px] rounded-full"
              style={{
                background: '#CCCCCC',
                mixBlendMode: 'plus-darker'
              }}
            />
          </div>

          {/* Title and Controls */}
          <div className="flex justify-between items-center px-4 gap-[66px] w-full h-11 mt-2">
            {/* Leading Button */}
            <button 
              onClick={onBack}
              className="flex justify-center items-center px-1 gap-3 w-11 h-11 rounded-full relative"
            >
              <div 
                className="absolute w-11 h-11 left-0 top-0 rounded-full"
                style={{
                  background: 'rgba(120, 120, 128, 0.16)'
                }}
              />
              <span 
                className="flex items-center justify-center text-center z-10"
                style={{
                  fontFamily: 'SF Pro',
                  fontSize: '17px',
                  fontWeight: 510,
                  lineHeight: '20px',
                  color: '#999999',
                  mixBlendMode: 'plus-darker'
                }}
              >
                Cancel
              </span>
            </button>

            {/* Spacer */}
            <div className="w-2 h-11" />

            {/* Title */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[13px]">
              <h1 
                className="text-[#333333] text-center"
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '17px', 
                  fontWeight: 590, 
                  lineHeight: '22px',
                  letterSpacing: '-0.43px',
                  mixBlendMode: 'plus-darker'
                }}
              >
                Setup
              </h1>
            </div>
          </div>
        </div>

        {/* QuickSetup Content */}
        <div className="flex flex-col items-start pt-8 px-5 gap-8">
          {/* Title */}
          <h2 
            className="text-[#0A0A0A] w-[350px]"
            style={{ 
              fontFamily: 'SF Pro', 
              fontSize: '24px', 
              fontWeight: 590, 
              lineHeight: '24px',
              letterSpacing: '-0.150391px'
            }}
          >
            Set your real situation Tell AI about your real communication situation
          </h2>

          {/* Form Container */}
          <div className="flex flex-col gap-8 w-[350px]">
            {/* Goal Type */}
            <div className="flex flex-col gap-3">
              <label 
                className="text-black/90"
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '14px', 
                  fontWeight: 510, 
                  lineHeight: '20px',
                  letterSpacing: '-0.150391px'
                }}
              >
                Goal Type
              </label>
              <div className="grid grid-cols-2 gap-4 gap-y-[14px]">
                {goalTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedGoalType(type)}
                    className="flex justify-center items-center px-3.5 py-3.5 h-[47px] rounded-3xl border transition-all"
                    style={{
                      borderColor: selectedGoalType === type ? '#8C00FF' : '#E9EBF3',
                      backgroundColor: '#FFFFFF',
                      width: '170px'
                    }}
                  >
                    <span
                      style={{ 
                        fontFamily: 'SF Pro', 
                        fontSize: '14px', 
                        fontWeight: 400, 
                        lineHeight: '19px',
                        letterSpacing: '-0.3125px',
                        color: '#0A0A0A'
                      }}
                    >
                      {type}
                    </span>
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={customGoal}
                onChange={(e) => setCustomGoal(e.target.value)}
                placeholder="Other, e.g., Ask for a feedback..."
                className="w-full h-12 px-3 py-1 border border-[#E9EBF3] rounded-[26px] outline-none"
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '14px', 
                  fontWeight: 400, 
                  lineHeight: '17px',
                  letterSpacing: '-0.150391px',
                  color: customGoal ? '#0A0A0A' : '#717182'
                }}
              />
            </div>

            {/* Constraints */}
            <div className="flex flex-col gap-3">
              <label 
                className="text-black/90"
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '14px', 
                  fontWeight: 510, 
                  lineHeight: '14px',
                  letterSpacing: '-0.150391px'
                }}
              >
                Constraints (Relationship & Expression)
              </label>
              <div className="flex flex-wrap gap-2.5">
                {constraints.map((constraint) => (
                  <button
                    key={constraint}
                    onClick={() => setSelectedConstraint(constraint)}
                    className="flex justify-center items-center px-3.5 py-3.5 rounded-3xl border transition-all"
                    style={{
                      borderColor: selectedConstraint === constraint ? '#8C00FF' : '#E9EBF3',
                      backgroundColor: '#FFFFFF',
                      width: '170px',
                      height: '66px'
                    }}
                  >
                    <span
                      style={{ 
                        fontFamily: 'SF Pro', 
                        fontSize: '14px', 
                        fontWeight: 400, 
                        lineHeight: '19px',
                        letterSpacing: '-0.3125px',
                        color: '#0A0A0A',
                        textAlign: 'center'
                      }}
                    >
                      {constraint}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Evidence */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <label 
                  className="text-black/90"
                  style={{ 
                    fontFamily: 'SF Pro', 
                    fontSize: '14px', 
                    fontWeight: 510, 
                    lineHeight: '20px',
                    letterSpacing: '-0.150391px'
                  }}
                >
                  Evidence (Situation-Behavior-Impact)
                </label>
                <button className="flex items-center gap-1 px-0 py-1.5 rounded-lg">
                  <Sparkles className="w-4 h-4 text-[#8C00FF]" strokeWidth={1.33} />
                  <span 
                    className="text-[#8C00FF]"
                    style={{ 
                      fontFamily: 'SF Pro', 
                      fontSize: '14px', 
                      fontWeight: 510, 
                      lineHeight: '20px',
                      letterSpacing: '-0.150391px'
                    }}
                  >
                    AI Refine
                  </span>
                </button>
              </div>
              <Textarea
                value={evidence}
                onChange={(e) => setEvidence(e.target.value)}
                placeholder="Situation: When..., Behavior: You..., Impact: It resulted in..."
                className="min-h-[100px] border-[#E9EBF3] rounded-2xl resize-none p-3"
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '14px', 
                  fontWeight: 400, 
                  lineHeight: '19px',
                  letterSpacing: '-0.150391px',
                  color: evidence ? '#0A0A0A' : '#717182'
                }}
              />
              <button className="flex justify-center items-center gap-1 py-3.5 h-12 border border-black/10 rounded-3xl bg-white">
                <Plus className="w-4 h-4 text-[#0A0A0A]" strokeWidth={1.33} />
                <span
                  style={{ 
                    fontFamily: 'SF Pro', 
                    fontSize: '14px', 
                    fontWeight: 510, 
                    lineHeight: '20px',
                    letterSpacing: '-0.150391px',
                    color: '#0A0A0A'
                  }}
                >
                  Add Evidence
                </span>
              </button>
            </div>

            {/* Counterpart Style */}
            <div className="flex flex-col gap-3">
              <label 
                className="text-black/90"
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '14px', 
                  fontWeight: 510, 
                  lineHeight: '14px',
                  letterSpacing: '-0.150391px'
                }}
              >
                Counterpart Style
              </label>

              {/* Directness Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 500, lineHeight: '20px', letterSpacing: '-0.150391px', color: '#0A0A0A' }}>
                    Directness
                  </span>
                  <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 400, lineHeight: '20px', textAlign: 'right', letterSpacing: '-0.3125px', color: 'rgba(0, 0, 0, 0.6)' }}>
                    {directness}%
                  </span>
                </div>
                <div className="relative w-full h-4">
                  <div className="absolute w-full h-4 bg-[#ECECF0] rounded-full" />
                  <div 
                    className="absolute h-4 bg-[#8C00FF] rounded-l-full" 
                    style={{ width: `${directness}%` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={directness}
                    onChange={(e) => setDirectness(Number(e.target.value))}
                    className="absolute w-full h-4 opacity-0 cursor-pointer"
                  />
                  <div 
                    className="absolute w-4 h-4 bg-white border border-[#8C00FF] rounded-full shadow-sm"
                    style={{ 
                      left: `calc(${directness}% - 8px)`,
                      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </div>
                <div className="flex justify-between">
                  <span style={{ fontFamily: 'SF Pro', fontSize: '12px', lineHeight: '16px', letterSpacing: '-0.3125px', color: 'rgba(0, 0, 0, 0.6)' }}>Indirect</span>
                  <span style={{ fontFamily: 'SF Pro', fontSize: '12px', lineHeight: '16px', textAlign: 'right', letterSpacing: '-0.3125px', color: 'rgba(0, 0, 0, 0.6)' }}>Very Direct</span>
                </div>
              </div>

              {/* Supportiveness Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 500, lineHeight: '14px', letterSpacing: '-0.150391px', color: '#0A0A0A' }}>
                    Supportiveness
                  </span>
                  <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'right', letterSpacing: '-0.3125px', color: 'rgba(0, 0, 0, 0.6)' }}>
                    {supportiveness}%
                  </span>
                </div>
                <div className="relative w-full h-4">
                  <div className="absolute w-full h-4 bg-[#ECECF0] rounded-full" />
                  <div 
                    className="absolute h-4 bg-[#8C00FF] rounded-l-full" 
                    style={{ width: `${supportiveness}%` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={supportiveness}
                    onChange={(e) => setSupportiveness(Number(e.target.value))}
                    className="absolute w-full h-4 opacity-0 cursor-pointer"
                  />
                  <div 
                    className="absolute w-4 h-4 bg-white border border-[#8C00FF] rounded-full shadow-sm"
                    style={{ 
                      left: `calc(${supportiveness}% - 8px)`,
                      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </div>
                <div className="flex justify-between">
                  <span style={{ fontFamily: 'SF Pro', fontSize: '12px', lineHeight: '16px', letterSpacing: '-0.3125px', color: 'rgba(0, 0, 0, 0.6)' }}>Very Supportive</span>
                  <span style={{ fontFamily: 'SF Pro', fontSize: '12px', lineHeight: '16px', letterSpacing: '-0.3125px', color: 'rgba(0, 0, 0, 0.6)' }}>Critical</span>
                </div>
              </div>

              {/* Time Pressure Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 500, lineHeight: '14px', letterSpacing: '-0.150391px', color: '#0A0A0A' }}>
                    Time Pressure
                  </span>
                  <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'right', letterSpacing: '-0.3125px', color: 'rgba(0, 0, 0, 0.6)' }}>
                    {timePressure}%
                  </span>
                </div>
                <div className="relative w-full h-4">
                  <div className="absolute w-full h-4 bg-[#ECECF0] rounded-full" />
                  <div 
                    className="absolute h-4 bg-[#8C00FF] rounded-l-full" 
                    style={{ width: `${timePressure}%` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={timePressure}
                    onChange={(e) => setTimePressure(Number(e.target.value))}
                    className="absolute w-full h-4 opacity-0 cursor-pointer"
                  />
                  <div 
                    className="absolute w-4 h-4 bg-white border border-[#8C00FF] rounded-full shadow-sm"
                    style={{ 
                      left: `calc(${timePressure}% - 8px)`,
                      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </div>
                <div className="flex justify-between">
                  <span style={{ fontFamily: 'SF Pro', fontSize: '12px', lineHeight: '16px', letterSpacing: '-0.3125px', color: 'rgba(0, 0, 0, 0.6)' }}>Urgent</span>
                  <span style={{ fontFamily: 'SF Pro', fontSize: '12px', lineHeight: '16px', letterSpacing: '-0.3125px', color: 'rgba(0, 0, 0, 0.6)' }}>Relaxed</span>
                </div>
              </div>
            </div>

            {/* Relationship State */}
            <div className="flex flex-col gap-3">
              <label 
                className="text-[#0A0A0A]"
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '14px', 
                  fontWeight: 510, 
                  lineHeight: '14px',
                  letterSpacing: '-0.150391px'
                }}
              >
                Relationship State
              </label>
              <div className="grid grid-cols-3 gap-[7.67px]">
                {[
                  { id: 'cooperative', emoji: '🤝', label: 'Cooperative' },
                  { id: 'neutral', emoji: '😐', label: 'Neutral' },
                  { id: 'defensive', emoji: '🛡️', label: 'Defensive' }
                ].map((state) => (
                  <button
                    key={state.id}
                    onClick={() => setRelationshipState(state.id)}
                    className="flex flex-col items-start p-3.5 pb-0.5 gap-1 rounded-[10px] border transition-all"
                    style={{
                      width: '112.66px',
                      height: '84px',
                      borderColor: relationshipState === state.id ? 'rgba(140, 0, 255, 0.08)' : '#E5E7EB',
                      backgroundColor: relationshipState === state.id ? 'rgba(140, 0, 255, 0.04)' : '#FFFFFF'
                    }}
                  >
                    <div style={{ fontFamily: 'SF Pro', fontSize: '24px', fontWeight: 500, lineHeight: '32px', letterSpacing: '0.0703125px', color: '#0A0A0A' }}>
                      {state.emoji}
                    </div>
                    <span style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 500, lineHeight: '20px', letterSpacing: '-0.150391px', color: '#0A0A0A' }}>
                      {state.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Avatar */}
            <div className="flex flex-col gap-3">
              <label 
                className="text-[#0A0A0A]"
                style={{ 
                  fontFamily: 'SF Pro', 
                  fontSize: '14px', 
                  fontWeight: 510, 
                  lineHeight: '20px',
                  letterSpacing: '-0.150391px'
                }}
              >
                Avatar
              </label>
              <div className="flex flex-col gap-3">
                {/* Upload Photo */}
                <button
                  onClick={() => setAvatarChoice('upload')}
                  className="flex items-center gap-3 p-[18px] rounded-[10px] border transition-all"
                  style={{
                    height: '84px',
                    borderColor: avatarChoice === 'upload' ? 'rgba(140, 0, 255, 0.08)' : '#E5E7EB',
                    backgroundColor: avatarChoice === 'upload' ? 'rgba(140, 0, 255, 0.04)' : '#FFFFFF'
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#E5E7EB] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="8.33" stroke="#4A5565" strokeWidth="1.67"/>
                      <circle cx="10" cy="8.33" r="2.08" stroke="#4A5565" strokeWidth="1.67"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '-0.3125px', color: '#0A0A0A' }}>Upload Photo → Stylized person</span>
                    <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '-0.3125px', color: '#6A7282' }}>More realistic practice</span>
                  </div>
                </button>

                {/* Default Avatar */}
                <button
                  onClick={() => setAvatarChoice('default')}
                  className="flex items-center gap-3 p-[18px] rounded-[10px] border transition-all"
                  style={{
                    height: '84px',
                    borderColor: avatarChoice === 'default' ? 'rgba(140, 0, 255, 0.08)' : '#E5E7EB',
                    backgroundColor: avatarChoice === 'default' ? 'rgba(140, 0, 255, 0.04)' : '#FFFFFF'
                  }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #51A2FF 0%, #C27AFF 100%)' }}>
                    <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '-0.3125px', color: '#FFFFFF' }}>AI</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '-0.3125px', color: '#0A0A0A' }}>Default Stylized Avatar</span>
                    <span style={{ fontFamily: 'SF Pro', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '-0.3125px', color: '#6A7282' }}>AI-generated appearance</span>
                  </div>
                </button>

                {/* Alert */}
                <div 
                  className="flex items-start p-3 rounded-[10px] border"
                  style={{
                    height: '66px',
                    backgroundColor: '#FFFBEB',
                    borderColor: '#FEE685'
                  }}
                >
                  <AlertCircle className="w-4 h-4 text-[#0A0A0A] flex-shrink-0 mt-0.5 mr-3" strokeWidth={1.33} />
                  <p style={{ fontFamily: 'SF Pro', fontSize: '14px', fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.150391px', color: '#973C00' }}>
                    Photos are processed on-device and never stored. Y
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Start Practice Button */}
          <button
            onClick={onStartPractice}
            className="flex justify-center items-center py-3.5 h-12 rounded-[28px] w-[350px] mt-4"
            style={{
              backgroundColor: '#8C00FF'
            }}
          >
            <span 
              className="text-white text-center"
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '16px', 
                fontWeight: 510, 
                lineHeight: '20px',
                letterSpacing: '-0.150391px'
              }}
            >
              Next
            </span>
          </button>

          {/* Skip Link */}
          <button
            onClick={onStartPractice}
            className="w-full flex justify-center items-center h-5 mt-5 mb-10"
          >
            <span
              style={{ 
                fontFamily: 'SF Pro', 
                fontSize: '16px', 
                fontWeight: 510, 
                lineHeight: '20px',
                letterSpacing: '-0.150391px',
                color: '#000000'
              }}
            >
              Skip
            </span>
          </button>
        </div>
      </div>

      {/* Notch - Black container at top */}
      <div className="absolute w-[150px] h-[37px] left-[126px] top-0 bg-black rounded-b-[24px]" />
    </div>
  );
}
