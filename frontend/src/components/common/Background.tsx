import hexToRGBA from "@/helper/hexToRGBA";
import { useLayoutEffect, useRef } from "react";

interface ShootingStar {
    x: number;
    y: number;
    length: number;
    speed: number;
    angle: number;
    opacity: number;
}

const Background = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const colors = ["#ffffff", "#ffdede", "#cce5ff", "#ffeacc", "#e0ffe6"];

        // Parallax layers
        const layers = [
            { count: 100, speedFactor: 0.2 },
            { count: 70, speedFactor: 0.5 },
            { count: 50, speedFactor: 1 },
        ];

        const stars = layers.flatMap((layer) =>
            Array.from({ length: layer.count }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                baseRadius: Math.random() * 1.5,
                baseOpacity: Math.random() * 0.5 + 0.5,
                twinkleSpeed: Math.random() * 0.05 + 0.01,
                angle: Math.random() * Math.PI * 2,
                speed: (Math.random() * 0.05 + 0.02) * layer.speedFactor,
                color: colors[Math.floor(Math.random() * colors.length)],
                layerSpeed: layer.speedFactor,
            }))
        );

        const shootingStars: ShootingStar[] = [];
        let shootingTimer = 0;
        let shootingDelay = Math.random() * 120 + 120; // random từ 2s đến 4s (60fps)
        let animationFrameId: number;

        // const animate = () => {
        //     ctx.clearRect(0, 0, canvas.width, canvas.height);

        //     // Gradient background
        //     const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        //     gradient.addColorStop(0, "#0f0f1e");
        //     gradient.addColorStop(1, "#090918");
        //     ctx.fillStyle = gradient;
        //     ctx.fillRect(0, 0, canvas.width, canvas.height);

        //     stars.forEach((star, index) => {
        //         // Twinkle
        //         star.angle += star.twinkleSpeed;
        //         const opacity = star.baseOpacity * (0.5 + 0.5 * Math.sin(star.angle));

        //         // Glow effect
        //         ctx.shadowBlur = 5;
        //         ctx.shadowColor = star.color;

        //         // Star
        //         ctx.beginPath();
        //         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        //         ctx.fillStyle = hexToRGBA(star.color, opacity);
        //         ctx.fill();

        //         // Reset glow for next star
        //         ctx.shadowBlur = 0;

        //         // Move star
        //         star.y += star.speed;
        //         if (star.y > canvas.height) {
        //             star.y = 0;
        //             star.x = Math.random() * canvas.width;
        //         }
        //     });

        //     animationFrameId = requestAnimationFrame(animate);
        // };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, "#0f0f1e");
            gradient.addColorStop(1, "#090918");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (const star of stars) {
                // Breathing effect
                star.angle += star.twinkleSpeed;
                const scale = 0.5 + 0.5 * Math.sin(star.angle);
                const radius = star.baseRadius * scale;
                const opacity = star.baseOpacity * scale;

                ctx.fillStyle = hexToRGBA(star.color, opacity);
                ctx.beginPath();
                ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
                ctx.fill();

                star.y += star.speed;
                // star.x += Math.sin(star.angle) * star.layerSpeed; // Parallax effect
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            }

            // Shooting stars
            if (shootingTimer <= 0) {
                // Tạo sao băng mới
                const duration = 2; // thời gian tồn tại của sao băng (giây)
                const frames = 60 * duration;
                const speed = Math.random() * 4 + 6; // khoảng 6–10
                const length = speed * frames * 0.5; // đủ dài để tạo hiệu ứng kéo đuôi

                shootingStars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height * 0.5, // xuất hiện từ nửa trên
                    length,
                    speed,
                    angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ví dụ bay chéo 45 độ " Math.PI / 4"
                    opacity: 1,
                });

                shootingTimer = shootingDelay;
                shootingDelay = Math.random() * 120 + 120; // lần sau delay mới
            } else {
                shootingTimer--;
            }

            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const star = shootingStars[i];
                ctx.strokeStyle = `rgba(255,255,255,${star.opacity})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(star.x, star.y);
                ctx.lineTo(star.x - star.length * Math.cos(star.angle), star.y - star.length * Math.sin(star.angle));
                ctx.stroke();

                star.x += star.speed * Math.cos(star.angle);
                star.y += star.speed * Math.sin(star.angle);
                star.opacity -= 1 / (60 * 2); // 2 giây duration

                if (star.opacity <= 0) shootingStars.splice(i, 1);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />;
};

export default Background;
