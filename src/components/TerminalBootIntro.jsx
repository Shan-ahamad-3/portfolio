import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  ">>> import zeeshan",
  "Loading skills... [Python, Pandas, Matplotlib]",
  "Compiling portfolio... done."
];

export default function TerminalBootIntro({ onComplete }) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= bootLines.length) {
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 450);
      return () => clearTimeout(exitTimer);
    }

    const targetLine = bootLines[currentLineIndex];
    let charIndex = 0;

    const interval = setInterval(() => {
      charIndex++;
      setDisplayedText(targetLine.slice(0, charIndex));

      if (charIndex >= targetLine.length) {
        clearInterval(interval);
        setIsTyping(false);
        setTimeout(() => {
          setDisplayedText("");
          setIsTyping(true);
          setCurrentLineIndex((prev) => prev + 1);
        }, 280);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [currentLineIndex, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0E11] p-4 text-[#ECEFF4] font-mono selection:bg-[#C77D2B] selection:text-[#0B0E11]"
      >
        <div className="w-full max-w-lg rounded-lg border border-[#2A303A] bg-[#14181E] p-5 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#2A303A] pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8E98A5]/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#8E98A5]/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#8E98A5]/40" />
              <span className="text-xs text-[#8E98A5] ml-2">python3</span>
            </div>

            <button
              onClick={onComplete}
              type="button"
              className="text-xs px-2.5 py-1 rounded bg-[#181D24] hover:bg-[#2A303A] text-[#8E98A5] hover:text-[#ECEFF4] border border-[#2A303A] transition-colors cursor-pointer"
            >
              Skip [ESC]
            </button>
          </div>

          {/* Terminal Body */}
          <div className="space-y-2 text-xs sm:text-sm min-h-[110px]">
            {bootLines.slice(0, currentLineIndex).map((line, idx) => (
              <div key={idx} className="text-[#8E98A5]">
                <span className="text-[#C77D2B] font-bold mr-2">$</span>
                <span className={idx === 0 ? "text-[#C77D2B] font-semibold" : idx === 2 ? "text-[#3D8B73]" : "text-[#ECEFF4]"}>
                  {line}
                </span>
              </div>
            ))}

            {currentLineIndex < bootLines.length && (
              <div className="text-[#ECEFF4] flex items-center">
                <span className="text-[#C77D2B] font-bold mr-2">$</span>
                <span>{displayedText}</span>
                {isTyping && (
                  <span className="w-2 h-4 bg-[#C77D2B] inline-block ml-1 animate-pulse" />
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
