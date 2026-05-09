const Badge = ({ count }) => {
  if (!count || count === 0) return null;

  return (
    <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
      {count > 99 ? '99+' : count}
    </span>
  );
};

export default Badge;