interface ProgressBarProps {
  current: number;
  max: number;
}

function ProgressBar({ current, max }: ProgressBarProps) {
  const value = Math.floor((current / max) * 100)
  const valueAsPercentage = `${value}%`

  return (
    <div className="animate-pulse flex space-x-4 ">
    <div className="absolute inset-x-0 top-0 h-3">
      <div className="h-full bg-primary-600 progress-bar" style={{ width: valueAsPercentage }} />
    </div>
    </div>
  )
}

export default ProgressBar
