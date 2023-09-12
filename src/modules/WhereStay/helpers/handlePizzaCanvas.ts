import {pizzaItems} from "../constants/pizzaItems.ts";

const degreeToRadian = (degree: number) => degree * Math.PI / 180

export const handleCanvas = (canvas: HTMLCanvasElement, items: number, active: number | undefined, degreeOffset: number = 0) => {
    const ctx = canvas.getContext("2d")

    if (ctx) {
        const height = ctx.canvas.height
        const width = ctx.canvas.width
        const centerX = width / 2
        const centerY = height / 2

        ctx.beginPath()
        ctx.fillStyle = "#e74c3c";
        ctx.arc(centerX, centerY, centerY, 0, Math.PI * 2);
        ctx.fill()

        if (!active) return

        const sliceSize = 360 / items
        const offset = degreeToRadian(degreeOffset)

        for (let i = 1; i <= items; i++) {
            ctx.beginPath()
            const start = (i - 1) * degreeToRadian(sliceSize) + offset - Math.PI + degreeToRadian(sliceSize) * 2
            const end = i * degreeToRadian(sliceSize) + offset - Math.PI + degreeToRadian(sliceSize) * 2

            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, centerY, start, end)

            if (active === pizzaItems[i - 1]) {
                ctx.fillStyle = "#2ecc71"
                ctx.strokeStyle = "#34495e"
                ctx.fill()
                ctx.stroke()
            } else {
                ctx.strokeStyle = "#34495e"
                ctx.stroke()
            }
        }

    }
}