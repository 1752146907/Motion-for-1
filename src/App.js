
 

import React, { useState } from "react";
import { motion } from "framer-motion";

const ClickDemo = () => {
  const [clicks, setClicks] = useState([]);

  const handleClick = (e) => {
    // 获取点击的鼠标位置
    const x = e.clientX;
    const y = e.clientY;

    // 添加 "+1" 动画
    setClicks((prev) => [
      ...prev,
      { id: Date.now(), x, y }, // 用时间戳作为唯一 id
    ]);
  };

  const handleAnimationComplete = (id) => {
    // 动画完成后，移除 "+1"
    setClicks((prev) => prev.filter((click) => click.id !== id));
  };

  return (
    <div
      style={{ 
        position: "relative",
      }}
    >
      {/* 动画按钮 */}
      <motion.button
      onClick={handleClick} // 整个屏幕捕获点击事件
        whileTap={{ scale: 0.98 }} // 点击缩放效果
        style={{
          width: "200px",
          height: "200px", 
          fontSize: "16px",
          borderRadius: "5px",
          background: "#007BFF",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        点我
      </motion.button>

      {/* 点击 "+1" 动画 */}
      {clicks.map((click) => (
        <motion.div
          key={click.id}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -50 }} // 向上移动并淡出
          transition={{ duration: 1 }}
          onAnimationComplete={() => handleAnimationComplete(click.id)}
          style={{
            position: "absolute",
            left: click.x,
            top: click.y,
            transform: "translate(-50%, -50%)",
            color: "red",
            fontWeight: "bold",
            pointerEvents: "none",
          }}
        >
          +1
        </motion.div>
      ))}
    </div>
  );
};

export default ClickDemo;

