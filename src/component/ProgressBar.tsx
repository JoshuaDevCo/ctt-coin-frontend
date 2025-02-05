export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className="w-[65vw] h-6 border-[#E39431] bg-[#2F2F2F] border-[1px] rounded-full flex items-center"
      >
        <div
          className="bg-gradient-to-r from-[#A07FF1] to-[#06E1F4] h-4 rounded-full mx-1"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  )
}
