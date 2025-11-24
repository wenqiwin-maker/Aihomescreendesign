import { Sparkles, Plus, AlertCircle, X } from "lucide-react";
import { StatusBar } from "./StatusBar";
import { useState, useRef } from "react";
import { Textarea } from "./ui/textarea";
import selectedBg from "figma:asset/71f51ddbf8b2b5d764325230f5ad1453eab75503.png";

interface QuickSetup3Props {
  onClose: () => void;
  onBack: () => void;
  onStartPractice: () => void;
}

export function QuickSetup3({
  onClose,
  onBack,
  onStartPractice,
}: QuickSetup3Props) {
  const [selectedGoalType, setSelectedGoalType] = useState<
    string | null
  >(null);
  const [customGoal, setCustomGoal] = useState("");
  const [selectedConstraint, setSelectedConstraint] = useState<
    string | null
  >(null);
  const [evidence, setEvidence] = useState("");
  const [directness, setDirectness] = useState(50);
  const [supportiveness, setSupportiveness] = useState(50);
  const [timePressure, setTimePressure] = useState(50);
  const [relationshipState, setRelationshipState] =
    useState<string>("neutral");
  const [avatarChoice, setAvatarChoice] =
    useState<string>("default");
  const [visualStyle, setVisualStyle] = useState<string>(
    "soft-professional",
  );
  const [showPhotoSheet, setShowPhotoSheet] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState<
    string | null
  >(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const goalTypes = [
    "Promotion",
    "Compensation",
    "Resources",
    "Priority",
    "Annual Review",
    "Repair Relationship",
  ];
  const constraints = [
    "Keep Relationship",
    "Keep Trust",
    "Focus Issues",
    "Private Setting",
  ];

  const handleChooseFromPhotos = () => {
    setShowPhotoSheet(false);
    fileInputRef.current?.click();
  };

  const handleTakePhoto = () => {
    setShowPhotoSheet(false);
    cameraInputRef.current?.click();
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedPhoto(reader.result as string);
        setAvatarChoice("upload");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-[390px] h-[844px] bg-white overflow-hidden">
      {/* Status Bar */}
      <div className="flex justify-center items-center px-4 pt-[21px] pb-[19px] gap-[154px] h-[62px]">
        <div className="flex-1 flex justify-center items-center">
          <span
            className="text-black text-center"
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
        <StatusBar />
      </div>

      {/* Sheet Container */}
      <div
        className="absolute left-0 right-0 overflow-y-auto"
        style={{
          top: "62px",
          bottom: "0px",
          backgroundColor: "#F5F6FA",
          boxShadow: "0px 15px 75px rgba(0, 0, 0, 0.18)",
          borderRadius: "38px 38px 0px 0px",
        }}
      >
        {/* Toolbar */}
        <div className="flex flex-col items-center pb-2.5 w-full">
          {/* Grabber */}
          <div className="flex flex-col items-start pt-[5px] w-9 h-4">
            <div
              className="w-9 h-[5px] rounded-full"
              style={{
                background: "#CCCCCC",
                mixBlendMode: "plus-darker",
              }}
            />
          </div>

          {/* Title and Controls */}
          <div className="flex justify-between items-center px-4 gap-[66px] w-full h-11 mt-2">
            {/* Leading Button */}
            <button
              onClick={onBack}
              className="flex flex-row justify-center items-center w-11 h-11 rounded-full relative flex-shrink-0"
              style={{
                background: "rgba(247, 247, 247, 0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "0.5px solid rgba(255, 255, 255, 0.8)",
                boxShadow:
                  "0px 4px 12px rgba(0, 0, 0, 0.15), inset 0px 1px 0px rgba(255, 255, 255, 0.4)",
              }}
            >
              <span
                className="flex items-center justify-center"
                style={{
                  fontFamily: "SF Pro",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#404040",
                }}
              >
                􀯶
              </span>
            </button>

            {/* Spacer */}
            <div className="w-2 h-11" />

            {/* Title */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[13px]">
              <h1
                className="text-[#333333] text-center"
                style={{
                  fontFamily: "SF Pro",
                  fontSize: "17px",
                  fontWeight: 590,
                  lineHeight: "22px",
                  letterSpacing: "-0.43px",
                  mixBlendMode: "plus-darker",
                }}
              >
                Setup
              </h1>
            </div>
          </div>
        </div>

        {/* QuickSetup Content */}
        <div className="flex flex-col items-start pt-8 px-5 gap-10">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <h2
              style={{
                fontFamily: "SF Pro",
                fontSize: "28px",
                fontWeight: 600,
                lineHeight: "34px",
                color: "#333333",
              }}
            >
              Advanced Setup
            </h2>
            <p
              style={{
                fontFamily: "SF Pro",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "rgba(60, 60, 67, 0.6)",
              }}
            >
              AI will play your manager, client, or partner to
              help you practice before the real talk
            </p>
          </div>

          {/* Form Container */}
          <div className="flex flex-col gap-10 w-full">
            {/* GOAL TYPE SECTION */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <h3
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "20px",
                    color: "#333333",
                  }}
                >
                  Goal Type
                </h3>
                <p
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "rgba(60, 60, 67, 0.6)",
                  }}
                >
                  What do you want to achieve in this
                  conversation
                </p>
              </div>
              <div
                className="rounded-xl px-4 pt-5 pb-6"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    {goalTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() =>
                          setSelectedGoalType(type)
                        }
                        className="flex justify-center items-center px-3 h-[47px] rounded-3xl border transition-all"
                        style={{
                          borderColor:
                            selectedGoalType === type
                              ? "#3E5FFF"
                              : "#E9EBF3",
                          backgroundImage:
                            selectedGoalType === type
                              ? `url(${selectedBg})`
                              : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "20px",
                            letterSpacing: "-0.3125px",
                            color:
                              selectedGoalType === type
                                ? "#FFFFFF"
                                : "#0A0A0A",
                            whiteSpace: "nowrap",
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
                    onChange={(e) =>
                      setCustomGoal(e.target.value)
                    }
                    placeholder="Other, e.g., Ask for a feedback..."
                    className="w-full h-12 pl-5 pr-3 border border-[#E9EBF3] rounded-[26px] outline-none bg-transparent"
                    style={{
                      fontFamily: "SF Pro",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "-0.150391px",
                      color: customGoal ? "#0A0A0A" : "#717182",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* CONSTRAINTS SECTION */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <h3
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "20px",
                    color: "#333333",
                  }}
                >
                  Constraints
                </h3>
                <p
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "rgba(60, 60, 67, 0.6)",
                  }}
                >
                  Things you need to be careful about
                </p>
              </div>
              <div
                className="rounded-xl px-4 pt-5 pb-6"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="grid grid-cols-2 gap-3">
                  {constraints.map((constraint) => (
                    <button
                      key={constraint}
                      onClick={() =>
                        setSelectedConstraint(constraint)
                      }
                      className="flex justify-center items-center px-3 h-[47px] rounded-3xl border transition-all"
                      style={{
                        borderColor:
                          selectedConstraint === constraint
                            ? "#3E5FFF"
                            : "#E9EBF3",
                        backgroundImage:
                          selectedConstraint === constraint
                            ? `url(${selectedBg})`
                            : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "SF Pro",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          letterSpacing: "-0.3125px",
                          color:
                            selectedConstraint === constraint
                              ? "#FFFFFF"
                              : "#0A0A0A",
                          textAlign: "center",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {constraint}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* EVIDENCE SECTION */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <div
                  className="flex justify-between items-center"
                  style={{ height: "20px" }}
                >
                  <h3
                    style={{
                      fontFamily: "SF Pro",
                      fontSize: "15px",
                      fontWeight: 600,
                      lineHeight: "20px",
                      color: "#333333",
                    }}
                  >
                    Evidence (Optional)
                  </h3>
                  <button className="flex items-center gap-1 px-0 py-1.5 rounded-lg">
                    <Sparkles
                      className="w-4 h-4 text-[#3E5FFF]"
                      strokeWidth={1.33}
                    />
                    <span
                      className="text-[#3E5FFF]"
                      style={{
                        fontFamily: "SF Pro",
                        fontSize: "14px",
                        fontWeight: 510,
                        lineHeight: "20px",
                        letterSpacing: "-0.150391px",
                      }}
                    >
                      AI Refine
                    </span>
                  </button>
                </div>
                <p
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "rgba(60, 60, 67, 0.6)",
                  }}
                >
                  Specific examples to back up your points
                </p>
              </div>
              <div
                className="rounded-xl px-4 pt-5 pb-6"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex flex-col gap-4">
                  <Textarea
                    value={evidence}
                    onChange={(e) =>
                      setEvidence(e.target.value)
                    }
                    placeholder="Situation: When..., Behavior: You..., Impact: It resulted in..."
                    className="min-h-[100px] border-[#E9EBF3] bg-transparent rounded-2xl resize-none pl-5 pr-3 py-3"
                    style={{
                      fontFamily: "SF Pro",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "19px",
                      letterSpacing: "-0.150391px",
                      color: evidence ? "#0A0A0A" : "#717182",
                    }}
                  />
                  <button className="flex justify-center items-center gap-1 py-3.5 h-12 border border-black/10 rounded-3xl bg-transparent">
                    <Plus
                      className="w-4 h-4 text-[#0A0A0A]"
                      strokeWidth={1.33}
                    />
                    <span
                      style={{
                        fontFamily: "SF Pro",
                        fontSize: "14px",
                        fontWeight: 510,
                        lineHeight: "20px",
                        letterSpacing: "-0.150391px",
                        color: "#0A0A0A",
                      }}
                    >
                      Add Evidence
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* CONVERSATION DYNAMICS SECTION */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <h3
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "20px",
                    color: "#333333",
                  }}
                >
                  Conversation Dynamics
                </h3>
                <p
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "rgba(60, 60, 67, 0.6)",
                  }}
                >
                  Set the tone and difficulty of the practice
                </p>
              </div>
              <div
                className="rounded-xl px-4 pt-5 pb-6"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow:
                    "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex flex-col gap-6">
                  {/* Relationship State */}
                  <div className="flex flex-col gap-3">
                    <label
                      style={{
                        fontFamily: "SF Pro",
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "20px",
                        color: "#333333",
                      }}
                    >
                      1. Relationship State
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        {
                          id: "cooperative",
                          label: "Cooperative",
                        },
                        { id: "neutral", label: "Neutral" },
                        { id: "defensive", label: "Defensive" },
                      ].map((state) => (
                        <button
                          key={state.id}
                          onClick={() =>
                            setRelationshipState(state.id)
                          }
                          className="flex flex-col items-center justify-center gap-2 rounded-[10px] border transition-all"
                          style={{
                            height: "84px",
                            borderColor:
                              relationshipState === state.id
                                ? "#3E5FFF"
                                : "#E5E7EB",
                            backgroundImage:
                              relationshipState === state.id
                                ? `url(${selectedBg})`
                                : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          {state.id === "cooperative" && (
                            <svg
                              width="24"
                              height="21"
                              viewBox="0 0 24 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.5155 14.6129L13.0219 12.1194C12.699 11.7793 12.7058 11.244 13.0374 10.9123C13.3691 10.5807 13.9044 10.5739 14.2445 10.8969L16.7377 13.3904L18.0746 12.0535L9.18945 3.16812C7.4907 1.52046 4.78414 1.54109 3.11047 3.21429C1.43703 4.88749 1.41594 7.59406 3.06336 9.29304L11.9487 18.1796L13.3538 16.7745L10.8603 14.2812C10.5373 13.9412 10.5441 13.4056 10.8758 13.0742C11.2074 12.7426 11.7427 12.7358 12.0828 13.0587L14.5761 15.5523L15.5155 14.6129ZM12.5084 20.0277C12.1665 20.3344 11.6443 20.3202 11.3197 19.9953L1.84086 10.5167C0.271013 8.99351 -0.356643 6.74257 0.198826 4.6271C0.754294 2.51163 2.40664 0.859291 4.52211 0.303822C6.63758 -0.251646 8.88851 0.37601 10.4115 1.94585L11.9485 3.48171L13.5903 1.84109C15.1135 0.27101 17.3642 -0.356646 19.4799 0.198822C21.5954 0.754291 23.2477 2.4064 23.8032 4.5221C24.3587 6.63757 23.7312 8.88851 22.1612 10.4115L12.6847 19.8884C12.6315 19.9419 12.5724 19.9892 12.5084 20.0288V20.0277ZM13.1722 4.70515L19.2971 10.8301L20.9398 9.18945C22.6316 7.49749 22.6313 4.7546 20.9394 3.06288C19.2474 1.37117 16.5045 1.3714 14.8128 3.06335L13.1731 4.70398L13.1722 4.70515Z"
                                fill={
                                  relationshipState === state.id
                                    ? "#FFFFFF"
                                    : "#323333"
                                }
                              />
                            </svg>
                          )}
                          {state.id === "neutral" && (
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.3752 0.00601196C13.2416 0.0648828 14.9764 0.566042 16.5793 1.50797C18.2124 2.43601 19.5644 3.78801 20.4924 5.42105C21.4915 7.10966 22.0131 9.0382 22.0002 11.0002C22.0131 12.9621 21.4915 14.8906 20.4924 16.5793C19.5644 18.2124 18.2125 19.5643 16.5793 20.4923C14.8907 21.4914 12.9622 22.013 11.0002 22.0002C9.03829 22.013 7.10975 21.4914 5.42114 20.4923C3.79059 19.5493 2.44007 18.1898 1.50806 16.5529C0.511451 14.873 -0.0102358 12.9534 0.000244141 11.0002C0.000270248 9.00826 0.503293 7.15728 1.50806 5.44742C2.39585 3.91521 3.64446 2.6251 5.1438 1.68961L5.44751 1.50797C7.12745 0.511308 9.04693 -0.0103064 11.0002 0.000152588L11.3752 0.00601196ZM10.9895 2.00015C9.39897 1.99164 7.83596 2.41615 6.46802 3.22769L6.45923 3.23257L6.45044 3.23843C5.11792 4.0105 4.01059 5.11783 3.23853 6.45035L3.23169 6.46109L3.23071 6.46011C2.40735 7.86134 2.00027 9.36296 2.00024 11.0002V11.0109C1.99225 12.502 2.36507 13.9689 3.08032 15.2736L3.22778 15.5324L3.24536 15.5636C3.9547 16.8094 4.96303 17.8575 6.177 18.6144L6.42212 18.7619L6.4397 18.7716C7.81603 19.5858 9.38846 20.0106 10.9875 20.0002H11.0129C12.6121 20.0106 14.1844 19.5859 15.5608 18.7716L15.5764 18.7628L15.5911 18.7541C16.911 18.004 18.0041 16.9109 18.7542 15.591L18.7629 15.5763L18.7717 15.5607C19.5859 14.1843 20.0107 12.612 20.0002 11.0128V10.9875C20.0107 9.38837 19.5859 7.81594 18.7717 6.43961L18.7629 6.42398L18.7542 6.40933C18.0041 5.08952 16.9109 3.99627 15.5911 3.24625L15.5784 3.23941L15.5667 3.2316C14.1682 2.40989 12.6584 2.00016 11.0002 2.00015H10.9895ZM14.3059 14.8615H7.69556V13.2218H14.3059V14.8615ZM7.13989 6.61148C7.61582 6.61149 8.00817 6.76978 8.31665 7.08707C8.62514 7.40437 8.77954 7.7928 8.77954 8.25113C8.77944 8.70923 8.62014 9.10091 8.30298 9.42691C7.98569 9.75302 7.5982 9.91616 7.13989 9.91617C6.68157 9.91617 6.28925 9.75788 5.96313 9.44058C5.80339 9.28728 5.67725 9.10237 5.59302 8.89761C5.50884 8.69287 5.46821 8.47243 5.47388 8.25113C5.47388 7.7928 5.63314 7.40437 5.95044 7.08707C6.10567 6.93088 6.29091 6.80754 6.49536 6.72574C6.7 6.64388 6.91957 6.60537 7.13989 6.61148ZM14.887 6.61148C15.3628 6.61148 15.7553 6.76991 16.0637 7.08707C16.3722 7.40437 16.5266 7.7928 16.5266 8.25113C16.5265 8.70909 16.368 9.10097 16.051 9.42691C15.7337 9.75303 15.3453 9.91617 14.887 9.91617C14.4288 9.91609 14.0362 9.7578 13.7102 9.44058C13.5505 9.28728 13.4243 9.10234 13.3401 8.89761C13.2559 8.69286 13.2163 8.47243 13.2219 8.25113C13.2219 7.7928 13.3802 7.40437 13.6975 7.08707C13.8528 6.93075 14.0388 6.80757 14.2434 6.72574C14.4478 6.64403 14.6669 6.60542 14.887 6.61148Z"
                                fill={
                                  relationshipState === state.id
                                    ? "#FFFFFF"
                                    : "#323333"
                                }
                              />
                            </svg>
                          )}
                          {state.id === "defensive" && (
                            <svg
                              width="19"
                              height="22"
                              viewBox="0 0 19 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.92871 0.0409241C9.09026 -0.0136282 9.26521 -0.0136391 9.42676 0.0409241L17.8252 2.86905C17.9794 2.92092 18.1139 3.01928 18.209 3.15128C18.3041 3.28343 18.3552 3.44252 18.3555 3.60538V12.079C18.3553 17.5973 9.75578 21.7496 9.38867 21.9247C9.28449 21.9738 9.17083 21.9995 9.05566 21.9999C8.95697 22.0002 8.85901 21.9814 8.76758 21.9442C8.4078 21.8008 0.000124762 18.3762 0 11.9091V3.63174C0.000122205 3.46902 0.0515483 3.30981 0.146484 3.17764C0.241404 3.04567 0.375278 2.94646 0.529297 2.89444L8.92871 0.0409241ZM1.55664 4.18253V11.9023C1.55664 16.6838 7.57578 19.6974 9.03125 20.3564C10.513 19.5882 16.7988 16.0934 16.7988 12.0722V4.16495L9.17871 1.59952L1.55664 4.18253ZM10.5576 6.64346L8.65527 9.70987H11.3711C11.5101 9.71117 11.6466 9.74953 11.7656 9.8212C11.8845 9.89281 11.9817 9.9951 12.0479 10.1171C12.114 10.2392 12.1465 10.3768 12.1416 10.5155C12.1366 10.6544 12.0943 10.79 12.0195 10.9071L9.36035 15.0673L8.04492 14.2294L9.93945 11.2665H7.25488C7.1165 11.2664 6.98067 11.2291 6.86133 11.1591C6.74189 11.0889 6.64265 10.9881 6.5752 10.8671C6.50786 10.7458 6.47412 10.6083 6.47754 10.4696C6.48097 10.331 6.52154 10.1958 6.59473 10.078L9.23047 5.82217L10.5576 6.64346Z"
                                fill={
                                  relationshipState === state.id
                                    ? "#FFFFFF"
                                    : "#3A3D3F"
                                }
                              />
                            </svg>
                          )}
                          <span
                            style={{
                              fontFamily: "SF Pro",
                              fontSize: "14px",
                              fontWeight: 500,
                              lineHeight: "20px",
                              letterSpacing: "-0.150391px",
                              color:
                                relationshipState === state.id
                                  ? "#FFFFFF"
                                  : "#0A0A0A",
                            }}
                          >
                            {state.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Counterpart Style */}
                  <div className="flex flex-col gap-5">
                    <label
                      style={{
                        fontFamily: "SF Pro",
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "20px",
                        letterSpacing: "-0.150391px",
                        color: "#0A0A0A",
                      }}
                    >
                      2. Counterpart Style
                    </label>

                    {/* Directness Slider */}
                    <div className="flex flex-col">
                      <div
                        className="flex justify-between items-center"
                        style={{ height: "20px" }}
                      >
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "20px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          Directness
                        </span>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "20px",
                            textAlign: "right",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          {directness}%
                        </span>
                      </div>
                      <div className="relative w-full h-[12px] mt-1">
                        <div
                          className="absolute w-full h-[12px] bg-[#ECECF0] rounded-full"
                          style={{
                            border:
                              "0.75px solid rgba(0, 0, 0, 0.1)",
                            boxSizing: "border-box",
                          }}
                        />
                        {/* Dots indicator */}
                        <div
                          className="absolute flex flex-row items-center justify-between"
                          style={{
                            width: "calc(100% - 20px)",
                            height: "4px",
                            left: "10px",
                            top: "4px",
                            pointerEvents: "none",
                          }}
                        >
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                        </div>
                        <div
                          className="absolute h-[12px] bg-[#82C9FF] rounded-l-full"
                          style={{ width: `${directness}%` }}
                        />
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={directness}
                          onChange={(e) =>
                            setDirectness(
                              Number(e.target.value),
                            )
                          }
                          className="absolute w-full h-[12px] opacity-0 cursor-pointer"
                        />
                        <div
                          className="absolute w-4 h-4 bg-white border border-[#82C9FF] rounded-full shadow-sm"
                          style={{
                            left: `calc(${directness}% - 8px)`,
                            top: "-2px",
                            boxShadow:
                              "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                      </div>
                      <div className="flex justify-between mt-[6px]">
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          Indirect
                        </span>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "12px",
                            lineHeight: "16px",
                            textAlign: "right",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          Very Direct
                        </span>
                      </div>
                    </div>

                    {/* Supportiveness Slider */}
                    <div className="flex flex-col">
                      <div
                        className="flex justify-between items-center"
                        style={{ height: "20px" }}
                      >
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "14px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          Supportiveness
                        </span>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            textAlign: "right",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          {supportiveness}%
                        </span>
                      </div>
                      <div className="relative w-full h-[12px] mt-1">
                        <div
                          className="absolute w-full h-[12px] bg-[#ECECF0] rounded-full"
                          style={{
                            border:
                              "0.75px solid rgba(0, 0, 0, 0.1)",
                            boxSizing: "border-box",
                          }}
                        />
                        {/* Dots indicator */}
                        <div
                          className="absolute flex flex-row items-center justify-between"
                          style={{
                            width: "calc(100% - 20px)",
                            height: "4px",
                            left: "10px",
                            top: "4px",
                            pointerEvents: "none",
                          }}
                        >
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                        </div>
                        <div
                          className="absolute h-[12px] bg-[#76EAE7] rounded-l-full"
                          style={{
                            width: `${supportiveness}%`,
                          }}
                        />
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={supportiveness}
                          onChange={(e) =>
                            setSupportiveness(
                              Number(e.target.value),
                            )
                          }
                          className="absolute w-full h-[12px] opacity-0 cursor-pointer"
                        />
                        <div
                          className="absolute w-4 h-4 bg-white border border-[#76EAE7] rounded-full shadow-sm"
                          style={{
                            left: `calc(${supportiveness}% - 8px)`,
                            top: "-2px",
                            boxShadow:
                              "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                      </div>
                      <div className="flex justify-between mt-[6px]">
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          Very Supportive
                        </span>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          Critical
                        </span>
                      </div>
                    </div>

                    {/* Time Pressure Slider */}
                    <div className="flex flex-col">
                      <div
                        className="flex justify-between items-center"
                        style={{ height: "20px" }}
                      >
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "14px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          Time Pressure
                        </span>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            textAlign: "right",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          {timePressure}%
                        </span>
                      </div>
                      <div className="relative w-full h-[12px] mt-1">
                        <div
                          className="absolute w-full h-[12px] bg-[#ECECF0] rounded-full"
                          style={{
                            border:
                              "0.75px solid rgba(0, 0, 0, 0.1)",
                            boxSizing: "border-box",
                          }}
                        />
                        {/* Dots indicator */}
                        <div
                          className="absolute flex flex-row items-center justify-between"
                          style={{
                            width: "calc(100% - 20px)",
                            height: "4px",
                            left: "10px",
                            top: "4px",
                            pointerEvents: "none",
                          }}
                        >
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "50%",
                            }}
                          />
                        </div>
                        <div
                          className="absolute h-[12px] bg-[#FD8B6D] rounded-l-full"
                          style={{ width: `${timePressure}%` }}
                        />
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={timePressure}
                          onChange={(e) =>
                            setTimePressure(
                              Number(e.target.value),
                            )
                          }
                          className="absolute w-full h-[12px] opacity-0 cursor-pointer"
                        />
                        <div
                          className="absolute w-4 h-4 bg-white border border-[#FD8B6D] rounded-full shadow-sm"
                          style={{
                            left: `calc(${timePressure}% - 8px)`,
                            top: "-2px",
                            boxShadow:
                              "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                      </div>
                      <div className="flex justify-between mt-[6px]">
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          Urgent
                        </span>
                        <span
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.3125px",
                            color: "rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          Relaxed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AVATAR APPEARANCE SECTION */}
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex flex-col">
                  <h3
                    style={{
                      fontFamily: "SF Pro",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "20px",
                      letterSpacing: "-0.150391px",
                      color: "rgba(0, 0, 0, 0.9)",
                    }}
                  >
                    Avatar Appearance
                  </h3>
                  <p
                    style={{
                      fontFamily: "SF Pro",
                      fontSize: "14px",
                      fontWeight: 300,
                      lineHeight: "20px",
                      letterSpacing: "-0.150391px",
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    Choose how your counterpart looks
                  </p>
                </div>
                <div
                  className="rounded-xl px-4 pt-5 pb-6"
                  style={{
                    backgroundColor: "#FFFFFF",
                    boxShadow:
                      "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex flex-col gap-6">
                    {/* Avatar Choice */}
                    <div className="flex flex-col gap-3">
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() =>
                            setAvatarChoice("default")
                          }
                          className="flex flex-col items-center justify-center gap-2 rounded-[10px] border transition-all"
                          style={{
                            height: "84px",
                            borderColor:
                              avatarChoice === "default"
                                ? "#3E5FFF"
                                : "#E5E7EB",
                            backgroundColor:
                              avatarChoice === "default"
                                ? "#3E5FFF"
                                : "transparent",
                          }}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                              fill={
                                avatarChoice === "default"
                                  ? "#FFFFFF"
                                  : "#323333"
                              }
                            />
                          </svg>
                          <span
                            style={{
                              fontFamily: "SF Pro",
                              fontSize: "14px",
                              fontWeight: 500,
                              lineHeight: "20px",
                              letterSpacing: "-0.150391px",
                              color:
                                avatarChoice === "default"
                                  ? "#FFFFFF"
                                  : "#0A0A0A",
                            }}
                          >
                            AI Generated
                          </span>
                        </button>

                        <button
                          onClick={() =>
                            setShowPhotoSheet(true)
                          }
                          className="flex flex-col items-center justify-center gap-2 rounded-[10px] border transition-all relative overflow-hidden"
                          style={{
                            height: "84px",
                            borderColor:
                              avatarChoice === "upload"
                                ? "#3E5FFF"
                                : "#E5E7EB",
                            backgroundColor:
                              avatarChoice === "upload"
                                ? "#3E5FFF"
                                : "transparent",
                          }}
                        >
                          {uploadedPhoto ? (
                            <>
                              <img
                                src={uploadedPhoto}
                                alt="Uploaded"
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/20" />
                            </>
                          ) : (
                            <>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z"
                                  fill={
                                    avatarChoice === "upload"
                                      ? "#FFFFFF"
                                      : "#323333"
                                  }
                                />
                              </svg>
                              <span
                                style={{
                                  fontFamily: "SF Pro",
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  lineHeight: "20px",
                                  letterSpacing: "-0.150391px",
                                  color:
                                    avatarChoice === "upload"
                                      ? "#FFFFFF"
                                      : "#0A0A0A",
                                }}
                              >
                                Upload
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Visual Style - Only show when photo is uploaded */}
                    {uploadedPhoto && (
                      <div className="flex flex-col gap-3">
                        <label
                          style={{
                            fontFamily: "SF Pro",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "20px",
                            letterSpacing: "-0.150391px",
                            color: "#0A0A0A",
                          }}
                        >
                          Visual Style
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            {
                              id: "soft-professional",
                              label: "Soft Professional",
                            },
                            {
                              id: "realistic",
                              label: "Realistic",
                            },
                            { id: "cartoon", label: "Cartoon" },
                            {
                              id: "minimalist",
                              label: "Minimalist",
                            },
                          ].map((style) => (
                            <button
                              key={style.id}
                              onClick={() =>
                                setVisualStyle(style.id)
                              }
                              className="flex justify-center items-center px-3 h-[47px] rounded-3xl border transition-all"
                              style={{
                                borderColor:
                                  visualStyle === style.id
                                    ? "#3E5FFF"
                                    : "#E9EBF3",
                                backgroundColor:
                                  visualStyle === style.id
                                    ? "#3E5FFF"
                                    : "transparent",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "SF Pro",
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  lineHeight: "20px",
                                  letterSpacing: "-0.3125px",
                                  color:
                                    visualStyle === style.id
                                      ? "#FFFFFF"
                                      : "#0A0A0A",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {style.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Start Practice Button */}
          <button
            onClick={onStartPractice}
            className="flex justify-center items-center py-3.5 h-12 rounded-[28px] w-[350px] mt-4"
            style={{
              backgroundColor: "#3E5FFF",
            }}
          >
            <span
              className="text-white text-center"
              style={{
                fontFamily: "SF Pro",
                fontSize: "16px",
                fontWeight: 510,
                lineHeight: "20px",
                letterSpacing: "-0.150391px",
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
                fontFamily: "SF Pro",
                fontSize: "16px",
                fontWeight: 510,
                lineHeight: "20px",
                letterSpacing: "-0.150391px",
                color: "#000000",
              }}
            >
              Skip
            </span>
          </button>
        </div>
      </div>

      {/* Notch - Black container at top */}
      <div className="absolute w-[150px] h-[37px] left-[126px] top-0 bg-black rounded-b-[24px]" />

      {/* Photo Sheet */}
      {showPhotoSheet && (
        <>
          {/* Backdrop */}
          <div
            className="absolute left-0 right-0 top-0 bottom-0 bg-black/40 z-40 transition-opacity"
            onClick={() => setShowPhotoSheet(false)}
          />

          {/* Action Sheet */}
          <div className="absolute left-0 right-0 bottom-0 z-50 px-2 pb-2">
            {/* Options Container */}
            <div
              className="bg-white rounded-[13px] overflow-hidden mb-2"
              style={{
                backdropFilter: "blur(20px)",
                backgroundColor: "rgba(255, 255, 255, 0.94)",
              }}
            >
              {/* Choose from Photos */}
              <button
                onClick={handleChooseFromPhotos}
                className="w-full px-4 h-[57px] flex items-center justify-center border-b"
                style={{
                  borderBottomColor: "rgba(60, 60, 67, 0.29)",
                }}
              >
                <span
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "-0.45px",
                    color: "#007AFF",
                  }}
                >
                  Choose from Photos
                </span>
              </button>

              {/* Take Photo */}
              <button
                onClick={handleTakePhoto}
                className="w-full px-4 h-[57px] flex items-center justify-center"
              >
                <span
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "-0.45px",
                    color: "#007AFF",
                  }}
                >
                  Take Photo
                </span>
              </button>
            </div>

            {/* Cancel Button */}
            <div
              className="bg-white rounded-[13px] overflow-hidden"
              style={{
                backdropFilter: "blur(20px)",
                backgroundColor: "rgba(255, 255, 255, 0.94)",
              }}
            >
              <button
                onClick={() => setShowPhotoSheet(false)}
                className="w-full px-4 h-[57px] flex items-center justify-center"
              >
                <span
                  style={{
                    fontFamily: "SF Pro",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    letterSpacing: "-0.45px",
                    color: "#007AFF",
                  }}
                >
                  Cancel
                </span>
              </button>
            </div>

            {/* Home Indicator Space */}
            <div className="h-[34px]" />
          </div>
        </>
      )}

      {/* File Input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Camera Input */}
      <input
        type="file"
        ref={cameraInputRef}
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}