import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Segment = { text: string } | { words: string[] };

interface TypewriterEffectProps {
  segments: Segment[];
  speed?: number;
  wordPause?: number;
  className?: string;
  wordClassName?: string;
  key?: string;
}

export function TypewriterEffect({
  segments,
  speed = 40,
  wordPause = 800,
  className = '',
  wordClassName = ''
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState<{ type: 'text' | 'word'; content: string; key: number }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const [hasStarted, setHasStarted] = useState(false);
  const isReducedMotion = useRef(false);

  useEffect(() => {
    isReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      if (isReducedMotion.current) {
        // Render full text immediately
        const fullContent = segments.map((seg, i) => {
          if ('text' in seg) return { type: 'text' as const, content: seg.text, key: i };
          return { type: 'word' as const, content: seg.words[seg.words.length - 1], key: i };
        });
        setDisplayedText(fullContent);
      } else {
        startTyping();
      }
    }
  }, [isInView, hasStarted]);

  const startTyping = async () => {
    setIsTyping(true);
    let currentBlocks: { type: 'text' | 'word'; content: string; key: number }[] = [];
    
    // Helper to update the state safely
    const updateBlocks = (blocks: typeof currentBlocks) => {
      setDisplayedText([...blocks]);
    };

    const typeString = async (str: string, blockIndex: number, isWord: boolean) => {
      let currentStr = '';
      currentBlocks[blockIndex] = { type: isWord ? 'word' : 'text', content: currentStr, key: blockIndex };
      
      for (let i = 0; i < str.length; i++) {
        currentStr += str[i];
        currentBlocks[blockIndex] = { type: isWord ? 'word' : 'text', content: currentStr, key: blockIndex };
        updateBlocks(currentBlocks);
        await new Promise(r => setTimeout(r, speed));
      }
    };

    const deleteString = async (blockIndex: number) => {
      let currentStr = currentBlocks[blockIndex].content;
      while (currentStr.length > 0) {
        currentStr = currentStr.slice(0, -1);
        currentBlocks[blockIndex] = { type: 'word', content: currentStr, key: blockIndex };
        updateBlocks(currentBlocks);
        await new Promise(r => setTimeout(r, speed / 2));
      }
    };

    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      if ('text' in seg) {
        currentBlocks[i] = { type: 'text', content: '', key: i };
        await typeString(seg.text, i, false);
      } else if ('words' in seg) {
        currentBlocks[i] = { type: 'word', content: '', key: i };
        for (let w = 0; w < seg.words.length; w++) {
          await typeString(seg.words[w], i, true);
          if (w < seg.words.length - 1) {
            await new Promise(r => setTimeout(r, wordPause));
            await deleteString(i);
            await new Promise(r => setTimeout(r, speed * 2));
          }
        }
      }
    }
    
    setIsTyping(false);
  };

  return (
    <div ref={containerRef} className={className}>
      {displayedText.map((block) => (
        <span 
          key={block.key} 
          className={block.type === 'word' ? wordClassName : ''}
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {block.content}
        </span>
      ))}
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className={`inline-block w-[3px] h-[1em] bg-current align-middle ml-1 rtl:mr-1 rtl:ml-0 ${wordClassName}`}
        />
      )}
    </div>
  );
}
