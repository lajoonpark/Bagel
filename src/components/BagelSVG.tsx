export default function BagelSVG({
  size = 320,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Bagel illustration"
    >
      {/* Drop shadow */}
      <ellipse cx="160" cy="290" rx="110" ry="16" fill="rgba(0,0,0,0.18)" />

      {/* Outer bagel body */}
      <circle cx="160" cy="155" r="138" fill="#b5651d" />

      {/* Mid-ring - golden crust */}
      <circle cx="160" cy="155" r="128" fill="#d4843a" />

      {/* Sesame / texture ring */}
      <circle cx="160" cy="155" r="118" fill="#c97a2f" />

      {/* Inner lighter bake ring */}
      <circle cx="160" cy="155" r="100" fill="#e2963e" />

      {/* Hole */}
      <circle cx="160" cy="155" r="52" fill="#ff6a00" />

      {/* Top glaze highlight */}
      <ellipse cx="130" cy="100" rx="38" ry="18" fill="rgba(255,245,200,0.22)" />

      {/* Sesame seeds - scattered around the ring */}
      {[
        [160, 30], [195, 38], [225, 58], [246, 88], [254, 120],
        [248, 152], [236, 178], [215, 200], [188, 215], [160, 220],
        [132, 215], [106, 200], [84, 178], [68, 152], [64, 120],
        [72, 88], [94, 58], [125, 38],
        [178, 45], [210, 70], [238, 104], [242, 138], [228, 165],
        [205, 185], [170, 198], [146, 196], [118, 185], [96, 165],
        [78, 136], [82, 104], [112, 72], [148, 52],
      ].map(([cx, cy], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="5.5"
          ry="3"
          fill="#f5deb3"
          transform={`rotate(${(i * 23) % 180} ${cx} ${cy})`}
          opacity="0.85"
        />
      ))}

      {/* Shine spot */}
      <ellipse cx="120" cy="92" rx="22" ry="10" fill="rgba(255,255,255,0.13)" />
    </svg>
  );
}
