export default function WeatherBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating clouds */}
      <svg className="absolute top-10 left-5 w-20 h-12 animate-floatCloud" viewBox="0 0 64 32" fill="white/20">
        <ellipse cx="32" cy="16" rx="32" ry="16" />
      </svg>
      <svg className="absolute top-32 left-1/2 w-28 h-16 animate-floatCloud" viewBox="0 0 64 32" fill="white/30">
        <ellipse cx="32" cy="16" rx="32" ry="16" />
      </svg>

      {/* Falling raindrops */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={`absolute top-0 w-1 h-4 bg-blue-200 rounded animate-fall`}
          style={{ left: `${i * 10 + Math.random() * 5}%`, animationDelay: `${Math.random()*2}s`, animationDuration: `${1.5 + Math.random()}s` }}
        ></div>
      ))}
    </div>
  );
}
