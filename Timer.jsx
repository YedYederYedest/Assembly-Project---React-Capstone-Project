import { useEffect, useState } from "react"

export default function Timer({ isGameOver, onTimeUp }) {
    const [timeLeft, setTimeLeft] = useState(60)

    useEffect(() => {
        if (isGameOver) return

        if (timeLeft <= 0) {
            onTimeUp()
            return
        }

        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [timeLeft, isGameOver, onTimeUp])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return (
        <div className="timer">
            Time left: {minutes}:{seconds.toString().padStart(2, "0")}
        </div>
    )
}