import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import "./QuickStatsSection.css";

// Define stats with custom formatting for each item
const stats = [
  { value: 11, suffix: "+", label: "Years experience" },
  { value: 40, suffix: "+", label: "Fastfood items" },
  {
    value: 3000,
    suffix: "+",
    label: "Happy Customers",
    formatter: (value) => `${(value / 1000).toFixed(1).replace(".0", "")}k+`,
  },
  { value: 10, suffix: "+", label: "Awards Won" },
];

export default function QuickStatsSection() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  // Setup Intersection Observer to trigger count when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="quick-stats-bg" ref={sectionRef}>
      <section className="quick-stats-section">
        {stats.map((stat, index) => (
          <div className="stat-box" key={index}>
            <h2 className="stat-number">
              {startCount && (
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  suffix={stat.suffix}
                  // If formatter is defined, use it
                  {...(stat.formatter && { formattingFn: stat.formatter })}
                />
              )}
            </h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
