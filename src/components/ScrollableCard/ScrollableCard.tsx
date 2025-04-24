import React, { useState } from "react";
import { ReactNode } from "react";

type InnerCardContent = {
  label: ReactNode;
  content: ReactNode;
};

type CardProps = {
  title?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  button_style?: React.CSSProperties;
  content?: InnerCardContent[];
};

const ScrollableCard: React.FC<CardProps> = ({
  title = "",
  children,
  style = {},
  button_style = {},
  content = [],
}) => {
  const [index, setIndex] = useState(0);

  const defaultStyle: React.CSSProperties = {
    backgroundColor: "rgba(100, 100, 100, 0.1)",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    margin: "5%",
    ...style,
  };

  const defaultButtonStyle: React.CSSProperties = {
    background: "white",
    color: "grey",
    border: "none",
    borderRadius: "100%",
    padding: "0.5rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    cursor: "pointer",
    ...button_style,
  };

  const next = () => {
    if (index < content.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <h1 style={{ marginBottom: "0.5rem" }}>{title}</h1>
      <div style={defaultStyle}>
        {children}

        {content.length > 0 && (
          <div style={{ width: "100%" }}>
            {/* Label + Buttons row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Prev Button */}
              <button
                onClick={prev}
                disabled={index === 0}
                style={{
                  ...defaultButtonStyle,
                  marginRight: "0.5rem",
                  opacity: index === 0 ? 0.5 : 1,
                  cursor: index === 0 ? "not-allowed" : "pointer",
                }}
              >
                &lt;
              </button>

              {/* Scrollable Label */}
              <div
                style={{
                  overflow: "hidden",
                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: `${content.length * 100}%`,
                    transform: `translateX(-${index * (100 / content.length)}%)`,
                    transition: "transform 0.4s ease-in-out",
                  }}
                >
                  {content.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: `${100 / content.length}%`,
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={next}
                disabled={index === content.length - 1}
                style={{
                  ...defaultButtonStyle,
                  marginLeft: "0.5rem",
                  opacity: index === content.length - 1 ? 0.5 : 1,
                  cursor: index === content.length - 1 ? "not-allowed" : "pointer",
                }}
              >
                &gt;
              </button>
            </div>

            {/* Scrollable Content */}
            <div
              style={{
                overflow: "hidden", // Hide anything that overflows horizontally
                width: "100%", // Ensure it fills the parent width
                
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: `${content.length * 100}%`,
                  transform: `translateX(-${index * (100 / content.length)}%)`,
                  transition: "transform 0.4s ease-in-out",
                }}
              >
                {content.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: `${100 / content.length}%`,
                      flexShrink: 0,
                      boxSizing: "border-box", 
                      padding: 0, 
                    }}
                  >
                    <div
                      style={{
                        background: "inherit",
                        borderRadius: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      }}
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ScrollableCard;
