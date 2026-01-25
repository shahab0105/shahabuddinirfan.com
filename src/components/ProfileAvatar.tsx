"use client";

interface ProfileAvatarProps {
  src: string;
  name: string;
}

export function ProfileAvatar({ src, name }: ProfileAvatarProps) {
  return (
    <div className="relative h-28 w-28 overflow-hidden rounded-full bg-emerald-500/20 ring-2 ring-[var(--bg-elevated)]">
      <div className="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-emerald-400">
        {name.charAt(0)}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        className="relative z-10 h-full w-full object-cover object-center"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}
